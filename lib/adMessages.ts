export type AdParams = {
  utm_campaign?: string;
  utm_content?: string; // ad group
  utm_term?: string;    // matched keyword
  utm_device?: string;
};

type MessageConfig = {
  heading: string;
  subtext: string;
  whatsappMessage: string;
  buttonLabel: string;
};

const DEFAULT: MessageConfig = {
  heading: "Chat with Sam.",
  subtext:
    "WhatsApp is the fastest way to book an appointment or ask a question. Sam typically replies within 2 hours during studio hours.",
  whatsappMessage:
    "Hi Sam, I found Blade Boutique on Google and I'd like to find out more about booking an appointment.",
  buttonLabel: "Open WhatsApp Chat",
};

// Keyword-level matching — most specific, runs first
const KEYWORD_RULES: Array<{
  match: (kw: string) => boolean;
  config: MessageConfig;
}> = [
  {
    match: (kw) =>
      kw.includes("dark lip") ||
      kw.includes("lip hyperpig") ||
      kw.includes("lip neutral") ||
      kw.includes("lip lightening") ||
      kw.includes("lip colour correct"),
    config: {
      heading: "Dark lip neutralisation — let's chat.",
      subtext:
        "Sam specialises in dark lip neutralisation for melanin-rich skin — one of the few artists in Johannesburg offering this treatment. WhatsApp her to find out if it's right for you.",
      whatsappMessage:
        "Hi Sam, I'm interested in dark lip neutralisation. I found Blade Boutique on Google. Can you tell me more about the treatment, what it involves, and your current availability?",
      buttonLabel: "Ask Sam about dark lip treatment",
    },
  },
  {
    match: (kw) => kw.includes("nano brow"),
    config: {
      heading: "Nano brows — let's chat.",
      subtext:
        "Nano brows give you the most natural, hair-stroke finish with a tattoo machine. Sam will walk you through whether nano or microblading suits your skin best.",
      whatsappMessage:
        "Hi Sam, I'm interested in nano brows. I found Blade Boutique on Google. Can you tell me more about the process and book me in for a consultation?",
      buttonLabel: "Ask Sam about nano brows",
    },
  },
  {
    match: (kw) =>
      kw.includes("lip blush") || kw.includes("lip tattoo") || kw.includes("lip tint"),
    config: {
      heading: "Lip blush — let's chat.",
      subtext:
        "Lip blush adds natural colour and definition that lasts 2–3 years. No lip liner every morning. WhatsApp Sam to see if it's a good match for your skin tone.",
      whatsappMessage:
        "Hi Sam, I'm interested in lip blush. I found Blade Boutique on Google. Can you tell me about the treatment and your availability?",
      buttonLabel: "Ask Sam about lip blush",
    },
  },
  {
    match: (kw) =>
      kw.includes("powder brow") ||
      kw.includes("ombre brow") ||
      kw.includes("combination brow") ||
      kw.includes("combo brow"),
    config: {
      heading: "Powder brows — let's chat.",
      subtext:
        "Powder brows give you that soft, make-up finish that lasts. Sam will help you choose between powder, combo, or nano brows based on your skin and look.",
      whatsappMessage:
        "Hi Sam, I'm interested in powder brows. I found Blade Boutique on Google. Can we discuss the options and find a time that works?",
      buttonLabel: "Ask Sam about powder brows",
    },
  },
  {
    match: (kw) =>
      kw.includes("microblad") ||
      kw.includes("eyebrow tattoo") ||
      kw.includes("brow tattoo"),
    config: {
      heading: "Microblading — let's chat.",
      subtext:
        "Microblading creates fine, realistic hair strokes for a natural brow. Sam has 12+ years of experience and specialises in melanin-rich skin. Let's find out what works for you.",
      whatsappMessage:
        "Hi Sam, I'm interested in microblading. I found Blade Boutique on Google. Can you tell me about the process and book me in for a consultation?",
      buttonLabel: "Ask Sam about microblading",
    },
  },
  {
    match: (kw) =>
      kw.includes("brow lam") ||
      kw.includes("lash lift") ||
      kw.includes("eyeliner tattoo") ||
      kw.includes("permanent eyeliner"),
    config: {
      heading: "Brow lamination & lash lift — let's chat.",
      subtext:
        "Brow lamination and lash lift are same-day treatments with no downtime. WhatsApp Sam to check availability and find out which combo works for you.",
      whatsappMessage:
        "Hi Sam, I'm interested in brow lamination or lash lift. I found Blade Boutique on Google. What's your current availability and pricing?",
      buttonLabel: "Ask Sam about brow lam / lash lift",
    },
  },
];

// Campaign-level fallback — less specific than keyword
const CAMPAIGN_RULES: Array<{
  match: (c: string) => boolean;
  config: MessageConfig;
}> = [
  {
    match: (c) => c.includes("lip_hyperpig"),
    config: {
      heading: "Dark lip neutralisation — let's chat.",
      subtext:
        "Sam is one of the few permanent makeup artists in Johannesburg specialising in dark lip neutralisation for melanin-rich skin. Find out if this treatment is right for you.",
      whatsappMessage:
        "Hi Sam, I'm interested in dark lip neutralisation. I found Blade Boutique on Google. Can you tell me more about the treatment and your availability?",
      buttonLabel: "Ask Sam about dark lip treatment",
    },
  },
  {
    match: (c) => c.includes("powder_brows") || c.includes("lip_blush"),
    config: {
      heading: "Powder brows & lip blush — let's chat.",
      subtext:
        "Whether it's powder brows, lip blush, or nano brows — Sam will find the right treatment for your skin and goals. Takes 2 minutes to get the conversation started.",
      whatsappMessage:
        "Hi Sam, I'm interested in powder brows or lip blush. I found Blade Boutique on Google. Can we chat about what's right for my skin and book a time?",
      buttonLabel: "Chat with Sam",
    },
  },
  {
    match: (c) => c.includes("brow_lam") || c.includes("lash"),
    config: {
      heading: "Brow lamination & lash lift — let's chat.",
      subtext:
        "Fast, no-downtime treatments with results that last weeks. WhatsApp Sam to check her next available slot.",
      whatsappMessage:
        "Hi Sam, I found Blade Boutique on Google and I'm interested in brow lamination or lash lift. What's your availability?",
      buttonLabel: "Check availability with Sam",
    },
  },
  {
    match: (c) => c.includes("pmu_city") || c.includes("near_me"),
    config: {
      heading: "Permanent makeup in Johannesburg. Let's chat.",
      subtext:
        "Sam's studio is in Fourways, Johannesburg, with easy access from Sandton, Bryanston, Randburg and the northern suburbs. WhatsApp her to find out what's possible for your brows, lips, or lashes.",
      whatsappMessage:
        "Hi Sam, I found Blade Boutique on Google looking for permanent makeup in Johannesburg. I'd love to find out more and book a consultation.",
      buttonLabel: "Book a consultation with Sam",
    },
  },
];

export function resolveAdMessage(params: AdParams): MessageConfig {
  const kw = (params.utm_term ?? "").toLowerCase();
  const campaign = (params.utm_campaign ?? "").toLowerCase();

  // 1. Keyword match (most specific)
  if (kw) {
    for (const rule of KEYWORD_RULES) {
      if (rule.match(kw)) return rule.config;
    }
  }

  // 2. Campaign match (fallback)
  if (campaign) {
    for (const rule of CAMPAIGN_RULES) {
      if (rule.match(campaign)) return rule.config;
    }
  }

  // 3. Generic fallback
  return DEFAULT;
}
