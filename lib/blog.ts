// Blog types and content data

export type BlogCategory = "Brows" | "Lips" | "Aftercare" | "Advice" | "Eyes";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "pullquote"; text: string }
  | { type: "tip"; heading: string; text: string }
  | { type: "list"; intro?: string; items: string[] }
  | { type: "cta"; heading: string; body: string }
  | { type: "divider" };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: number;
  publishedAt: string;
  updatedAt?: string;
  featuredImage: string;
  featuredImageAlt: string;
  featured?: boolean;
  content: ContentBlock[];
  seo: {
    title: string;
    description: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dark-lip-neutralisation-guide",
    title: "Dark Lip Neutralisation: The Complete Guide",
    excerpt:
      "Hyperpigmented lips are one of the most common concerns among South African women — and one of the most fixable. Here is everything you need to know about the treatment.",
    category: "Lips",
    readTime: 7,
    publishedAt: "2026-04-15",
    featuredImage: "/images/blade/blog/dark-lip-guide.jpg",
    featuredImageAlt:
      "Before and after dark lip neutralisation on melanin-rich skin at Blade Boutique Randburg",
    featured: true,
    seo: {
      title:
        "Dark Lip Neutralisation South Africa: Complete Guide | Blade Boutique Randburg",
      description:
        "Everything you need to know about dark lip neutralisation in South Africa. How it works, who it's for, healing timeline, costs, and results. By Sam at Blade Boutique, Bromhof.",
    },
    content: [
      {
        type: "p",
        text: "Dark, hyperpigmented lips are one of the most common concerns Sam sees in her studio — and one of the most emotionally significant. Women come in having spent years trying lip balms, kojic acid serums, and every brightening product on the Dischem shelf. Most leave disappointed. That's because topical products treat the surface. Hyperpigmentation lives in the dermis.",
      },
      {
        type: "p",
        text: "Dark lip neutralisation is a permanent makeup treatment that deposits corrective pigment into the skin to neutralise discolouration and restore a natural, even lip tone. It is not lip blush — it is not about adding colour. It is about taking your lips back.",
      },
      {
        type: "h2",
        text: "Who is it for?",
      },
      {
        type: "p",
        text: "Dark lip neutralisation is designed for anyone with uneven lip pigmentation. In South Africa, the most common causes are:",
      },
      {
        type: "list",
        items: [
          "Natural hyperpigmentation in melanin-rich skin (very common in Black, Brown, and Indian women)",
          "Smoking-related darkening, particularly along the outer edges of the lips",
          "Hormonal changes — pregnancy, contraception, and menopause all affect lip pigmentation",
          "Sun exposure over time, especially in a high-UV climate like South Africa",
          "Iron deficiency or chronic dehydration",
        ],
      },
      {
        type: "pullquote",
        text: "Topical products treat the surface. Hyperpigmentation lives in the dermis. That is why nothing you apply works long-term.",
      },
      {
        type: "h2",
        text: "How does the treatment work?",
      },
      {
        type: "p",
        text: "The treatment uses permanent makeup pigment — specifically formulated for dark lip correction — applied to the lips in a technique that layers corrective tones beneath your natural lip colour. Think of it as colour theory applied to skin: if your lips are too dark or grey, warm salmon and peach tones are layered in to neutralise and lift the overall tone.",
      },
      {
        type: "p",
        text: "Sam custom-mixes every session. There is no standard formula because every client's skin undertone is different. She maps the lip shape, selects the corrective blend, and applies numbing before beginning. The process takes 90 minutes to two hours.",
      },
      {
        type: "tip",
        heading: "What to expect on the day",
        text: "Arrive with clean, bare lips — no balm, gloss, or liner. Numbing is applied for 20–30 minutes before the procedure begins. During the session, mild pressure is normal. Lips will look bold, slightly swollen, and two to three shades darker immediately after. That is completely expected.",
      },
      {
        type: "h2",
        text: "The healing timeline",
      },
      {
        type: "list",
        intro: "Healing takes four to six weeks for the full result:",
        items: [
          "Days 1–3: Lips look darker and more saturated than expected. This is normal. They may feel slightly swollen.",
          "Days 4–10: Peeling and flaking begins. Do not pick. The outer pigment layer comes away, revealing softer colour beneath.",
          "Weeks 2–4: A \"ghosting\" phase where colour appears lighter. The pigment is settling into the dermis.",
          "Week 4–6: Colour reappears, softer and more natural. This is your healed result.",
        ],
      },
      {
        type: "h2",
        text: "What are the results?",
      },
      {
        type: "p",
        text: "Healed dark lip neutralisation gives you an even, natural lip tone that looks like your lips — just corrected. Most clients describe it as waking up with lips they had in their teens. The result is not \"makeup lips\" — it is restoration.",
      },
      {
        type: "p",
        text: "Results last two to three years before a colour refresh is needed. Touch-ups are included within the first four weeks of your initial treatment.",
      },
      {
        type: "pullquote",
        text: '"I cried when I saw my lips healed at week four." — Naledi, Blade Boutique client, March 2026',
      },
      {
        type: "h2",
        text: "Cost in South Africa",
      },
      {
        type: "p",
        text: "Dark lip neutralisation at Blade Boutique starts from R2,800, which includes your perfection session within four weeks. Touch-ups after 12 months are R1,800. For context, the full treatment cost is typically recovered in what clients spend on topical products over six to twelve months.",
      },
      {
        type: "h2",
        text: "Is it right for you?",
      },
      {
        type: "p",
        text: "If you have been bothered by your lip tone for years and nothing topical has worked, dark lip neutralisation is likely the most direct solution available in South Africa. It is not a procedure for everyone — severely hyperpigmented lips may require two sessions, and very pale skin may need a different approach — but for the majority of Sam's clients, one session produces the result they have been looking for.",
      },
      {
        type: "p",
        text: "The best way to know if you are a good candidate is to message Sam directly. She will tell you honestly whether the treatment is likely to work for your specific situation before you book a thing.",
      },
      {
        type: "cta",
        heading: "Ready to find out if you're a candidate?",
        body: "Message Sam on WhatsApp with a photo of your lips in natural light. She will let you know what to expect before you book anything.",
      },
    ],
  },

  {
    slug: "microblading-vs-powder-brows",
    title: "Microblading vs Powder Brows: Which Is Right For Your Skin?",
    excerpt:
      "Both give you full, defined brows without daily makeup. But they work completely differently — and the wrong choice for your skin type will cost you. Here's how to decide.",
    category: "Brows",
    readTime: 6,
    publishedAt: "2026-03-28",
    featuredImage: "/images/blade/blog/microblading-vs-powder-brows.jpg",
    featuredImageAlt:
      "Side by side comparison of microblading and powder brows healed results at Blade Boutique",
    seo: {
      title:
        "Microblading vs Powder Brows South Africa: Which Is Right For You? | Blade Boutique",
      description:
        "Microblading or powder brows? The honest comparison: how they work, which suits your skin type, how long they last, and what they cost in South Africa.",
    },
    content: [
      {
        type: "p",
        text: "The two most popular brow treatments in permanent makeup — microblading and powder brows — both promise the same outcome: full, defined brows without drawing them on every morning. But they deliver that outcome in completely different ways, and choosing the wrong one for your skin type is one of the most common (and most expensive) mistakes clients make.",
      },
      {
        type: "h2",
        text: "What is microblading?",
      },
      {
        type: "p",
        text: "Microblading uses a manual hand tool fitted with very fine needles to draw individual hair-stroke incisions in the skin, depositing pigment as it goes. When it heals, the result looks like actual brow hairs — realistic, fine, and natural. It's best suited to clients who want a very natural finish that mimics the look of hair.",
      },
      {
        type: "p",
        text: "The limitation: because microblading creates incisions in the skin, it is technique-sensitive in a way that powder brows are not. On oily skin, the strokes can blur and spread as they heal. On very thin skin, they can appear too bold. Done correctly on the right skin type, the result is stunning. Done on the wrong skin type, it fades unevenly.",
      },
      {
        type: "h3",
        text: "Microblading is best for:",
      },
      {
        type: "list",
        items: [
          "Normal to dry skin with good skin elasticity",
          "Sparse brows with some natural hair to blend with",
          "Clients who want the most natural, hair-like finish",
          "Lighter skin tones where individual strokes show well",
        ],
      },
      {
        type: "h2",
        text: "What are powder brows?",
      },
      {
        type: "p",
        text: "Powder brows (also called ombre or shaded brows) use a digital PMU machine to deposit pigment in a stippling pattern — thousands of tiny dots rather than strokes. The healed result looks like a soft, filled-in brow — similar to a fluffy pencil or powder product, but permanent. They are more versatile across skin types than microblading.",
      },
      {
        type: "p",
        text: "Because the pigment sits more evenly in the skin rather than in incisions, powder brows hold better on oily skin, last longer (two to three years vs one to two for microblading), and tend to fade more gracefully. The look is polished and defined rather than hair-like.",
      },
      {
        type: "h3",
        text: "Powder brows are best for:",
      },
      {
        type: "list",
        items: [
          "Oily or combination skin — by far the most important factor",
          "Anyone who already fills in their brows and likes a defined, made-up look",
          "Darker skin tones where hair strokes are harder to read",
          "Clients who want longer-lasting results",
          "Anyone who previously had microblading that faded unevenly",
        ],
      },
      {
        type: "pullquote",
        text: "Oily skin is the single biggest factor. If your T-zone is active by midday, powder brows will outlast microblading by at least a year.",
      },
      {
        type: "h2",
        text: "A note on melanin-rich skin",
      },
      {
        type: "p",
        text: "For clients with deeper skin tones, powder brows are generally the stronger recommendation. The stippling technique sits in the skin more predictably, and the defined result reads better on darker skin. Microblading strokes can sometimes blend into the skin on darker complexions, making the individual hairs harder to distinguish as they heal. Sam will always assess your specific skin tone and texture before recommending one over the other.",
      },
      {
        type: "h2",
        text: "What's the price difference?",
      },
      {
        type: "p",
        text: "At Blade Boutique, both microblading and powder brows are priced at R2,500, which includes your perfection session within four weeks. Nano brows — a hybrid technique using a machine for finer, hair-like strokes — are R2,800 and sit between the two options for clients who want the realism of microblading with better longevity.",
      },
      {
        type: "tip",
        heading: "Not sure which to choose?",
        text: "The fastest way to get the right answer is to send Sam a photo of your brows in natural light via WhatsApp. She can tell you in minutes which treatment is most likely to give you the result you're after, based on your skin type and existing brow hair.",
      },
      {
        type: "cta",
        heading: "Want Sam's honest recommendation?",
        body: "Send a photo of your brows in natural light. Sam will tell you which treatment is right for your skin — no obligation.",
      },
    ],
  },

  {
    slug: "permanent-makeup-aftercare-guide",
    title: "Permanent Makeup Aftercare: The Complete Healing Guide",
    excerpt:
      "The difference between a result you love and one you have to correct usually comes down to aftercare. Here is exactly what to do — and not do — week by week.",
    category: "Aftercare",
    readTime: 8,
    publishedAt: "2026-03-10",
    featuredImage: "/images/blade/blog/pmu-aftercare.jpg",
    featuredImageAlt:
      "Healed permanent makeup brows at week four — the result of proper aftercare",
    seo: {
      title:
        "Permanent Makeup Aftercare Guide: Week-by-Week | Blade Boutique Randburg",
      description:
        "The full permanent makeup aftercare guide: what to do days 1–3, the healing and ghosting phases, what to avoid, and when your result is final. By Sam at Blade Boutique.",
    },
    content: [
      {
        type: "p",
        text: "Your permanent makeup result is not finalised on the day. It is finalised over the following four to six weeks — and the choices you make during that window determine the quality of your healed result. Most clients who need correction could have avoided it with better aftercare.",
      },
      {
        type: "p",
        text: "This is the guide Sam sends every client who leaves her chair. Read it before your appointment so there are no surprises.",
      },
      {
        type: "h2",
        text: "Days 1–3: Bold and swollen",
      },
      {
        type: "p",
        text: "Immediately after your treatment, your brows, lips, or eyeliner will look significantly darker and more saturated than the final result. This is normal. The pigment is sitting in the upper layers of the skin, and there is lymphatic fluid present from the procedure. Mild swelling — particularly in the lips — is also completely normal.",
      },
      {
        type: "list",
        intro: "During days 1–3:",
        items: [
          "Keep the area clean and dry. No water contact beyond what Sam specifies.",
          "Apply the aftercare balm provided — a thin layer only, two to three times per day.",
          "Sleep on a clean pillowcase. Elevation can help reduce swelling for lip treatments.",
          "No makeup on or near the treated area.",
          "No exercise that causes heavy sweating.",
        ],
      },
      {
        type: "h2",
        text: "Days 4–10: Peeling and flaking",
      },
      {
        type: "p",
        text: "Around day four, the skin will begin to flake and peel. This is the outer layer — the epidermis — shedding the pigment sitting at the surface. Beneath it, the pigment in the dermis remains. This phase looks alarming: brows can appear to almost disappear as they peel. This is expected.",
      },
      {
        type: "pullquote",
        text: "Do not pick the flaking skin. Pulling off a scab or flake removes the pigment beneath it with the skin, creating patchy gaps that must be corrected.",
      },
      {
        type: "list",
        intro: "During days 4–10:",
        items: [
          "Let peeling happen naturally. Do not assist it.",
          "No picking, no rubbing, no scratching.",
          "Continue the aftercare balm.",
          "No swimming pools, saunas, steam rooms, or ocean water.",
          "No direct sun exposure. Cover with a hat or stay in shade.",
          "No retinol, AHA/BHA, or active skincare products on the treated area.",
        ],
      },
      {
        type: "h2",
        text: "Weeks 2–4: The ghosting phase",
      },
      {
        type: "p",
        text: "After the peeling resolves, many clients enter what is called the ghosting phase — a period where the brows (or lips) appear significantly lighter than expected, sometimes almost invisible. This is the skin's healing process. The epidermis has regenerated over the pigment, making it appear lighter until the cells become more transparent.",
      },
      {
        type: "p",
        text: "This phase causes more panic messages than anything else Sam receives. If your brows look like they have disappeared at week two, stay calm. The colour will return.",
      },
      {
        type: "tip",
        heading: "The ghosting phase is not failure",
        text: "It is a normal part of healing that almost every client experiences to some degree. The pigment is still there — it is simply obscured by the skin's healing response. By week four to six, the true healed colour will emerge.",
      },
      {
        type: "h2",
        text: "Weeks 4–6: Your healed result",
      },
      {
        type: "p",
        text: "By week four to six, your pigment will have settled and the healed result will be visible. Colour will be around 30–40% softer than the day of treatment — this is by design. Permanent makeup is meant to look natural when healed, not immediately after.",
      },
      {
        type: "p",
        text: "Your perfection session is booked around this time. This is where Sam assesses the healed result, fills any patches that may have appeared, and makes any final shape or colour adjustments. The perfection session is included in your treatment price.",
      },
      {
        type: "h2",
        text: "Long-term care",
      },
      {
        type: "list",
        items: [
          "Sunscreen over healed brows and lips when outdoors — UV degrades pigment faster than anything else.",
          "Avoid retinol and AHA/BHA products directly over the treated area in your skincare routine.",
          "Brow lamination and tinting should not be done over microbladed brows within the first six weeks.",
          "Book a colour refresh at 12–16 months to keep the result looking sharp.",
        ],
      },
      {
        type: "cta",
        heading: "Questions about your healing?",
        body: "Sam is available on WhatsApp during studio hours. If something looks unusual, send a photo — she would rather check and reassure you than have you worried.",
      },
    ],
  },

  {
    slug: "permanent-makeup-cost-south-africa",
    title: "How Much Does Permanent Makeup Cost in South Africa?",
    excerpt:
      "Prices vary wildly — and cheap permanent makeup is a false economy. Here is what you should actually expect to pay, and why.",
    category: "Advice",
    readTime: 5,
    publishedAt: "2026-02-20",
    featuredImage: "/images/blade/blog/pmu-cost-sa.jpg",
    featuredImageAlt:
      "Powder brows close-up showing fine detail work at Blade Boutique Johannesburg",
    seo: {
      title:
        "Permanent Makeup Cost in South Africa 2026: What to Expect | Blade Boutique",
      description:
        "How much does microblading, powder brows, lip blush, and dark lip neutralisation cost in South Africa? Honest price breakdown and what cheap PMU actually costs you.",
    },
    content: [
      {
        type: "p",
        text: "Permanent makeup pricing in South Africa ranges from under R800 to over R3,500 for the same treatments. That gap is not random — it reflects meaningful differences in artist training, pigment quality, technique, and the tools being used. Understanding what drives the price helps you make a better decision.",
      },
      {
        type: "h2",
        text: "What does permanent makeup cost in South Africa?",
      },
      {
        type: "list",
        intro: "Approximate market ranges in Johannesburg for 2026:",
        items: [
          "Microblading: R1,200 – R3,500",
          "Powder / ombre brows: R1,000 – R3,200",
          "Nano brows: R2,000 – R3,800",
          "Lip blush: R1,500 – R3,500",
          "Dark lip neutralisation: R2,000 – R4,500",
          "Eyeliner tattoo: R1,500 – R3,000",
          "Brow lamination: R350 – R800",
          "Lash lift and tint: R350 – R700",
        ],
      },
      {
        type: "h2",
        text: "What drives the price?",
      },
      {
        type: "p",
        text: "The largest variables are artist training and experience, pigment quality, and equipment. Internationally certified PMU artists using Permablend or Evenflo pigments and professional machines charge more than artists using cheaper equipment and unregulated pigments. The difference is visible in the healed result.",
      },
      {
        type: "p",
        text: "Cheap pigments fade grey or blue. Quality pigments fade true to tone. Cheap equipment causes more trauma to the skin. Poor technique — regardless of equipment — heals unevenly. These are not recoverable without corrective treatment, which costs more than getting it right the first time.",
      },
      {
        type: "pullquote",
        text: "Correcting bad permanent makeup costs more than the original procedure. The R900 microblading deal becomes a R4,000 correction.",
      },
      {
        type: "h2",
        text: "What should a touch-up cost?",
      },
      {
        type: "p",
        text: "Most quality studios include a perfection session (within four weeks) in the initial price — this is not optional, it is part of the treatment. Some studios charge it separately. If a studio does not include a perfection session or does not mention it, ask why. Annual refreshes typically cost R1,200 – R2,000 depending on the treatment.",
      },
      {
        type: "h2",
        text: "Blade Boutique pricing",
      },
      {
        type: "list",
        items: [
          "Microblading: R2,500 (includes perfection session)",
          "Nano brows: R2,800 (includes perfection session)",
          "Powder & ombre brows: R2,500 (includes perfection session)",
          "Lip blush: R2,500 (includes perfection session)",
          "Dark lip neutralisation: R2,800 (includes perfection session)",
          "Eyeliner tattoo: R2,000 (includes perfection session)",
          "Brow lamination & tint: R550",
          "Lash lift & tint: R550",
        ],
      },
      {
        type: "tip",
        heading: "Touch-up pricing",
        text: "Touch-ups within 12 months are R1,100. Touch-ups at 12–16 months are R1,800. Pigments used are Permablend and Evenflo — two of the most respected brands in professional PMU globally.",
      },
      {
        type: "cta",
        heading: "Book with confidence",
        body: "Transparent pricing, no hidden costs, perfection session included. Message Sam on WhatsApp to check availability.",
      },
    ],
  },

  {
    slug: "how-long-does-microblading-last",
    title: "How Long Does Microblading Last? The Honest Answer for SA Clients",
    excerpt:
      "One to three years — but the range is wide and the factors that shorten it are completely avoidable. Here is what actually determines how long your microblading holds.",
    category: "Brows",
    readTime: 7,
    publishedAt: "2026-05-01",
    featuredImage: "/images/blade/blog/how-long-does-microblading-last.jpg",
    featuredImageAlt:
      "Close-up of healed microblading brows showing fine hair strokes on melanin-rich skin",
    seo: {
      title:
        "How Long Does Microblading Last in South Africa? | Blade Boutique Randburg",
      description:
        "Microblading lasts one to three years — but several factors determine where you fall in that range. Here is the honest breakdown, including SA-specific skin and climate factors.",
    },
    content: [
      {
        type: "p",
        text: "The most common question before a microblading appointment is not about pain or price. It is: how long will it last? The honest answer is one to three years — and that range is wide for a reason. Where you land in it depends almost entirely on factors you can control.",
      },
      {
        type: "h2",
        text: "The average: what most clients experience",
      },
      {
        type: "p",
        text: "For most clients with normal to dry skin who follow aftercare correctly and protect their brows from the sun, microblading holds well for 18 to 24 months before a colour refresh is needed. Clients with oilier skin types or who spend significant time outdoors typically see noticeable fading at the 12 to 16 month mark.",
      },
      {
        type: "p",
        text: "This is not a flaw in the treatment. Microblading sits in the upper dermis — it is designed to fade gradually. Pigment that lasts forever is pigment that has gone too deep, which creates a different set of problems.",
      },
      {
        type: "h2",
        text: "What makes microblading fade faster",
      },
      {
        type: "list",
        intro: "The following factors shorten microblading longevity significantly:",
        items: [
          "Oily or combination skin: sebum production gradually pushes pigment out of the dermis. If your T-zone is active by midday, expect microblading to fade faster — and consider powder brows instead.",
          "Sun exposure: UV is the single biggest pigment degrader. In South Africa, with one of the highest UV indices in the world, this matters more than anywhere else. SPF over healed brows is non-negotiable.",
          "Retinol and AHA/BHA products: chemical exfoliants accelerate skin cell turnover, which means pigment moves out faster. Many clients who are surprised by quick fading are using active skincare products without realising the effect.",
          "Swimming pools and saunas: chlorine and steam exposure both accelerate fading. This applies to the healing period especially, but also long-term.",
          "Iron deficiency: commonly linked to quicker-than-average fading. If your microblading fades very fast across multiple sessions, a blood panel is worth discussing with your GP.",
          "Very fair or very deep skin tones: microblading hair strokes can read differently depending on skin tone, and the depth at which pigment must be placed differs, which can affect retention.",
        ],
      },
      {
        type: "pullquote",
        text: "UV is the biggest pigment degrader in South Africa. One of the highest UV indices in the world means SPF over your healed brows is not optional — it is maintenance.",
      },
      {
        type: "h2",
        text: "A note on melanin-rich skin",
      },
      {
        type: "p",
        text: "South African clients with deeper skin tones sometimes experience slightly different healing and retention compared to lighter-skinned clients. Melanin-rich skin heals more robustly — which is a good thing — but it also means the skin can sometimes push pigment slightly during healing. In Sam's experience, the first perfection session is especially important for deeper skin tones, as it allows for precise adjustments once the initial heal is complete.",
      },
      {
        type: "h2",
        text: "The touch-up schedule",
      },
      {
        type: "list",
        intro: "How to structure your microblading appointments:",
        items: [
          "Perfection session (included): booked 4 to 6 weeks after the initial procedure. This is not a bonus — it is part of the treatment. It is where patches are filled, shape is refined, and the final result is locked in.",
          "Colour refresh at 12 to 16 months: for most clients, this is when brows start looking softer and sparsely filled. A 60-minute refresh session restores the original result.",
          "Annual refresh after that: once you are in the maintenance cycle, most clients come back once per year to keep brows looking sharp.",
        ],
      },
      {
        type: "tip",
        heading: "Signs it is time for a refresh",
        text: "Brows look sparser than when they first healed. Colour has shifted to a cool or grey tone (common when pigment is near the end of its cycle). The hair strokes look soft rather than defined. If you are in doubt, send Sam a photo on WhatsApp — she will tell you honestly whether you need a touch-up or whether your brows are still performing well.",
      },
      {
        type: "h2",
        text: "How to get maximum longevity",
      },
      {
        type: "list",
        items: [
          "Apply SPF 30 or higher over healed brows when spending time outdoors.",
          "Avoid retinol and AHA/BHA products directly over the brow area in your daily skincare routine.",
          "Do not pick, rub, or scratch brows during the healing period — this is when most premature fading is caused.",
          "Stay out of pools, saunas, and steam rooms for the first 4 weeks after treatment.",
          "Book your perfection session at the correct time (4 to 6 weeks post-treatment, not earlier or later).",
          "Come back for a colour refresh before the brows are completely faded — it is easier and cheaper to refresh maintained brows than to re-do them from scratch.",
        ],
      },
      {
        type: "cta",
        heading: "Ready to book or have questions about longevity?",
        body: "Message Sam on WhatsApp. She will give you an honest assessment of how microblading is likely to perform on your specific skin type — before you spend a thing.",
      },
    ],
  },

  {
    slug: "brow-lamination-johannesburg-guide",
    title: "Brow Lamination in Johannesburg: What It Is, What It Costs, and Who It Is For",
    excerpt:
      "Brow lamination gives you full, brushed-up brows without needles or permanent pigment. Here is everything you need to know before booking in Johannesburg.",
    category: "Brows",
    readTime: 6,
    publishedAt: "2026-05-03",
    featuredImage: "/images/blade/blog/brow-lamination-johannesburg.jpg",
    featuredImageAlt:
      "Before and after brow lamination results showing brushed-up full brows at Blade Boutique Randburg",
    seo: {
      title:
        "Brow Lamination Johannesburg 2026: Prices, Process & What to Expect | Blade Boutique",
      description:
        "Everything you need to know about brow lamination in Johannesburg. How it works, who it suits, how long it lasts, and what it costs. By Sam at Blade Boutique, Bromhof.",
    },
    content: [
      {
        type: "p",
        text: "Brow lamination has become one of the most requested treatments in Sam's studio over the past two years. The result — thick, fluffy, brushed-up brows that hold their shape for six to eight weeks — has a way of looking like you were simply born with excellent brows. No daily pencil. No brow gel. Just your own hair, trained into shape.",
      },
      {
        type: "h2",
        text: "What is brow lamination?",
      },
      {
        type: "p",
        text: "Brow lamination is a semi-permanent treatment that uses a chemical solution to relax the bonds in your brow hairs, allowing them to be repositioned and set in a new direction. Think of it like a perm for your eyebrows. The hairs are brushed into the desired shape, set with a neutralising solution, and then nourished with a conditioning treatment.",
      },
      {
        type: "p",
        text: "A tint is typically added as part of the same appointment — this deepens and defines the brows further, giving the finished look more impact. The whole process takes around 60 minutes.",
      },
      {
        type: "h2",
        text: "Who is brow lamination for?",
      },
      {
        type: "p",
        text: "Brow lamination is for anyone who has enough natural brow hair to work with — but wants more fullness, a better shape, or simply does not want to style their brows every day. It suits clients who:",
      },
      {
        type: "list",
        items: [
          "Have naturally full brows but in the wrong direction or shape",
          "Have slightly sparse brows but enough hair to create a fuller effect when repositioned",
          "Are not ready for permanent makeup but want a defined result",
          "Want to see what fuller brows would look like before committing to microblading or powder brows",
          "Prefer a treatment with zero healing time and no needles",
        ],
      },
      {
        type: "h2",
        text: "Who is brow lamination NOT for?",
      },
      {
        type: "p",
        text: "Brow lamination requires your own natural hair to work. If your brows are very sparse — very few hairs to speak of — lamination will not give you a full result. In that case, microblading, powder brows, or nano brows are the right conversation. Lamination works with what you have. Permanent makeup creates what is not there.",
      },
      {
        type: "tip",
        heading: "Not sure if you have enough brow hair?",
        text: "Send Sam a photo on WhatsApp in natural light. She will tell you honestly whether lamination will give you the result you are picturing, or whether a different treatment is a better fit.",
      },
      {
        type: "h2",
        text: "How long does brow lamination last?",
      },
      {
        type: "p",
        text: "Results typically last six to eight weeks. Your brows will gradually return to their natural growth pattern as the solution wears off. Some clients find their brows retain some of the trained direction even after the treatment has fully faded.",
      },
      {
        type: "p",
        text: "In Johannesburg's hot, humid summers, results may track toward the six-week end of the range. In cooler, drier months, the eight-week end is more common. Regular clients typically book every six to eight weeks as part of their beauty routine.",
      },
      {
        type: "h2",
        text: "What does brow lamination cost in Johannesburg?",
      },
      {
        type: "p",
        text: "Market pricing in Johannesburg ranges from R350 to R800, depending on the studio and whether a tint is included. At Blade Boutique, brow lamination with tint is R550. The perfection session model used in permanent makeup treatments does not apply here — if your brows are not sitting exactly as you want after the first appointment, Sam will adjust them at the time.",
      },
      {
        type: "h2",
        text: "Aftercare: the 24-hour rule",
      },
      {
        type: "list",
        intro: "After your lamination appointment:",
        items: [
          "Keep brows completely dry for 24 hours — no washing, steam, or sweating that reaches the brows.",
          "Do not rub or flatten the brows during this period.",
          "After 24 hours, brush brows daily with a spoolie — upward and slightly outward — to maintain the shape.",
          "Use a brow serum or conditioning oil twice a week to keep the hairs healthy between lamination sessions.",
          "Avoid applying heavy oils directly over the brows as this can relax the set sooner.",
        ],
      },
      {
        type: "h2",
        text: "Brow lamination vs microblading: which is right for you?",
      },
      {
        type: "p",
        text: "The honest comparison: brow lamination is temporary, needle-free, and works with your natural hair. Microblading is permanent, uses a hand tool to create hair-stroke incisions, and fills in where hair does not exist. They solve different problems. If you have existing brow hair and want shape and fullness — lamination. If you have minimal hair and want brows that look full without daily effort — microblading or powder brows.",
      },
      {
        type: "p",
        text: "Some clients have both done at different times: lamination every six to eight weeks when they want the fluffy brushed-up look, and microblading underneath to fill in sparse patches permanently. It is not either/or.",
      },
      {
        type: "cta",
        heading: "Book your brow lamination in Randburg",
        body: "Sam is based in Bromhof, Randburg. Message her on WhatsApp to check availability — same-week appointments are often available for lamination.",
      },
    ],
  },

  {
    slug: "lip-blush-tattoo-south-africa",
    title: "Lip Blush Tattoo South Africa: What It Is, Who It Is For, and What to Expect",
    excerpt:
      "Lip blush gives you a soft, natural-looking wash of colour — like your lips on a good day, permanently. Here is the complete guide for South African women.",
    category: "Lips",
    readTime: 7,
    publishedAt: "2026-05-05",
    featuredImage: "/images/blade/blog/lip-blush-tattoo-south-africa.jpg",
    featuredImageAlt:
      "Healed lip blush tattoo result showing soft natural pink colour on South African woman",
    seo: {
      title:
        "Lip Blush Tattoo South Africa: Complete Guide 2026 | Blade Boutique Randburg",
      description:
        "Everything about lip blush tattoo in South Africa: what it is, who it suits, healing timeline, melanin-rich skin considerations, and costs at Blade Boutique Johannesburg.",
    },
    content: [
      {
        type: "p",
        text: "Lip blush is one of the most misunderstood treatments in permanent makeup. Clients often come in thinking it will give them bold, coloured lips. It does not. Done correctly, lip blush gives you soft, natural-looking colour — a slightly more defined version of your own lips on a good day. No lipliner. No constant reapplication. Just lips that always look ready.",
      },
      {
        type: "h2",
        text: "What is lip blush?",
      },
      {
        type: "p",
        text: "Lip blush is a permanent makeup treatment that deposits very light pigment across the lips in a sheer, diffused technique. The result is a soft wash of colour — similar in effect to a tinted lip balm or a sheer lipstick — but permanent. It also adds definition to the lip border without looking like a drawn-on liner.",
      },
      {
        type: "p",
        text: "It is not lip tattoo in the traditional sense. It does not create opaque, heavy colour. It works with your natural lip tone to enhance it — which means the healed result looks different on every client, because every client's lips are a different starting colour.",
      },
      {
        type: "h2",
        text: "Who is lip blush for?",
      },
      {
        type: "list",
        items: [
          "Women who want natural-looking lip colour without the effort of daily lipstick or liner",
          "Clients with naturally pale, uneven, or undefined lips who want more presence",
          "Anyone who has lost lip definition with age — lips often become less defined as we get older",
          "Clients who want to balance asymmetry in their lip shape",
          "Women who wear makeup and want a soft base colour that always reads as put-together, even without additional products",
        ],
      },
      {
        type: "h2",
        text: "Who is lip blush NOT for?",
      },
      {
        type: "p",
        text: "Lip blush is not the right treatment for lips with significant hyperpigmentation or dark discolouration. If your lips are very dark — whether from natural melanin concentration, smoking, hormonal causes, or sun damage — the sheer pigment of a lip blush treatment will not show through effectively. In those cases, dark lip neutralisation is the correct starting point. Once the underlying tone is corrected, lip blush can be done over the top in a second session.",
      },
      {
        type: "pullquote",
        text: "Lip blush works with your natural lip tone. If your lips are very dark, the colour will not show through. Sam will tell you honestly at consultation whether lip blush or dark lip neutralisation is the right first step.",
      },
      {
        type: "h2",
        text: "Lip blush and melanin-rich skin",
      },
      {
        type: "p",
        text: "South Africa has an enormous range of skin tones, and lip blush behaves differently depending on your natural lip colour. For clients with deeper skin tones and naturally pigmented lips, Sam selects warm, opaque-leaning pigments that can show through existing melanin. The technique is adjusted accordingly — more layers, more precise colour-mixing, longer application time.",
      },
      {
        type: "p",
        text: "For clients with naturally fair lips, the healed result is a delicate flush of colour that looks entirely natural. For clients with medium tones, it reads as a slightly defined, healthy lip. For very dark or hyperpigmented lips, dark lip neutralisation is the foundation step that makes lip blush possible.",
      },
      {
        type: "h2",
        text: "Does lip blush hurt?",
      },
      {
        type: "p",
        text: "Lips are more vascular than brows, which means they are more sensitive. A numbing cream is applied for 20 to 30 minutes before the procedure begins, which significantly reduces discomfort. Most clients describe the sensation during treatment as mild pressure and occasional warmth. The full procedure takes 90 minutes to two hours.",
      },
      {
        type: "h2",
        text: "The healing timeline",
      },
      {
        type: "list",
        intro: "Lip blush heals over four to six weeks:",
        items: [
          "Days 1 to 3: lips appear significantly darker and more saturated than the final result. They may feel slightly swollen and tender. This is completely normal.",
          "Days 4 to 7: peeling begins. The outer pigment layer comes away. Do not pick — the colour underneath is settling into the dermis.",
          "Weeks 2 to 3: a ghosting phase where colour appears much lighter than expected. Many clients panic here. The result is not lost — the skin is healing over the pigment.",
          "Weeks 4 to 6: healed colour emerges. It will be 30 to 50% softer than the immediate post-treatment result. This is the true finish.",
        ],
      },
      {
        type: "tip",
        heading: "Healing tip for lip blush specifically",
        text: "Keep lips moisturised throughout the healing period with the balm Sam provides. Do not kiss, drink hot beverages, or eat spicy food in the first 48 hours. Straws are your friend in the first week. Avoid chlorine and steam rooms for the full four-week healing period.",
      },
      {
        type: "h2",
        text: "How long does lip blush last?",
      },
      {
        type: "p",
        text: "Lip blush typically lasts two to three years before a colour refresh is needed. Lips regenerate faster than other areas because of constant movement, moisture, and contact — so pigment fades more quickly here than on brows. Annual refreshes keep the result looking optimal. Sun protection on the lips also extends longevity — the same UV factor that fades brow pigment applies here.",
      },
      {
        type: "h2",
        text: "What does lip blush cost in Johannesburg?",
      },
      {
        type: "p",
        text: "Market pricing in Johannesburg ranges from R1,500 to R3,500. At Blade Boutique, lip blush is R2,500, which includes your perfection session within four weeks. Touch-ups at 12 months are R1,100. Touch-ups at 12 to 16 months are R1,800.",
      },
      {
        type: "cta",
        heading: "Want to know if lip blush is right for your lips?",
        body: "Send Sam a photo of your lips in natural light on WhatsApp. She will assess your starting tone and tell you whether lip blush, dark lip neutralisation, or a combination approach is the right step for you.",
      },
    ],
  },

  {
    slug: "permanent-eyeliner-tattoo-guide",
    title: "Permanent Eyeliner Tattoo: The Complete Guide for SA Women",
    excerpt:
      "Waking up with defined eyes — no smudging, no reapplication, no skill required. Here is everything you need to know about permanent eyeliner before booking.",
    category: "Eyes",
    readTime: 7,
    publishedAt: "2026-05-07",
    featuredImage: "/images/blade/blog/permanent-eyeliner-tattoo-guide.jpg",
    featuredImageAlt:
      "Close-up of healed permanent eyeliner tattoo showing defined upper lash line",
    seo: {
      title:
        "Permanent Eyeliner Tattoo Johannesburg: Complete Guide 2026 | Blade Boutique",
      description:
        "Everything about permanent eyeliner in Johannesburg: styles, pain levels, healing, how long it lasts, and what it costs. By Sam at Blade Boutique, Bromhof Randburg.",
    },
    content: [
      {
        type: "p",
        text: "For anyone who wears eyeliner every day, the appeal of permanent eyeliner is immediate: defined eyes the moment you wake up, no smudging by noon, no reapplication needed. For clients with unsteady hands, allergies to eye makeup, or simply a desire to simplify their routine, it solves a real daily problem permanently.",
      },
      {
        type: "h2",
        text: "What styles of permanent eyeliner are available?",
      },
      {
        type: "list",
        items: [
          "Lash enhancement: pigment is deposited between the upper lashes, thickening the lash line without creating a visible line above it. The most natural-looking option. Wearable with or without additional eye makeup.",
          "Classic upper liner: a defined line sits directly along the upper lash line. Ranges from very fine to moderate thickness. Can be designed with or without a small flick at the outer corner.",
          "Winged liner: a precise wing or flick is incorporated. Suitable for clients who wear the same wing shape consistently — the permanence means committing to that shape long-term.",
          "Lower lash line: pigment is applied along the lower lash line. Gives a more dramatic, defined look. Often done in combination with upper liner.",
          "Waterline: the inner rim of the eye. Creates the appearance of thicker, more defined lashes. This is the most sensitive placement and not all clients are suitable candidates.",
        ],
      },
      {
        type: "p",
        text: "The most popular option Sam performs is lash enhancement. It reads as natural, works with all styles of eye makeup, and is the most forgiving if you change your aesthetic preferences over time. Classic upper liner comes second.",
      },
      {
        type: "h2",
        text: "Does permanent eyeliner hurt?",
      },
      {
        type: "p",
        text: "The eye area is more sensitive than brows or lips, and the proximity to the eyeball makes many clients anxious going in. In practice, numbing cream applied correctly handles most of the discomfort. The sensation during treatment is typically described as a mild vibration or pressure — not the sharp pain many clients expect.",
      },
      {
        type: "p",
        text: "The most common experience: clients are surprised by how manageable it is. Eyes are more likely to water during the treatment than they are to be painful — a natural reflex response to anything near the eye, not a pain response.",
      },
      {
        type: "tip",
        heading: "Pre-treatment preparation",
        text: "Remove contact lenses before your appointment. Do not wear eye makeup on the day. Arrive having had a full night's sleep — tired eyes are more sensitive. If you take any blood thinners or aspirin, consult your doctor before booking. Let Sam know about any eye conditions, previous eye surgery, or severe allergies at consultation.",
      },
      {
        type: "h2",
        text: "The healing process",
      },
      {
        type: "p",
        text: "Permanent eyeliner heals differently from brows or lips. Because the skin around the eye is thinner and more delicate, swelling is more pronounced in the first 24 to 48 hours. Eyes may be slightly puffy the morning after treatment. This resolves quickly.",
      },
      {
        type: "list",
        intro: "What to expect:",
        items: [
          "Day 1 to 2: liner appears darker and bolder than the final result. Some puffiness and redness, particularly along the lash line.",
          "Day 3 to 5: flaking begins. The line may appear less defined as the outer layer of pigment lifts. Do not rub — let it flake naturally.",
          "Week 1 to 2: most visible flaking resolves. Liner looks lighter than expected — the ghosting phase applies here as with other permanent makeup.",
          "Week 3 to 6: healed result emerges. The line will be softer and less bold than immediately after treatment.",
        ],
      },
      {
        type: "h2",
        text: "How long does permanent eyeliner last?",
      },
      {
        type: "p",
        text: "Permanent eyeliner typically lasts longer than brows or lips — two to four years before a colour refresh is needed. The eye area sees less sun exposure and less product contact than lips, and the thin skin around the eye retains pigment differently. Many clients find their eyeliner holds very well for two to three years with no maintenance.",
      },
      {
        type: "pullquote",
        text: "Of all permanent makeup treatments, eyeliner is typically the longest-lasting. Less UV exposure and minimal product contact mean pigment stays longer here than anywhere else.",
      },
      {
        type: "h2",
        text: "Is permanent eyeliner safe?",
      },
      {
        type: "p",
        text: "Performed by a trained artist with proper sterilisation and single-use needles, permanent eyeliner is safe. The key risks — infection or allergic reaction — are both preventable with correct hygiene and a proper patch test or consultation. Sam uses Permablend and Evenflo pigments, which are widely considered the professional standard for safety and true-fading properties.",
      },
      {
        type: "p",
        text: "The risk of choosing an underqualified artist for eyeliner is higher than with brows or lips, given the sensitivity and proximity to the eye. This is one treatment where portfolio review, hygiene standards, and artist training matter more than the price difference.",
      },
      {
        type: "h2",
        text: "What does permanent eyeliner cost in Johannesburg?",
      },
      {
        type: "p",
        text: "At Blade Boutique, permanent eyeliner is R2,000, which includes your perfection session within four weeks. The market range in Johannesburg is R1,500 to R3,000 depending on the studio and the style requested.",
      },
      {
        type: "cta",
        heading: "Questions about permanent eyeliner?",
        body: "Message Sam on WhatsApp. She will walk you through which style is most likely to suit your eye shape and lifestyle — before you make any decisions.",
      },
    ],
  },

  {
    slug: "microblading-near-me-johannesburg",
    title: "Microblading Near Me in Johannesburg: Blade Boutique, Bromhof",
    excerpt:
      "Looking for microblading near you in Johannesburg? Blade Boutique is in Bromhof, Randburg — a quick drive from Sandton, Fourways, and Roodepoort. Here is what to expect.",
    category: "Brows",
    readTime: 5,
    publishedAt: "2026-05-25",
    featuredImage: "/images/blade/blog/microblading-near-me-johannesburg.jpg",
    featuredImageAlt:
      "Healed microblading brows on a South African woman at Blade Boutique in Bromhof, Randburg, Johannesburg",
    seo: {
      title:
        "Microblading Near Me Johannesburg — Blade Boutique Bromhof, Randburg",
      description:
        "Looking for microblading near you in Johannesburg? Blade Boutique is in Bromhof, Randburg. Microblading R2,500, includes perfection session. Book via WhatsApp.",
    },
    content: [
      {
        type: "p",
        text: "If you have been searching for microblading near you in Johannesburg, Blade Boutique is a permanent makeup studio run by Sam in Bromhof, Randburg. It is a quick drive from Sandton (about 20 minutes), Fourways (15 minutes), Roodepoort (10 minutes), and Northriding. Sam works from a private, clean studio and handles every appointment herself.",
      },
      {
        type: "h2",
        text: "Where exactly is Blade Boutique?",
      },
      {
        type: "p",
        text: "The studio is in Bromhof, Randburg — a residential suburb just off Witkoppen Road. It is not a shared salon space. Clients come to a quiet, private studio where Sam is the only practitioner. The address is shared directly when you confirm your booking via WhatsApp.",
      },
      {
        type: "list",
        intro: "Driving time from nearby areas:",
        items: [
          "Fourways and Lonehill: approximately 15 minutes",
          "Sandton and Morningside: approximately 20 minutes",
          "Roodepoort and Northriding: approximately 10 minutes",
          "Randburg CBD and Ferndale: approximately 10 minutes",
          "Midrand: approximately 25–30 minutes",
          "Pretoria South: approximately 40–45 minutes (see the PMU Pretoria guide for closer options)",
        ],
      },
      {
        type: "h2",
        text: "What permanent makeup treatments are available?",
      },
      {
        type: "p",
        text: "Sam specialises in brow, lip, and eye permanent makeup — all with a focus on natural, flattering results rather than overdone aesthetics. Every treatment includes a perfection session within four weeks at no extra cost.",
      },
      {
        type: "list",
        intro: "Current prices at Blade Boutique:",
        items: [
          "Microblading: R2,500 (includes perfection session)",
          "Nano brows: R2,800 (includes perfection session)",
          "Powder and ombre brows: R2,500 (includes perfection session)",
          "Lip blush: R2,500 (includes perfection session)",
          "Dark lip neutralisation: R2,800 (includes perfection session)",
          "Permanent eyeliner: R2,000 (includes perfection session)",
          "Brow lamination with tint: R550",
          "Lash lift and tint: R550",
        ],
      },
      {
        type: "pullquote",
        text: "Every PMU treatment at Blade Boutique includes a perfection session within four weeks. No hidden add-ons — the price you see is the price you pay.",
      },
      {
        type: "h2",
        text: "Is microblading the right treatment for you?",
      },
      {
        type: "p",
        text: "Microblading uses a manual hand tool to draw fine, hair-like strokes in the skin — the result mimics real brow hairs and heals looking very natural. It works best on normal to dry skin. If your skin tends to be oily, powder brows or nano brows are likely to hold better and last longer. If you are not sure, send Sam a photo of your brows in natural light on WhatsApp — she will tell you which treatment is most likely to work for your skin type before you book.",
      },
      {
        type: "tip",
        heading: "Microblading vs powder brows: the quick answer",
        text: "If your T-zone is oily by midday, powder brows will outlast microblading by at least a year. If your skin is normal to dry, microblading gives a more natural, hair-like result. Sam will confirm which is right for your skin at consultation.",
      },
      {
        type: "h2",
        text: "How to book",
      },
      {
        type: "p",
        text: "All bookings are made via WhatsApp. Send Sam a message with what you are interested in, and she will confirm availability, answer any questions, and give you the studio address when your appointment is confirmed. There is no online booking system — this keeps communication direct and means you speak to the person doing your treatment, not a front desk.",
      },
      {
        type: "h2",
        text: "Why Blade Boutique?",
      },
      {
        type: "p",
        text: "Sam has been working in permanent makeup for over a decade. She uses Permablend and Evenflo pigments — the professional standard for safe, true-fading colour — and single-use, pre-packaged needles at every appointment. The studio is hygienic, private, and focused entirely on permanent makeup and related treatments. There is no pressure to upgrade or add services at the appointment. Her prices are listed publicly because she believes you should know what you are paying before you walk in.",
      },
      {
        type: "cta",
        heading: "Looking for microblading near you in Johannesburg?",
        body: "Message Sam on WhatsApp to check availability and ask any questions before you book. She responds quickly and will give you an honest answer about what to expect.",
      },
    ],
  },

  {
    slug: "how-to-choose-permanent-makeup-artist-johannesburg",
    title: "How to Choose a Permanent Makeup Artist in Johannesburg (8 Questions to Ask First)",
    excerpt:
      "Permanent makeup is not reversible. Choosing the wrong artist is a mistake that costs you more than the original price. Here is how to evaluate anyone before you book.",
    category: "Advice",
    readTime: 8,
    publishedAt: "2026-05-10",
    featuredImage: "/images/blade/blog/how-to-choose-pmu-artist-johannesburg.jpg",
    featuredImageAlt:
      "Permanent makeup artist applying brow treatment in a clean, professional studio setting",
    seo: {
      title:
        "How to Choose a Permanent Makeup Artist in Johannesburg 2026 | Blade Boutique",
      description:
        "8 questions to ask before booking permanent makeup in Johannesburg. How to evaluate portfolios, certifications, hygiene, and pricing — and what red flags to avoid.",
    },
    content: [
      {
        type: "p",
        text: "Permanent makeup is one of the few beauty treatments where a bad outcome is not washed away in the shower. Poorly done microblading, lip blush, or eyeliner stays on your face for years. Correcting it costs more than doing it right the first time. Choosing your artist is the most important step in the process — more important than which treatment you pick or what result you want.",
      },
      {
        type: "p",
        text: "Here is what you should actually be evaluating before handing over a deposit.",
      },
      {
        type: "h2",
        text: "1. Does the portfolio show healed results?",
      },
      {
        type: "p",
        text: "This is the single most important thing to check. Fresh permanent makeup looks dramatically different from healed permanent makeup. Fresh brows are bold, saturated, and often swollen. Healed brows are softer, faded by 30 to 50%, and show whether the pigment settled correctly into the skin.",
      },
      {
        type: "p",
        text: "Any artist can post a good fresh result. What separates experienced artists from novices is how the work looks at four to six weeks healed. If an Instagram or portfolio only shows day-one photos — or if you cannot find a single healed result — walk away.",
      },
      {
        type: "h2",
        text: "2. What are their certifications — and what do those certifications actually mean?",
      },
      {
        type: "p",
        text: "Permanent makeup certification in South Africa is largely unregulated. A weekend course certificate means something very different from an internationally recognised qualification. The certifications worth looking for include training from established PMU academies with a measurable curriculum, international bodies such as the Society of Permanent Cosmetic Professionals (SPCP) or equivalent, and hands-on supervised hours — not just theory.",
      },
      {
        type: "p",
        text: "Be sceptical of artists who list multiple certificates without context. A short course in ten techniques is not comparable to deep specialisation in two or three. Ask how many hours of training they completed, and under whom.",
      },
      {
        type: "h2",
        text: "3. What is their hygiene protocol?",
      },
      {
        type: "list",
        intro: "These are the non-negotiables. Any reputable studio should be able to confirm:",
        items: [
          "Single-use, pre-packaged needles opened in front of you at the start of each appointment",
          "Disposable pigment cups — never a shared pot",
          "Gloves worn throughout the entire procedure",
          "Surface sterilisation between clients",
          "Proper sharps disposal",
        ],
      },
      {
        type: "p",
        text: "If you cannot find this information on their website or booking communication, ask directly before your appointment. An artist who is defensive about hygiene questions is a red flag.",
      },
      {
        type: "h2",
        text: "4. Do they include a consultation and skin assessment?",
      },
      {
        type: "p",
        text: "A proper permanent makeup consultation is not just a chat about what you want. It includes an assessment of your skin type and tone, a review of your lifestyle and skincare routine (certain products affect how pigment heals), a medical history check (blood thinners, skin conditions, allergies), and colour mixing for your specific undertone.",
      },
      {
        type: "p",
        text: "Artists who skip this step — who ask you to choose a shape from a reference sheet without assessing your face — are optimising for speed, not for your result.",
      },
      {
        type: "h2",
        text: "5. What pigments do they use — and will they tell you?",
      },
      {
        type: "p",
        text: "Not all permanent makeup pigments are equal. Cheap, unregulated pigments fade grey, blue, or orange — common outcomes you see in poorly done old microblading. Quality pigments from brands like Permablend, Evenflo, and World Famous are formulated specifically for the skin, fade true to their original tone, and are widely tested for safety.",
      },
      {
        type: "p",
        text: "An artist who uses premium pigments will know the brand and be happy to tell you. An artist who says 'just pigment' or does not know what they are using is a concern.",
      },
      {
        type: "h2",
        text: "6. Is the perfection session included?",
      },
      {
        type: "p",
        text: "Permanent makeup always requires a follow-up session four to six weeks after the initial appointment. This is called the perfection session — it is where the artist assesses the healed result and fills patches, adjusts colour, or refines the shape. It is not optional. It is part of the treatment.",
      },
      {
        type: "p",
        text: "Some studios charge the perfection session separately. This is not standard practice among quality artists. If a studio advertises a very low initial price and charges extra for the follow-up, factor that into the real cost comparison.",
      },
      {
        type: "h2",
        text: "7. How do their prices compare — and what does cheap actually cost you?",
      },
      {
        type: "pullquote",
        text: "The R900 microblading deal becomes a R4,000 correction. Correcting bad permanent makeup costs more than getting it right the first time — always.",
      },
      {
        type: "p",
        text: "The Johannesburg market ranges from under R1,000 to over R3,500 for the same treatment. That difference is not random. It reflects training level, pigment quality, equipment, studio hygiene standards, and time invested per client. Experienced artists who do fewer, better appointments charge more — and the healed results show it.",
      },
      {
        type: "p",
        text: "The truly expensive outcome is correction work. Removing or correcting bad permanent makeup requires multiple saline removal sessions or laser treatments, each costing R800 to R2,000, before a new treatment can be applied. Clients who chose the cheapest option often spend significantly more in total than clients who chose the right artist from the start.",
      },
      {
        type: "h2",
        text: "8. Can you speak to them before booking?",
      },
      {
        type: "p",
        text: "A good permanent makeup artist is accessible before you book. They should be willing to answer your questions, review a photo of your current brows or lips, and give you an honest assessment of what is achievable for your specific situation. If you cannot get a real response before you pay a deposit, you will not get great communication when something goes wrong during healing.",
      },
      {
        type: "tip",
        heading: "What Blade Boutique offers",
        text: "Sam has been performing permanent makeup for 12 years, uses Permablend and Evenflo pigments exclusively, includes the perfection session in every treatment price, and is available on WhatsApp for consultations before you book a thing. Send her a photo of your brows or lips — she will tell you honestly what is achievable and which treatment is the right starting point.",
      },
      {
        type: "cta",
        heading: "Have questions before you book?",
        body: "Message Sam on WhatsApp. No obligation, no hard sell — just an honest answer about what the right treatment looks like for you.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.featured);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Brows",
  "Lips",
  "Aftercare",
  "Advice",
  "Eyes",
];
