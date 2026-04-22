import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BUILD_ROOT = join(__dirname, "..");
const DRIVE = "G:/My Drive/Blade Boutique — Photos & Branding";
const OUT = join(BUILD_ROOT, "public/images/blade/home");

const JOBS = [
  {
    src: `${DRIVE}/04 — Microblading (before & after)/GridArt_20250426_072922428.jpg`,
    out: "microblading.webp",
  },
  {
    src: `${DRIVE}/05 — Powder brows (before & after)/GridArt_20260103_131934217.jpg`,
    out: "powder-brows.webp",
  },
  {
    src: `${DRIVE}/07 — Lip blush (before & after)/GridArt_20251214_130902174.jpg`,
    out: "lip-blush.webp",
  },
  {
    src: `${DRIVE}/11 — Brow lamination (before & after)/GridArt_20260121_110616796.jpg`,
    out: "brow-lamination.webp",
  },
  {
    src: `${DRIVE}/12 — Lash lift (before & after)/GridArt_20260113_173304205.jpg`,
    out: "lash-lift.webp",
  },
  {
    src: `${DRIVE}/08 — Lip hyperpigmentation treatment   dark lip neutralisation (before & after)/IMG-20260422-WA0027.jpg`,
    out: "healed-lips.webp",
  },
];

async function run() {
  await mkdir(OUT, { recursive: true });
  for (const { src, out } of JOBS) {
    const dest = join(OUT, out);
    await sharp(src)
      .rotate()
      .resize({ width: 1400, height: 1400, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(dest);
    console.log(`✓ ${out}`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
