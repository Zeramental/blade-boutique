import sharp from "sharp";
import { readdir, mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BUILD_ROOT = join(__dirname, "..");
const DRIVE_ROOT = "G:/My Drive/Blade Boutique — Photos & Branding";
const OUT_ROOT = join(BUILD_ROOT, "public/images/blade/gallery");

// Folder → service slug mapping. Every GridArt / WhatsApp image in these folders
// is a pre-stacked before/after collage (before on top, after below) at 1:1.
const MAP = [
  { folder: "05 — Powder brows (before & after)", slug: "powder-brows" },
  { folder: "06 — Nano brows (before & after)", slug: "nano-brows" },
  { folder: "07 — Lip blush (before & after)", slug: "lip-blush" },
  { folder: "08 — Lip hyperpigmentation treatment   dark lip neutralisation (before & after)", slug: "dark-lip-neutralisation" },
  { folder: "09 — Eyeliner tattoo (before & after)", slug: "eyeliner" },
  { folder: "11 — Brow lamination (before & after)", slug: "brow-lamination" },
  { folder: "12 — Lash lift (before & after)", slug: "lash-lift" },
];

const isImage = (f) => /\.(jpe?g|png|webp)$/i.test(f) && !f.startsWith(".");

async function optimizeOne(src, destDir, slug, idx) {
  const name = `${slug}-${String(idx).padStart(2, "0")}.webp`;
  const dest = join(destDir, name);
  await sharp(src)
    .rotate()
    .resize({ width: 1200, height: 1200, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);
  return `/images/blade/gallery/${slug}/${name}`;
}

async function run() {
  const manifest = {};
  for (const { folder, slug } of MAP) {
    const srcDir = join(DRIVE_ROOT, folder);
    const destDir = join(OUT_ROOT, slug);
    await mkdir(destDir, { recursive: true });
    const all = (await readdir(srcDir)).filter(isImage);
    console.log(`[${slug}] ${all.length} source images`);
    const urls = [];
    for (let i = 0; i < all.length; i++) {
      const url = await optimizeOne(join(srcDir, all[i]), destDir, slug, i + 1);
      urls.push(url);
      process.stdout.write(".");
    }
    process.stdout.write("\n");
    manifest[slug] = urls;
  }
  await writeFile(
    join(BUILD_ROOT, "lib/gallery-manifest.json"),
    JSON.stringify(manifest, null, 2),
  );
  console.log("Wrote lib/gallery-manifest.json");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
