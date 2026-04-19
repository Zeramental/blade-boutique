import fs from 'node:fs';

const raw = JSON.parse(fs.readFileSync('C:/Users/Kyle/fatboy-agents/blade-boutique/build/keyword-research/volume_raw.json', 'utf8'));

const data = raw.filter(r => r.search_volume && r.search_volume > 0);
const zero = raw.filter(r => !r.search_volume || r.search_volume === 0);

// Intent classifier
function intent(kw) {
  const k = kw.toLowerCase();
  const infoMarkers = ['aftercare','healing','how long','how much','does it hurt','is it safe',
    'before and after','vs ','pain','side effect','last','reviews','training','course','removal'];
  const navMarkers = [];
  const localMarkers = ['johannesburg','joburg','jhb','randburg','sandton','northriding','fourways',
    'bryanston','rosebank','pretoria','gauteng','south africa','near me','bromhof','honeydew','cresta','northcliff'];
  const commercialMarkers = ['best','cheap','affordable','top','price','cost','artist','salon','studio','near me'];

  if (infoMarkers.some(m => k.includes(m))) return 'info';
  if (localMarkers.some(m => k.includes(m)) || commercialMarkers.some(m => k.includes(m))) return 'commercial';
  // Bare service terms — typically commercial
  return 'commercial';
}

function priority(vol, int) {
  if (vol >= 30 && int === 'commercial') return 'high';
  if (vol >= 10 && int === 'commercial') return 'med';
  if (int === 'info' && vol >= 100) return 'med';
  return 'low';
}

const rows = data.map(r => {
  const kw = r.keyword;
  const int = intent(kw);
  const vol = r.search_volume || 0;
  const comp = r.competition || 'n/a';
  const cpcUsd = r.cpc || 0;
  const cpcZar = cpcUsd ? (cpcUsd * 18.5).toFixed(2) : '0.00';
  const pri = priority(vol, int);
  return { kw, vol, comp, cpcZar, int, pri };
}).sort((a,b) => b.vol - a.vol);

// Full table
let md = '# Blade Boutique SA — Keyword Volume Research (DataForSEO)\n\n';
md += `Pulled ${raw.length} keywords. ${data.length} returned volume > 0 in South Africa (location_code 2710).\n\n`;
md += '## Full keyword table (sorted by monthly volume)\n\n';
md += '| Keyword | Monthly volume | Competition | CPC (ZAR) | Intent | Priority |\n';
md += '|---|---:|---|---:|---|---|\n';
for (const r of rows) {
  md += `| ${r.kw} | ${r.vol} | ${r.comp} | R${r.cpcZar} | ${r.int} | ${r.pri} |\n`;
}

// Top 30
md += '\n## Top 30 keywords to target\n\n';
const top30 = rows.filter(r => r.pri === 'high' || r.pri === 'med').slice(0, 30);
md += '| # | Keyword | Volume | Intent | CPC (ZAR) |\n|---|---|---:|---|---:|\n';
top30.forEach((r,i) => {
  md += `| ${i+1} | ${r.kw} | ${r.vol} | ${r.int} | R${r.cpcZar} |\n`;
});

// Top 10 info
md += '\n## Top 10 informational keywords (blog targets)\n\n';
const info = rows.filter(r => r.int === 'info').slice(0, 10);
md += '| # | Keyword | Volume | CPC (ZAR) |\n|---|---|---:|---:|\n';
info.forEach((r,i) => {
  md += `| ${i+1} | ${r.kw} | ${r.vol} | R${r.cpcZar} |\n`;
});

// Zero-volume (first 50 shown, full count listed)
md += `\n## Zero-volume keywords to drop (${zero.length} total)\n\n`;
md += 'Sample of terms with no measurable SA volume (drop from paid, may still rank organically for long-tail brand pages):\n\n';
md += zero.slice(0, 40).map(r => `- ${r.keyword}`).join('\n');
md += '\n';

fs.writeFileSync('C:/Users/Kyle/fatboy-agents/blade-boutique/build/keyword-research/report.md', md);
console.log('Wrote report.md — rows:', rows.length, 'zero:', zero.length);
console.log('Top 10:');
rows.slice(0, 10).forEach(r => console.log(`  ${r.vol.toString().padStart(5)} | ${r.kw}`));
