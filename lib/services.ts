export type ServiceCategory = "brows" | "lips" | "eyes";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  fromPrice: number;
  fromPriceLabel: string;
  durationHours: number;
  durationLabel: string;
  shortDescription: string;
  longDescription: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "microblading",
    name: "Microblading",
    category: "brows",
    fromPrice: 3000,
    fromPriceLabel: "From R3,000",
    durationHours: 2.5,
    durationLabel: "2.5 hours",
    shortDescription:
      "Hair-stroke brows hand-drawn one stroke at a time. Soft, natural, defined.",
    longDescription:
      "Microblading uses a hand-tool of fine needles to deposit pigment in single hair-stroke patterns. Best for clients with sparse-to-medium brow density who want a soft, natural look that mimics real hair.",
    image: "/images/blade/gallery-brows-1.jpg",
  },
  {
    slug: "powder-brows",
    name: "Powder brows",
    category: "brows",
    fromPrice: 3200,
    fromPriceLabel: "From R3,200",
    durationHours: 2.5,
    durationLabel: "2.5 hours",
    shortDescription:
      "A soft, powdered finish — like a perfectly filled-in brow that won't smudge.",
    longDescription:
      "Powder brows use a digital machine to deposit pigment in a soft pixel pattern, creating a velvety, makeup-finished look. Ideal for oily skin, mature skin, or anyone who wants a more defined daily brow.",
    image: "/images/blade/gallery-brows-3.jpg",
  },
  {
    slug: "combo-brows",
    name: "Combo brows",
    category: "brows",
    fromPrice: 3500,
    fromPriceLabel: "From R3,500",
    durationHours: 3,
    durationLabel: "3 hours",
    shortDescription:
      "Hair strokes through the front, soft powder through the body. The best of both.",
    longDescription:
      "Combo brows blend microbladed hair-strokes at the front with a powdered finish through the body and tail. Best for clients who want natural movement up front but a polished, defined finish overall.",
    image: "/images/blade/gallery-brows-4.jpg",
  },
  {
    slug: "lip-blush",
    name: "Lip blush",
    category: "lips",
    fromPrice: 3000,
    fromPriceLabel: "From R3,000",
    durationHours: 2.5,
    durationLabel: "2.5 hours",
    shortDescription:
      "Soft, blushed colour custom-mixed for your undertone. Lasts 2-3 years.",
    longDescription:
      "Lip blush adds a soft wash of colour to your lips, enhancing shape and definition without looking like lipstick. Pigment is custom-mixed to flatter your natural undertone.",
    image: "/images/blade/gallery-lips-3.jpg",
  },
  {
    slug: "dark-lip-neutralisation",
    name: "Dark lip neutralisation",
    category: "lips",
    fromPrice: 3200,
    fromPriceLabel: "From R3,200",
    durationHours: 3,
    durationLabel: "3 hours",
    shortDescription:
      "Brings naturally pigmented or hyperpigmented lips to a soft, even rosy tone.",
    longDescription:
      "Dark lip neutralisation uses warm-toned pigments in layered sessions to soften the appearance of dark or unevenly pigmented lips. A specialised treatment that needs experience — Sam has trained extensively in lip neutralisation for melanin-rich skin.",
    image: "/images/blade/gallery-lips-2.jpg",
  },
  {
    slug: "eyeliner",
    name: "Eyeliner tattoo",
    category: "eyes",
    fromPrice: 2500,
    fromPriceLabel: "From R2,500",
    durationHours: 2,
    durationLabel: "2 hours",
    shortDescription:
      "A fine, precise lash line — like the perfect liner you'd never have to redo.",
    longDescription:
      "Eyeliner tattoo deposits pigment along the lash line for a defined, lasting finish. Ranges from a subtle lash enhancement to a fuller liner shape, depending on your preference.",
    image: "/images/blade/eyeliner-editorial.png",
  },
  {
    slug: "lash-enhancement",
    name: "Lash enhancement",
    category: "eyes",
    fromPrice: 2200,
    fromPriceLabel: "From R2,200",
    durationHours: 1.5,
    durationLabel: "1.5 hours",
    shortDescription:
      "Pigment placed between your lashes — fuller, defined lashes, no makeup.",
    longDescription:
      "Lash enhancement places fine pigment in the spaces between your lashes for a fuller, denser-looking lash line — without any visible liner. The most subtle of the eye treatments.",
    image: "/images/blade/gallery-brows-2.jpg",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_CATEGORIES: Record<ServiceCategory, string> = {
  brows: "Brows",
  lips: "Lips",
  eyes: "Eyes",
};
