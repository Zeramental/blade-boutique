import { readFileSync, writeFileSync } from "fs";

function fix(filePath, replacements) {
  let src = readFileSync(filePath, "utf8");
  let original = src;
  for (const [from, to] of replacements) {
    src = src.replaceAll(from, to);
  }
  if (src !== original) {
    writeFileSync(filePath, src);
    console.log(`✓ ${filePath.split("/").slice(-2).join("/")}`);
  }
}

// layout.tsx
fix("app/layout.tsx", [
  ["Blade Boutique — Permanent Makeup Studio in Bromhof, Randburg (Johannesburg)", "Blade Boutique: Permanent Makeup Studio in Bromhof, Randburg"],
  ["Blade Boutique — Permanent Makeup Studio in Bromhof, Randburg", "Blade Boutique: Permanent Makeup Studio in Bromhof, Randburg"],
  ["Meticulous permanent makeup by Sam — microblading, nano brows, lip blush, dark lip neutralisation.", "Meticulous permanent makeup by Sam: microblading, nano brows, lip blush, dark lip neutralisation."],
  ["Sam — Permanent Makeup Artist at Blade Boutique", "Sam, Permanent Makeup Artist at Blade Boutique"],
  ["Blade Boutique — Permanent Makeup in Randburg", "Blade Boutique: Permanent Makeup in Randburg"],
]);

// Nav.tsx
fix("components/Nav.tsx", [
  [`aria-label="Blade Boutique — home"`, `aria-label="Blade Boutique home"`],
]);

// Hero.tsx
fix("components/Hero.tsx", [
  ["Meticulous permanent makeup by Sam — microblading, nano brows, lip", "Meticulous permanent makeup by Sam: microblading, nano brows, lip"],
]);

// PriceTable.tsx
fix("components/PriceTable.tsx", [
  ["Touch-ups between <strong>12 and 16 months</strong> — R1,800.", "Touch-ups between <strong>12 and 16 months</strong>: R1,800."],
]);

// page.tsx (homepage)
fix("app/page.tsx", [
  ["Blade Boutique — Permanent Makeup Studio in Bromhof, Randburg (Johannesburg)", "Blade Boutique: Permanent Makeup Studio in Bromhof, Randburg"],
  ["Meticulous permanent makeup by Sam — microblading, nano brows, powder brows, lip blush, dark lip neutralisation, eyeliner.", "Meticulous permanent makeup by Sam: microblading, nano brows, powder brows, lip blush, dark lip neutralisation, eyeliner."],
  ["Pigment fades gently and stays true to tone — we use Permablend", "Pigment fades gently and stays true to tone. We use Permablend"],
  ["Lips are the most sensitive — a layered numbing protocol", "Lips are the most sensitive, and a layered numbing protocol"],
  // JSX copy
  ["Randburg — one chair, one client at a time.", "Randburg. One chair, one client at a time."],
  // Comments only (not user-facing, but clean them anyway)
  ["/* Meet Sam section — pink gradient flow */", "/* Meet Sam section */"],
  ["/* CTA section — deep with pink gradient */", "/* CTA section */"],
]);

// about/page.tsx
fix("app/about/page.tsx", [
  ["About Sam — 12+ years of permanent makeup in Johannesburg", "About Sam: 12+ Years of Permanent Makeup in Johannesburg"],
  ["neutralisation for melanin-rich skin — a skill in short supply in", "neutralisation for melanin-rich skin, a skill in short supply in"],
  ["I use Permablend and Evenflo pigments — two of the most trusted", "I use Permablend and Evenflo pigments, two of the most trusted"],
]);

// gallery/page.tsx
fix("app/gallery/page.tsx", [
  ["Gallery — Real, healed permanent makeup results", "Gallery: Real, Healed Permanent Makeup Results"],
  ["permission. No filters. No edits.\u00a0— Sam", "permission. No filters. No edits. Sam."],
  ["caption pending — gallery seeds will load from Supabase", "caption pending, gallery seeds will load from Supabase"],
]);

// book/page.tsx
fix("app/book/page.tsx", [
  ["Book Your Permanent Makeup Appointment — Blade Boutique, Randburg", "Book Your Permanent Makeup Appointment at Blade Boutique, Randburg"],
  ["Two ways — WhatsApp Sam directly with a few details, or browse open", "Two ways: WhatsApp Sam directly with a few details, or browse open"],
  ["WhatsApp form on the left — Sam responds within 2 hours", "WhatsApp form on the left. Sam responds within 2 hours"],
  ["Before you book — what you should know", "Before you book: what you should know"],
]);

// book/BookingForm.tsx
fix("app/book/BookingForm.tsx", [
  ["Not sure — recommend something", "Not sure, recommend something"],
  ["sending the message — nothing is sent automatically.", "sending the message. Nothing is sent automatically."],
]);

// contact/page.tsx
fix("app/contact/page.tsx", [
  ["Contact Blade Boutique — Visit, Call or WhatsApp (Bromhof, Randburg)", "Contact Blade Boutique: Visit, Call or WhatsApp (Bromhof, Randburg)"],
  ["The studio is inside Balance Wellness Centre in Bromhof, Randburg —", "The studio is inside Balance Wellness Centre in Bromhof, Randburg."],
]);

// pricing/page.tsx
fix("app/pricing/page.tsx", [
  ["Permanent Makeup Prices — Microblading, Lip Blush, Eyeliner (Randburg)", "Permanent Makeup Prices: Microblading, Lip Blush, Eyeliner (Randburg)"],
]);

// services/page.tsx
fix("app/services/page.tsx", [
  ["Permanent Makeup & Cosmetic Tattoo Services — Bromhof, Randburg", "Permanent Makeup & Cosmetic Tattoo Services at Bromhof, Randburg"],
  ["Every treatment Sam offers at Blade Boutique in Bromhof, Randburg — microblading", "Every treatment Sam offers at Blade Boutique in Bromhof, Randburg: microblading"],
  ["Three brow techniques for different skin types — microblading for dry skin, powder for oily, nano for a modern hair-stroke finish.", "Three brow techniques for different skin types: microblading for dry skin, powder for oily, nano for a modern hair-stroke finish."],
  ["Cosmetic freckle placement — fully customisable in density and colour.", "Cosmetic freckle placement, fully customisable in density and colour."],
  ["Brow lamination and lash lifting — two of Sam's most-booked treatments.", "Brow lamination and lash lifting, two of Sam's most-booked treatments."],
]);

// services/[slug]/page.tsx
fix("app/services/[slug]/page.tsx", [
  [`\${service.name} in Randburg & Johannesburg — \${priceLabel} at Blade Boutique`, `\${service.name} in Randburg & Johannesburg: \${priceLabel} at Blade Boutique`],
  ["`${service.name} — Blade Boutique, Randburg`", "`${service.name} at Blade Boutique, Randburg`"],
  ["Sam numbs thoroughly before and during the session. Most clients describe it as mild discomfort — similar to tweezing.", "Sam numbs thoroughly before and during the session. Most clients describe it as mild discomfort, similar to tweezing."],
]);

// microblading-johannesburg/page.tsx
fix("app/microblading-johannesburg/page.tsx", [
  ["Microblading Johannesburg — Natural Hair-Stroke Brows by Sam, from R2,500", "Microblading Johannesburg: Natural Hair-Stroke Brows by Sam, from R2,500"],
  ["Microblading in Johannesburg by Sam at Blade Boutique — Bromhof, Randburg.", "Microblading in Johannesburg by Sam at Blade Boutique, Bromhof, Randburg."],
  ["Microblading Johannesburg — Blade Boutique", "Microblading Johannesburg: Blade Boutique"],
  ["This is in line with specialist PMU pricing across Johannesburg — quality microblading in JHB ranges", "This is in line with specialist PMU pricing across Johannesburg. Quality microblading in JHB ranges"],
  ["via N1 or William Nicol — Sam will WhatsApp you", "via N1 or William Nicol. Sam will WhatsApp you"],
  ["On oily skin, strokes can blur faster — Sam will honestly recommend", "On oily skin, strokes can blur faster. Sam will honestly recommend"],
  ["Yes — when done by an artist trained in melanin-rich skin.", "Yes, when done by an artist trained in melanin-rich skin."],
  ["she replies within 2 hours during studio hours", "she replies within 2 hours during studio hours"],
  ["WhatsApp Sam on +27 72 411 1476 — she replies", "WhatsApp Sam on +27 72 411 1476. She replies"],
  ["Microblading in Johannesburg by Sam at Blade Boutique — a specialist PMU studio", "Microblading in Johannesburg by Sam at Blade Boutique, a specialist PMU studio"],
  ["Hand-drawn hair-stroke brows at Blade Boutique — Bromhof, Randburg.", "Hand-drawn hair-stroke brows at Blade Boutique, Bromhof, Randburg."],
  ["At Blade Boutique, Sam uses Permablend and Evenflo pigments —", "At Blade Boutique, Sam uses Permablend and Evenflo pigments,"],
  ["custom-mixed to match your undertone — and her specialty", "custom-mixed to match your undertone, and her specialty"],
  ["— they heal better than microblading on oilier skin.", "They heal better than microblading on oilier skin."],
  ["· 12+ years of full-time PMU practice — not a side hustle", "· 12+ years of full-time PMU practice, not a side hustle"],
  ["· Single-chair studio — no rushing, no double-booking", "· Single-chair studio. No rushing, no double-booking"],
  ["5.0 Google rating across 40+ reviews, plus Facebook reviews", "5.0 Google rating across 40+ reviews, plus Facebook reviews"],
  ["Bromhof, Randburg — 15 minutes from Sandton.", "Bromhof, Randburg. 15 minutes from Sandton."],
  ["Microblading in Johannesburg — frequently asked", "Microblading in Johannesburg: frequently asked"],
  ["Google rating 5.0 across 40+ reviews.", "5.0 Google stars across 40+ reviews."],
  ["Blade Boutique is a single-chair, specialist microblading studio inside Balance Wellness Centre at 8 Tin Road, Bromhof, Randburg. Sam has 12+ years of PMU experience, uses Permablend and Evenflo pigments, and specialises in hair-stroke brows for melanin-rich skin. 5.0 Google stars across 40+ reviews.", "Blade Boutique is a single-chair specialist microblading studio inside Balance Wellness Centre at 8 Tin Road, Bromhof, Randburg. Sam has 12+ years of PMU experience, uses Permablend and Evenflo pigments, and specialises in hair-stroke brows for melanin-rich skin. 5.0 Google stars across 40+ reviews."],
]);

// permanent-makeup-pretoria/page.tsx
fix("app/permanent-makeup-pretoria/page.tsx", [
  ["Permanent Makeup Pretoria — Microblading, Lip Blush & Dark Lip Neutralisation", "Permanent Makeup Pretoria: Microblading, Lip Blush and Dark Lip Neutralisation"],
  ["Permanent makeup for Pretoria clients by Sam at Blade Boutique — a 35-40 minute drive from central PTA.", "Permanent makeup for Pretoria clients by Sam at Blade Boutique, a 35-40 minute drive from central PTA."],
  ["Permanent Makeup Pretoria — Blade Boutique", "Permanent Makeup Pretoria: Blade Boutique"],
  ["Sam, permanent makeup artist at Blade Boutique — serving Pretoria clients", "Sam, permanent makeup artist at Blade Boutique, serving Pretoria clients"],
  ["Blade Boutique is in Bromhof, Randburg — a 35 to 40 minute drive from central Pretoria via the N1.", "Blade Boutique is in Bromhof, Randburg, a 35 to 40 minute drive from central Pretoria via the N1."],
  ["Yes — Sam blocks the full session length", "Yes. Sam blocks the full session length"],
  ["clients for over a decade. The studio is in Bromhof, Randburg — a", "clients for over a decade. The studio is in Bromhof, Randburg,"],
  ["35 to 40 minute drive from central PTA — and a steady stream of", "a 35 to 40 minute drive from central PTA. A steady stream of"],
  ["Specialist permanent makeup in Pretoria is thin on the ground —", "Specialist permanent makeup in Pretoria is thin on the ground."],
  ["· Specialist in dark lip neutralisation / lip hyperpigmentation treatment — uncommon in PTA", "· Specialist in dark lip neutralisation and lip hyperpigmentation treatment, uncommon in PTA"],
  ["5.0 Google rating across 40+ reviews, plus Facebook reviews", "5.0 Google stars across 40+ reviews, plus Facebook reviews"],
  ["8 Tin Road, Bromhof, Randburg. Easy in, easy out off the N1 — Sam", "8 Tin Road, Bromhof, Randburg. Easy in, easy out off the N1. Sam"],
  ["Permanent makeup Pretoria — frequently asked", "Permanent makeup Pretoria: frequently asked"],
  ["Google rating 5.0 across 40+ reviews.", "5.0 Google stars across 40+ reviews."],
]);

// lib/jsonld.ts
fix("lib/jsonld.ts", [
  ["Permanent makeup studio in Bromhof, Randburg — microblading, nano brows, powder brows, lip blush, dark lip neutralisation and eyeliner tattoo by Sam.", "Permanent makeup studio in Bromhof, Randburg. Microblading, nano brows, powder brows, lip blush, dark lip neutralisation and eyeliner tattoo by Sam."],
  ["Blade Boutique — Permanent Makeup Price List", "Blade Boutique: Permanent Makeup Price List"],
]);

// lib/services.ts
fix("lib/services.ts", [
  ["Eyebrow microblading — hair-stroke brows hand-drawn one stroke at a time.", "Eyebrow microblading: hair-stroke brows hand-drawn one stroke at a time."],
  ["Best for clients with sparse-to-medium brow density who want a soft, natural look that mimics real hair. Ideal for normal to dry skin — oily skin blurs strokes over time", "Best for clients with sparse-to-medium brow density who want a soft, natural look that mimics real hair. Ideal for normal to dry skin. Oily skin blurs strokes over time"],
  ["Machine-placed hair strokes finer than microblading — last longer, heal softer.", "Machine-placed hair strokes finer than microblading. Last longer, heal softer."],
  ["Powder or ombre brows — a soft, powdered finish.", "Powder or ombre brows: a soft, powdered finish."],
  ["Lip hyperpigmentation treatment — brings naturally dark or unevenly pigmented lips to a soft, even rosy tone.", "Lip hyperpigmentation treatment that brings naturally dark or unevenly pigmented lips to a soft, even rosy tone."],
  ["A fine, precise lash line — like the perfect liner you'd never have to redo.", "A fine, precise lash line, like the perfect liner you'd never have to redo."],
  ["Pigment placed between your lashes — fuller, defined lashes, no makeup.", "Pigment placed between your lashes for fuller, defined lashes without makeup."],
  ["Lash enhancement places fine pigment in the spaces between your lashes for a fuller, denser-looking lash line — without any visible liner above the lash line.", "Lash enhancement places fine pigment in the spaces between your lashes for a fuller, denser-looking lash line, without any visible liner above the lash line."],
  ["Natural-looking cosmetic freckles placed by hand — scatter pattern, your choice of density.", "Natural-looking cosmetic freckles placed by hand. Scatter pattern, your choice of density."],
  ["Fully customisable — density, colour and placement are mapped", "Fully customisable: density, colour and placement are mapped"],
  ["Brow lamination — sets your natural brows upward for a lifted, fuller shape.", "Brow lamination that sets your natural brows upward for a lifted, fuller shape."],
  ["uniform, upward direction — fuller, neater, instantly lifted.", "uniform, upward direction. Fuller, neater, instantly lifted."],
  ["Lash lift and tint — curls your natural lashes from the root.", "Lash lift and tint that curls your natural lashes from the root."],
  ["Small, fine line and minimalist tattoos — priced by design and size.", "Small, fine line and minimalist tattoos, priced by design and size."],
  ["Sam's tattooing style is clean, delicate and considered — ideal for small script", "Sam's tattooing style is clean, delicate and considered, ideal for small script"],
]);

// lib/supabase/server.ts — this one is a code comment, leave it
// (skip)

console.log("\nAll done.");
