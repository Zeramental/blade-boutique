// Batch DataForSEO Google Ads search_volume calls for all keywords
import fs from 'node:fs';

const AUTH = Buffer.from('kyle@fatboy.studio:99061192fd2e2170').toString('base64');
const ENDPOINT = 'https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live';

const keywords = JSON.parse(fs.readFileSync('C:/Users/Kyle/fatboy-agents/blade-boutique/build/keyword-research/keywords.json', 'utf8'));
console.log('Loaded', keywords.length, 'keywords');

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i+size));
  return out;
}

const batches = chunk(keywords, 700); // keep under 1000 safely
console.log('Batches:', batches.length);

const all = [];
for (let i = 0; i < batches.length; i++) {
  const body = [{
    keywords: batches[i],
    location_name: 'South Africa',
    language_code: 'en'
  }];
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${AUTH}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const json = await res.json();
  if (!json.tasks || !json.tasks[0] || !json.tasks[0].result) {
    console.error('Batch', i, 'failed:', JSON.stringify(json).slice(0, 500));
    continue;
  }
  const results = json.tasks[0].result;
  all.push(...results);
  console.log(`Batch ${i+1}/${batches.length} — ${results.length} results`);
}

fs.writeFileSync('C:/Users/Kyle/fatboy-agents/blade-boutique/build/keyword-research/volume_raw.json', JSON.stringify(all, null, 2));
console.log('Total results:', all.length);
const withVolume = all.filter(r => r.search_volume && r.search_volume > 0);
console.log('With volume > 0:', withVolume.length);
