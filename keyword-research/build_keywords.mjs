// Build the full keyword universe for Blade Boutique SA PMU research
import fs from 'node:fs';

const stems = [
  // Permanent makeup umbrella
  'permanent makeup','permanent make up','PMU','cosmetic tattoo','cosmetic tattooing',
  'makeup tattoo','make up tattoo',
  // Brow stems
  'microblading','microblade','eyebrow embroidery','feather brows','hair stroke brows',
  'brow tattoo','eyebrow tattoo',
  'nano brows','nano hair strokes','digital microblading','machine brows',
  'powder brows','ombre brows','ombre powder brows','shaded brows','machine eyebrows',
  'combo brows','hybrid brows',
  // Lip stems
  'lip blush','lip blushing','lip tattoo','permanent lipstick','cosmetic lip tint','lip PMU',
  'dark lip neutralisation','dark lip neutralization','lip neutralisation',
  'lip hyperpigmentation treatment','ethnic lip correction','melanin lip correction',
  // Eyeliner stems
  'eyeliner tattoo','permanent eyeliner','eyeliner PMU','cosmetic eyeliner',
  'lash enhancement','lash line tattoo','invisible eyeliner',
  // Freckles
  'cosmetic freckles','freckle tattoo','faux freckles','permanent freckles',
  // Brow lam + lash
  'brow lamination','eyebrow lamination','brow lam','brow perm',
  'lash lift','lash lift and tint','keratin lash lift','lash perm',
  // Fine line tattoo
  'fine line tattoo','small tattoo','minimalist tattoo'
];

const locations = [
  '', 'johannesburg','joburg','jhb','randburg','sandton','northriding','fourways',
  'bryanston','rosebank','pretoria','gauteng','south africa','near me','in south africa'
];

const commercialPrefixes = ['best','cheap','affordable','top'];
const costVariants = ['cost','price','prices','how much'];
const comparisonPairs = [
  ['microblading','nano brows'],
  ['microblading','powder brows'],
  ['microblading','ombre brows'],
  ['microblading','combo brows'],
  ['lip blush','lip tattoo'],
  ['powder brows','ombre brows'],
  ['nano brows','powder brows'],
  ['microblading','eyebrow tattoo'],
  ['lash lift','lash extensions'],
  ['brow lamination','microblading']
];
const infoSuffixes = ['aftercare','healing','healing stages','before and after','pain','how long does it last','touch up','reviews','side effects'];

const set = new Set();

// Base stems (no location)
stems.forEach(s => set.add(s.toLowerCase()));

// stem + location
stems.forEach(s => {
  locations.forEach(loc => {
    if (!loc) return;
    set.add(`${s} ${loc}`.toLowerCase());
  });
});

// commercial + stem + location
commercialPrefixes.forEach(pre => {
  stems.forEach(s => {
    set.add(`${pre} ${s}`.toLowerCase());
    ['johannesburg','randburg','sandton','fourways','pretoria','gauteng','south africa','near me'].forEach(loc => {
      set.add(`${pre} ${s} ${loc}`.toLowerCase());
    });
  });
});

// cost / how much variants
stems.forEach(s => {
  costVariants.forEach(c => {
    if (c === 'how much') {
      set.add(`how much is ${s}`.toLowerCase());
      set.add(`how much does ${s} cost`.toLowerCase());
      ['johannesburg','south africa','randburg','gauteng'].forEach(loc => {
        set.add(`how much is ${s} in ${loc}`.toLowerCase());
      });
    } else {
      set.add(`${s} ${c}`.toLowerCase());
      ['johannesburg','south africa','randburg','gauteng'].forEach(loc => {
        set.add(`${s} ${c} ${loc}`.toLowerCase());
      });
    }
  });
});

// vs comparisons
comparisonPairs.forEach(([a,b]) => {
  set.add(`${a} vs ${b}`.toLowerCase());
});

// informational suffixes (limit to high-traffic stems)
const infoStems = ['microblading','nano brows','powder brows','ombre brows','combo brows',
  'lip blush','lip blushing','permanent eyeliner','eyeliner tattoo','lash lift','brow lamination',
  'cosmetic tattoo','permanent makeup','eyebrow tattoo','lip tattoo','cosmetic freckles'];
infoStems.forEach(s => {
  infoSuffixes.forEach(suf => {
    set.add(`${s} ${suf}`.toLowerCase());
  });
});

// A few extra smart adds
const extras = [
  'pmu artist johannesburg','pmu artist randburg','pmu artist south africa',
  'microblading artist johannesburg','microblading artist randburg',
  'best pmu artist johannesburg','best pmu artist south africa',
  'microblading salon johannesburg','microblading studio johannesburg',
  'permanent makeup artist near me','permanent makeup artist johannesburg',
  'permanent makeup artist south africa','permanent makeup studio',
  'eyebrow microblading','microblading eyebrows',
  'does microblading hurt','is microblading safe','how long does microblading last',
  'microblading price south africa','microblading price johannesburg',
  'microblading cost south africa','microblading cost johannesburg',
  'lip blush price south africa','lip blush cost johannesburg',
  'ombre powder brows johannesburg','powder brows johannesburg',
  'nano brows johannesburg','nano brows south africa',
  'combo brows johannesburg','lip blush johannesburg','lip blush south africa',
  'lip tattoo johannesburg','lip tattoo south africa',
  'permanent eyeliner johannesburg','eyeliner tattoo johannesburg',
  'lash lift johannesburg','lash lift randburg','lash lift pretoria',
  'brow lamination johannesburg','brow lamination randburg',
  'cosmetic freckles johannesburg','freckle tattoo south africa',
  'dark lip neutralization south africa','lip neutralization johannesburg',
  'areola tattoo south africa','scalp micropigmentation johannesburg',
  'smp johannesburg','scalp micropigmentation south africa',
  'semi permanent makeup','semi permanent makeup johannesburg','semi permanent makeup south africa',
  'saline tattoo removal','pmu removal johannesburg','microblading removal',
  'microblading touch up','microblading touch up johannesburg',
  'touch up microblading price','microblading near me',
  'microblading bromhof','pmu bromhof','permanent makeup bromhof',
  'microblading northcliff','microblading cresta','microblading honeydew',
  'pmu training south africa','microblading training johannesburg','pmu course south africa'
];
extras.forEach(e => set.add(e.toLowerCase()));

const all = Array.from(set).filter(k => k && k.length < 80);
fs.writeFileSync('C:/Users/Kyle/fatboy-agents/blade-boutique/build/keyword-research/keywords.json', JSON.stringify(all, null, 2));
console.log('Total keywords:', all.length);
