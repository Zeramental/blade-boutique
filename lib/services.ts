export type ServiceCategory = "brows" | "lips" | "eyes" | "face" | "addons" | "tattoos" | "waxing";

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
  // Optional per-service overrides. When absent, the service page falls back to
  // the default PMU session steps / FAQ. Non-PMU services (e.g. waxing) supply
  // their own so the page doesn't talk about numbing and pigment.
  sessionSteps?: [string, string][];
  faqs?: { q: string; a: string }[];
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
    name: "Dark lip neutralisation",
    aliases: [
      "lip hyperpigmentation treatment",
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
      "Dark lip neutralisation: corrective PMU that brings naturally dark or unevenly pigmented lips to a soft, even, natural tone.",
    longDescription:
      "Dark lip neutralisation (also called lip hyperpigmentation treatment) uses warm-toned Permablend pigments in layered sessions to soften the appearance of dark or unevenly pigmented lips. A specialist treatment in short supply in South Africa — Sam has trained extensively in lip neutralisation for melanin-rich skin and is one of the most-booked providers for this work in Johannesburg and Pretoria. Most clients benefit from 2-3 sessions for the deepest results; a first session alone delivers visible softening.",
    keywords: [
      "dark lip neutralisation",
      "dark lip neutralisation johannesburg",
      "dark lip neutralisation randburg",
      "dark lip neutralisation south africa",
      "dark lip neutralization",
      "lip hyperpigmentation treatment johannesburg",
      "lip hyperpigmentation treatment south africa",
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
  {
    slug: "full-body-waxing",
    name: "Full body waxing",
    aliases: [
      "body waxing",
      "brazilian wax",
      "hollywood wax",
      "leg wax",
      "underarm wax",
      "arm wax",
      "back wax",
      "bikini wax",
      "hot wax",
    ],
    category: "waxing",
    fromPrice: null,
    fromPriceLabel: "Contact to find out",
    touchUpPrice: null,
    touchUpLabel: "",
    durationHours: 1,
    durationLabel: "By area booked",
    shortDescription:
      "Full body waxing in Fourways: smooth, salon-fresh skin from head to toe. Legs, underarms, arms, back, bikini, Brazilian and Hollywood, all done gently and hygienically.",
    longDescription:
      "Full body waxing at Blade Boutique gives you smooth, salon-fresh skin that lasts three to four weeks, far longer than shaving ever could. Sam waxes everything from legs, underarms and arms to back, bikini, Brazilian and Hollywood, using a warm, skin-kind wax and a hygienic, professional technique with a fresh spatula every time, never double-dipped. Regular waxing means finer, softer regrowth over time, no nicks, no razor bumps and no five o'clock shadow. Whether you're prepping for a holiday, a special event, or you just love that freshly-waxed feeling, it's done in a relaxed, judgement-free studio in Fourways. Book a full body wax or just the areas you want.",
    keywords: [
      "full body waxing",
      "full body waxing fourways",
      "waxing near me",
      "waxing fourways",
      "waxing johannesburg",
      "brazilian wax",
      "brazilian wax johannesburg",
      "hollywood wax",
      "body waxing",
      "leg wax",
      "underarm waxing",
      "back wax",
      "bikini wax",
      "hot wax fourways",
      "waxing salon near me",
    ],
    image: "/images/blade/full-body-waxing.png",
    isPMU: false,
    sessionSteps: [
      ["Consultation and patch test", "We talk through the areas you want waxed and how sensitive your skin is. On a first visit a quick patch test makes sure the wax suits you."],
      ["Prep and cleanse", "The area is cleansed and prepped with a pre-wax oil so the wax lifts the hair cleanly without pulling at the skin."],
      ["Gentle waxing", "Warm, skin-kind wax applied and removed section by section with a careful, hygienic technique. Fresh spatula every time, never double-dipped."],
      ["Soothe and aftercare", "A calming post-wax lotion settles the skin, and you leave with simple aftercare tips to keep it smooth and bump-free."],
    ],
    faqs: [
      {
        q: "How long does full body waxing last?",
        a: "Most clients stay smooth for three to four weeks. With regular waxing the regrowth comes back finer and softer over time, so it lasts longer the more you keep it up.",
      },
      {
        q: "Does waxing hurt?",
        a: "There's a quick sting as the wax lifts, strongest on sensitive areas like the bikini line and underarms, but it fades fast. Sam works quickly and gently, and it gets easier every visit as the hair grows back finer.",
      },
      {
        q: "What areas can I have waxed?",
        a: "Everything: legs, underarms, arms, back, chest, bikini, Brazilian and Hollywood, plus smaller areas like lip and chin. Book a full body wax or just the areas you want.",
      },
      {
        q: "How should I prepare for a wax?",
        a: "Let the hair grow to about 5mm, roughly two weeks of regrowth, so the wax can grip it. Exfoliate gently a day or two before, skip lotions and oils on the day, and avoid sun or heat straight after.",
      },
      {
        q: "How much is full body waxing at Blade Boutique?",
        a: "Pricing depends on the areas you book, so it's contact to find out. Message Sam on WhatsApp and she'll give you a quote for exactly what you want, full body or single areas.",
      },
    ],
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
  waxing: "Waxing",
};

export const CATEGORY_ORDER: ServiceCategory[] = [
  "brows",
  "addons",
  "lips",
  "eyes",
  "face",
  "waxing",
  "tattoos",
];

export const PMU_SERVICES = SERVICES.filter((s) => s.isPMU);
