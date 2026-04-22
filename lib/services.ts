export type ServiceCategory = "brows" | "lips" | "eyes" | "face" | "addons" | "tattoos";

export type Service = {
  slug: string;
  name: string;
  aliases: string[];
  category: ServiceCategory;
  fromPrice: number | null;
  fromPriceLabel: string;
  touchUpPrice: number | null;
  touchUpLabel: string;
  durationHours: number;
  durationLabel: string;
  shortDescription: string;
  longDescription: string;
  keywords: string[];
  image: string;
  isPMU: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "microblading",
    name: "Microblading",
    aliases: [
      "eyebrow microblading",
      "microblading eyebrows",
      "eyebrow embroidery",
      "hair-stroke brows",
      "feather brows",
      "eyebrow tattoo",
      "brow tattoo",
      "semi permanent makeup brows",
    ],
    category: "brows",
    fromPrice: 2500,
    fromPriceLabel: "R2,500",
    touchUpPrice: 1100,
    touchUpLabel: "R1,100 touch-up (under 12 months)",
    durationHours: 2,
    durationLabel: "1.5 - 2 hours",
    shortDescription:
      "Eyebrow microblading: hair-stroke brows hand-drawn one stroke at a time. Soft, natural, defined.",
    longDescription:
      "Microblading (also called eyebrow microblading, hair-stroke brows or semi permanent brow tattoo) uses a hand-tool of fine needles to deposit Permablend or Evenflo pigment in single hair-stroke patterns. Best for clients with sparse-to-medium brow density who want a soft, natural look that mimics real hair. Ideal for normal to dry skin. Oily skin blurs strokes over time, so nano brows or powder brows heal better for that skin type.",
    keywords: [
      "microblading",
      "microblading near me",
      "microblading johannesburg",
      "microblading randburg",
      "eyebrow microblading",
      "microblading eyebrows",
      "eyebrow tattoo johannesburg",
      "eyebrow embroidery",
      "hair stroke brows south africa",
      "feather brows",
      "brow tattoo johannesburg",
      "semi permanent makeup",
    ],
    image: "/images/blade/home/microblading.webp",
    isPMU: true,
  },
  {
    slug: "nano-brows",
    name: "Nano brows",
    aliases: ["nano hair strokes", "digital microblading", "machine hair strokes"],
    category: "brows",
    fromPrice: 2800,
    fromPriceLabel: "R2,800",
    touchUpPrice: 1100,
    touchUpLabel: "R1,100 touch-up (under 12 months)",
    durationHours: 2,
    durationLabel: "1.5 - 2 hours",
    shortDescription:
      "Machine-placed hair strokes finer than microblading. Last longer, heal softer.",
    longDescription:
      "Nano brows use a single ultra-fine digital needle to place crisp hair strokes with more control and kinder healing than manual microblading. Ideal for oily skin, mature skin, and clients who want a longer-lasting hair-stroke result. Nano brows are the next generation of natural brow PMU.",
    keywords: [
      "nano brows Johannesburg",
      "nano brows Randburg",
      "nano hair strokes Gauteng",
      "digital microblading Johannesburg",
      "best nano brows South Africa",
    ],
    image: "/images/blade/gallery-brows-4.jpg",
    isPMU: true,
  },
  {
    slug: "powder-brows",
    name: "Powder & ombre brows",
    aliases: [
      "ombre brows",
      "ombre powder brows",
      "shaded brows",
      "machine brows",
      "machine eyebrows",
      "powder brow tattoo",
    ],
    category: "brows",
    fromPrice: 2500,
    fromPriceLabel: "R2,500",
    touchUpPrice: 1100,
    touchUpLabel: "R1,100 touch-up (under 12 months)",
    durationHours: 2,
    durationLabel: "1.5 - 2 hours",
    shortDescription:
      "Powder or ombre brows: a soft, powdered finish. Like a perfectly filled-in brow that won't smudge.",
    longDescription:
      "Powder brows (also called ombre brows or shaded brows) use a digital machine to deposit Permablend pigment in a soft pixel pattern, creating a velvety, makeup-finished look. Ideal for oily skin, mature skin, or anyone who wants a more defined daily brow. An ombre effect fades from lighter at the front to deeper through the tail.",
    keywords: [
      "powder brows",
      "ombre brows",
      "powder brows near me",
      "powder brows johannesburg",
      "powder brows randburg",
      "ombre brows johannesburg",
      "machine brow tattoo",
      "shaded brows south africa",
    ],
    image: "/images/blade/home/powder-brows.webp",
    isPMU: true,
  },
  {
    slug: "lip-blush",
    name: "Lip blush",
    aliases: ["lip tattoo", "cosmetic lip tint", "permanent lipstick", "lip PMU"],
    category: "lips",
    fromPrice: 2500,
    fromPriceLabel: "R2,500",
    touchUpPrice: 1100,
    touchUpLabel: "R1,100 touch-up (under 12 months)",
    durationHours: 2,
    durationLabel: "1.5 - 2 hours",
    shortDescription:
      "Soft, blushed colour custom-mixed for your undertone. Lasts 2-3 years.",
    longDescription:
      "Lip blush adds a soft wash of colour to your lips, enhancing shape and definition without looking like lipstick. Pigment is custom-mixed from Permablend and Evenflo ranges to flatter your natural undertone. Heals to a sheer, natural tint.",
    keywords: [
      "lip blush Johannesburg",
      "lip blush Randburg",
      "lip tattoo Sandton",
      "permanent lipstick South Africa",
      "cosmetic lip tattoo Gauteng",
    ],
    image: "/images/blade/home/lip-blush.webp",
    isPMU: true,
  },
  {
    slug: "dark-lip-neutralisation",
    name: "Lip hyperpigmentation treatment",
    aliases: [
      "dark lip neutralisation",
      "dark lip neutralization",
      "lip neutralisation",
      "lip neutralization",
      "hyperpigmentation lip correction",
      "ethnic lip correction",
      "melanin lip correction",
      "dark lip correction",
    ],
    category: "lips",
    fromPrice: 2800,
    fromPriceLabel: "R2,800",
    touchUpPrice: 1100,
    touchUpLabel: "R1,100 touch-up (under 12 months)",
    durationHours: 2,
    durationLabel: "1.5 - 2 hours",
    shortDescription:
      "Lip hyperpigmentation treatment that brings naturally dark or unevenly pigmented lips to a soft, even rosy tone.",
    longDescription:
      "Lip hyperpigmentation treatment, also called dark lip neutralisation, uses warm-toned Permablend pigments in layered sessions to soften the appearance of dark or unevenly pigmented lips. A specialist treatment in short supply in South Africa — Sam has trained extensively in lip neutralisation for melanin-rich skin and is one of the most-booked providers for this work in Johannesburg and Pretoria. Most clients benefit from 2-3 sessions for the deepest results; a first session alone delivers visible softening.",
    keywords: [
      "lip hyperpigmentation treatment",
      "lip hyperpigmentation treatment johannesburg",
      "lip hyperpigmentation treatment south africa",
      "dark lip neutralisation",
      "dark lip neutralisation johannesburg",
      "dark lip neutralization randburg",
      "lip neutralisation",
      "dark lip correction",
      "ethnic lip PMU",
      "melanin lip correction",
      "hyperpigmented lips treatment south africa",
    ],
    image: "/images/blade/gallery-lips-2.jpg",
    isPMU: true,
  },
  {
    slug: "eyeliner",
    name: "Eyeliner tattoo",
    aliases: ["permanent eyeliner", "eyeliner PMU", "cosmetic eyeliner"],
    category: "eyes",
    fromPrice: 2000,
    fromPriceLabel: "R2,000",
    touchUpPrice: 1000,
    touchUpLabel: "R1,000 touch-up (under 12 months)",
    durationHours: 2,
    durationLabel: "2 hours",
    shortDescription:
      "A fine, precise lash line, like the perfect liner you'd never have to redo.",
    longDescription:
      "Eyeliner tattoo deposits Permablend pigment along the lash line for a defined, lasting finish. Ranges from a subtle lash enhancement to a fuller liner shape, depending on your preference. Safe for contact-lens wearers.",
    keywords: [
      "permanent eyeliner Johannesburg",
      "eyeliner tattoo Randburg",
      "cosmetic eyeliner Sandton",
      "eyeliner PMU South Africa",
    ],
    image: "/images/blade/eyeliner-editorial.png",
    isPMU: true,
  },
  {
    slug: "lash-enhancement",
    name: "Lash enhancement",
    aliases: ["invisible eyeliner", "lash line tattoo", "lash line enhancement"],
    category: "eyes",
    fromPrice: 2000,
    fromPriceLabel: "R2,000",
    touchUpPrice: 1000,
    touchUpLabel: "R1,000 touch-up (under 12 months)",
    durationHours: 1.5,
    durationLabel: "1.5 hours",
    shortDescription:
      "Pigment placed between your lashes for fuller, defined lashes without makeup.",
    longDescription:
      "Lash enhancement places fine pigment in the spaces between your lashes for a fuller, denser-looking lash line, without any visible liner above the lash line. The most subtle permanent eye treatment. Heals invisible unless you're looking for it.",
    keywords: [
      "lash enhancement Johannesburg",
      "invisible eyeliner Randburg",
      "lash line tattoo Sandton",
      "lash line PMU South Africa",
    ],
    image: "/images/blade/gallery-brows-2.jpg",
    isPMU: true,
  },
  {
    slug: "freckles",
    name: "Freckle tattoos",
    aliases: ["cosmetic freckles", "faux freckles", "permanent freckles", "freckle PMU"],
    category: "face",
    fromPrice: null,
    fromPriceLabel: "Enquire",
    touchUpPrice: null,
    touchUpLabel: "Touch-up priced on consultation",
    durationHours: 1.5,
    durationLabel: "1-2 hours",
    shortDescription:
      "Natural-looking cosmetic freckles placed by hand. Scatter pattern, your choice of density.",
    longDescription:
      "Cosmetic freckles use fine pigment placement to scatter natural-looking freckles across the cheeks and nose. Fully customisable: density, colour and placement are mapped with you before anything is placed. Pricing confirmed at consultation.",
    keywords: [
      "freckle tattoo Johannesburg",
      "cosmetic freckles Randburg",
      "faux freckles South Africa",
      "permanent freckles Gauteng",
    ],
    image: "/images/blade/gallery-brows-1.jpg",
    isPMU: true,
  },
  {
    slug: "brow-lamination",
    name: "Brow lamination, shape & tint",
    aliases: [
      "brow lam",
      "eyebrow lamination",
      "brow perm",
      "laminated brows",
      "brow lift",
    ],
    category: "addons",
    fromPrice: 550,
    fromPriceLabel: "R550",
    touchUpPrice: null,
    touchUpLabel: "",
    durationHours: 1,
    durationLabel: "1 hour",
    shortDescription:
      "Brow lamination that sets your natural brows upward for a lifted, fuller shape. Includes shape and tint.",
    longDescription:
      "Brow lamination (also called eyebrow lamination or a brow lift) relaxes the brow hairs so they sit in a uniform, upward direction. Fuller, neater, instantly lifted. Sam includes shaping and tinting in every lamination session. Results last 6-8 weeks. A brilliant in-between step if you're deciding whether to commit to microblading or powder brows.",
    keywords: [
      "brow lamination",
      "brow lamination near me",
      "eyebrow lamination",
      "brow lamination johannesburg",
      "brow lamination randburg",
      "eyebrow lamination near me",
      "laminated brows south africa",
    ],
    image: "/images/blade/home/brow-lamination.webp",
    isPMU: false,
  },
  {
    slug: "lash-lift",
    name: "Lash lift & tint",
    aliases: [
      "lash perm",
      "eyelash lift",
      "keratin lash lift",
      "lash lifting",
      "lash lift and tint",
    ],
    category: "addons",
    fromPrice: 550,
    fromPriceLabel: "R550",
    touchUpPrice: null,
    touchUpLabel: "",
    durationHours: 1,
    durationLabel: "45-60 minutes",
    shortDescription:
      "Lash lift and tint that curls your natural lashes from the root. Wide-open eyes, no extensions.",
    longDescription:
      "A lash lift (also known as a lash perm or keratin lash lift) curls your natural lashes upward from the root and sets the curl for 6-8 weeks. Tint is included at Blade Boutique. No extensions, no glue, no daily curler. Safe for contact-lens wearers and gentler on the lash line than extensions.",
    keywords: [
      "lash lift",
      "lash lift near me",
      "lash lift and tint",
      "lash lift johannesburg",
      "lash lift randburg",
      "keratin lash lift",
      "eyelash lift south africa",
    ],
    image: "/images/blade/home/lash-lift.webp",
    isPMU: false,
  },
  {
    slug: "fine-line-tattoos",
    name: "Fine line & small tattoos",
    aliases: [
      "small tattoos",
      "small tattoo",
      "delicate tattoos",
      "minimalist tattoo",
      "minimalist tattoos",
      "micro tattoos",
      "tiny tattoo",
    ],
    category: "tattoos",
    fromPrice: 500,
    fromPriceLabel: "From R500",
    touchUpPrice: null,
    touchUpLabel: "Full-day sessions from R4,000",
    durationHours: 1,
    durationLabel: "By design",
    shortDescription:
      "Small, fine line and minimalist tattoos, priced by design and size. Full-day sessions available.",
    longDescription:
      "Fine line tattoos, small tattoos and minimalist pieces, priced by design and size starting from R500. Full-day sessions from R4,000. Sam's tattooing style is clean, delicate and considered, ideal for small script, single-line florals, fine symbols and minimal geometric work. Book a short consultation to scope your piece, pigment and placement.",
    keywords: [
      "fine line tattoo",
      "fine line tattoo johannesburg",
      "small tattoo",
      "small tattoo near me",
      "minimalist tattoo",
      "delicate tattoo johannesburg",
      "micro tattoo south africa",
    ],
    image: "/images/blade/gallery-brows-3.jpg",
    isPMU: false,
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_CATEGORIES: Record<ServiceCategory, string> = {
  brows: "Brows",
  lips: "Lips",
  eyes: "Eyes",
  face: "Face",
  addons: "Brow lamination & lash lift",
  tattoos: "Fine line tattoos",
};

export const CATEGORY_ORDER: ServiceCategory[] = [
  "brows",
  "addons",
  "lips",
  "eyes",
  "face",
  "tattoos",
];

export const PMU_SERVICES = SERVICES.filter((s) => s.isPMU);
