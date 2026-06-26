// One-off: migrate studio address Bromhof/Randburg -> Fourways across content.
// Excludes studio.ts (done by hand), locations.ts + the two standalone landing
// pages (hand-rewritten drive directions), and this scripts/ dir.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "C:/Users/Kyle/fatboy-agents/blade-boutique/build";
const DIRS = ["app", "lib", "components"];
const EXCLUDE = new Set([
  join(ROOT, "lib", "studio.ts").replace(/\\/g, "/"),
  join(ROOT, "lib", "locations.ts").replace(/\\/g, "/"),
  join(ROOT, "app", "permanent-makeup-pretoria", "page.tsx").replace(/\\/g, "/"),
  join(ROOT, "app", "microblading-johannesburg", "page.tsx").replace(/\\/g, "/"),
]);

// Ordered literal replacements (applied top to bottom, global within file).
const R = [
  ["Balance Wellness Centre", "Rustic Timber & Garden Centre"],
  ["8 Tin Road, Bromhof, Randburg", "42 Witkoppen Road, Fourways"],
  ["8 Tin Road, Bromhof", "42 Witkoppen Road, Fourways"],
  ["8 Tin Road", "42 Witkoppen Road"],
  ["Bromhof, Randburg", "Fourways, Johannesburg"],
  ["in Bromhof", "in Fourways"],
  ["PMU Bromhof", "PMU Fourways"],
  ["Bromhof studio", "Fourways studio"],
  ["towards Bromhof", "towards Fourways"],
  ["Bromhof", "Fourways"],
  ["in Randburg & Johannesburg", "in Fourways & Johannesburg"],
  ["Randburg & Johannesburg", "Fourways & Johannesburg"],
  ["Randburg, Johannesburg", "Fourways, Johannesburg"],
  ["Blade Boutique, Randburg", "Blade Boutique, Fourways"],
  ["Blade Boutique Randburg", "Blade Boutique Fourways"],
  ["Permanent Makeup in Randburg", "Permanent Makeup in Fourways"],
  ["permanent makeup in Randburg", "permanent makeup in Fourways"],
  ["{service.name} in Randburg", "{service.name} in Fourways"],
];

function walk(dir) {
  let out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e).replace(/\\/g, "/");
    if (e === "node_modules") continue;
    const s = statSync(p);
    if (s.isDirectory()) out = out.concat(walk(p));
    else if (/\.(ts|tsx)$/.test(e)) out.push(p);
  }
  return out;
}

let touched = 0;
const report = [];
for (const dir of DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    if (EXCLUDE.has(file)) continue;
    let txt = readFileSync(file, "utf8");
    const before = txt;
    let n = 0;
    for (const [a, b] of R) {
      const parts = txt.split(a);
      if (parts.length > 1) { n += parts.length - 1; txt = parts.join(b); }
    }
    if (txt !== before) {
      writeFileSync(file, txt, "utf8");
      touched++;
      report.push(`  ${file.replace(ROOT + "/", "")}  (${n} swaps)`);
    }
  }
}
console.log(`Files changed: ${touched}`);
console.log(report.join("\n"));
