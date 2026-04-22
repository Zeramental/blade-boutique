import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { FAQ } from "@/components/FAQ";
import { MapEmbed } from "@/components/MapEmbed";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FreshaButton } from "@/components/FreshaButton";
import { getService, SERVICES } from "@/lib/services";
import { STUDIO } from "@/lib/studio";
import {
  jsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title:
    "Microblading Johannesburg: Natural Hair-Stroke Brows by Sam, from R2,500",
  description:
    "Microblading in Johannesburg by Sam at Blade Boutique, Bromhof, Randburg. 12+ years, Permablend and Evenflo pigments, specialist in PMU for melanin-rich skin. Serving Sandton, Fourways, Northriding, Rosebank and surrounds. From R2,500, perfection session included.",
  alternates: { canonical: "/microblading-johannesburg" },
  keywords: [
    "microblading johannesburg",
    "microblading jhb",
    "microblading near me",
    "eyebrow microblading johannesburg",
    "eyebrow tattoo johannesburg",
    "hair stroke brows johannesburg",
    "semi permanent brows johannesburg",
    "microblading sandton",
    "microblading randburg",
    "microblading fourways",
    "microblading rosebank",
    "microblading northriding",
  ],
  openGraph: {
    title: "Microblading Johannesburg: Blade Boutique",
    description:
      "Microblading in Johannesburg by Sam. 12+ years, Permablend pigments, perfection session included. From R2,500.",
    url: `${STUDIO.url}/microblading-johannesburg`,
    images: [
      { url: "/images/blade/gallery-brows-1.jpg", alt: "Microblading result by Sam at Blade Boutique, Johannesburg" },
    ],
  },
};

const FAQ_ITEMS = [
  {
    q: "Where is the best microblading studio in Johannesburg?",
    a: "Blade Boutique is a single-chair specialist microblading studio inside Balance Wellness Centre at 8 Tin Road, Bromhof, Randburg. Sam has 12+ years of PMU experience, uses Permablend and Evenflo pigments, and specialises in hair-stroke brows for melanin-rich skin. 5.0 Google stars across 40+ reviews.",
  },
  {
    q: "How much does microblading cost in Johannesburg?",
    a: "Microblading at Blade Boutique is R2,500 and includes the perfection session within 4 weeks of your first treatment. Annual colour boosts are R1,100 (under 12 months) or R1,800 (12-16 months). This is in line with specialist PMU pricing across Johannesburg. Quality microblading in JHB ranges from R2,000 to R4,500 depending on artist experience and pigment brand.",
  },
  {
    q: "How do I get to Blade Boutique from Sandton, Fourways or Rosebank?",
    a: "Bromhof is a 10-15 minute drive from Sandton, 8-12 minutes from Fourways, and 15-20 minutes from Rosebank. Free parking is available at Balance Wellness Centre. The studio is easiest to reach via N1 or William Nicol. Sam will WhatsApp you a pin drop when you confirm your booking.",
  },
  {
    q: "How long does microblading last on different skin types?",
    a: "On normal to dry skin, microblading typically holds crisp for 12-18 months before a colour boost is ideal. On oily skin, strokes can blur faster. Sam will honestly recommend nano brows or powder brows if your skin type will heal better that way. This is a question to ask on your WhatsApp consultation.",
  },
  {
    q: "Is microblading safe on black or darker skin tones?",
    a: "Yes, when done by an artist trained in melanin-rich skin. Sam's biggest client demographic is ethnic women aged 28-45. Both Permablend and Evenflo pigment ranges include shades developed specifically for deeper skin tones, and Sam custom-mixes every session to match your natural undertone without healing cool or ashy.",
  },
  {
    q: "How soon can I book microblading in Johannesburg?",
    a: "WhatsApp Sam on +27 72 411 1476. She replies within 2 hours during studio hours (Mon-Fri 09:00-17:00, Sat 09:00-14:00). A small deposit secures your slot.",
  },
];

export default function MicrobladingJohannesburgPage() {
  const microblading = getService("microblading")!;
  const nano = getService("nano-brows")!;
  const powder = getService("powder-brows")!;
  const relatedBrows = [microblading, nano, powder];

  const graph = [
    serviceSchema({
      ...microblading,
      name: "Microblading Johannesburg",
      longDescription:
        "Microblading in Johannesburg by Sam at Blade Boutique, a specialist PMU studio in Bromhof, Randburg. Hand-drawn hair-stroke brows using Permablend and Evenflo pigments, custom-mixed for your skin tone. Twelve years of experience, perfection session included. Serving Sandton, Fourways, Northriding, Rosebank, Randburg and the wider Johannesburg metro.",
    }),
    faqSchema(FAQ_ITEMS),
    breadcrumbSchema([
      { name: "Home", url: STUDIO.url },
      { name: "Microblading Johannesburg", url: `${STUDIO.url}/microblading-johannesburg` },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />

      <section className="bb-container py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="bb-eyebrow mb-3">Microblading · Johannesburg</p>
          <h1 className="bb-display-lg mb-6">
            Microblading in Johannesburg, by Sam.
          </h1>
          <p className="bb-body-lg mb-4 max-w-[45ch]">
            Hand-drawn hair-stroke brows at Blade Boutique, Bromhof, Randburg.
            Twelve years in, specialist in melanin-rich skin, Permablend and
            Evenflo pigments. One chair, one client at a time.
          </p>
          <p className="bb-meta text-bb-ink-mute mb-8">
            Serving Sandton, Fourways, Northriding, Rosebank, Randburg and the
            wider Johannesburg metro. From R2,500 · perfection session included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton
              context={{ context: "service", service: "Microblading Johannesburg", slug: "microblading", price: "R2,500" }}
              size="lg"
              label="Book microblading on WhatsApp"
            />
            <FreshaButton size="lg" />
          </div>
        </div>
        <div className="aspect-[4/5] rounded-[20px] bg-gradient-to-br from-bb-clay-soft to-bb-line border border-bb-line" />
      </section>

      <TrustStrip />

      <section className="bb-container py-20 md:py-28 max-w-3xl">
        <h2 className="bb-display-md mb-6">
          What microblading is, in plain English
        </h2>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-6">
          Microblading is a semi-permanent brow technique where fine pigment is
          placed into the upper layers of skin in hair-stroke patterns, using a
          hand-held blade of ultra-fine needles. The result is natural,
          feathery brows that look like your own hair. Nothing drawn on. No
          block shape. Pigment fades gently over 12 to 18 months and is
          refreshed with a colour boost.
        </p>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-6">
          At Blade Boutique, Sam uses Permablend and Evenflo pigments,
          custom-mixed to match your undertone, and her specialty is work that
          heals true to tone on melanin-rich skin. If your skin is oily or
          mature, she will honestly recommend <Link href="/services/nano-brows" className="text-bb-clay hover:text-bb-clay-deep">nano brows</Link> or{" "}
          <Link href="/services/powder-brows" className="text-bb-clay hover:text-bb-clay-deep">powder brows</Link>{" "}
          They heal better than microblading on oilier skin.
        </p>

        <h2 className="bb-display-md mb-6 mt-12">
          Why clients travel across Johannesburg for Sam
        </h2>
        <ul className="space-y-3 text-bb-ink-soft text-lg leading-relaxed mb-6">
          <li>· 12+ years of full-time PMU practice, not a side hustle</li>
          <li>· PhiBrows-trained, specialist in lip neutralisation for melanin-rich skin</li>
          <li>· Single-chair studio. No rushing, no double-booking</li>
          <li>· Premium Permablend + Evenflo pigments, not budget alternatives</li>
          <li>· 5.0 Google rating across 40+ reviews, plus Facebook reviews</li>
          <li>· Perfection session within 4 weeks always included in the price</li>
        </ul>
      </section>

      <section className="bg-bb-surface-alt py-20 md:py-28">
        <div className="bb-container">
          <p className="bb-eyebrow mb-3">Brow options at Blade Boutique</p>
          <h2 className="bb-display-md mb-12 max-w-[22ch]">
            The right brow technique for your skin.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBrows.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bb-container py-20 md:py-28">
        <p className="bb-eyebrow mb-3">Location</p>
        <h2 className="bb-display-md mb-6 max-w-[22ch]">
          Bromhof, Randburg. 15 minutes from Sandton.
        </h2>
        <p className="text-bb-ink-soft text-lg leading-relaxed max-w-[58ch] mb-10">
          The studio is inside <strong>Balance Wellness Centre, 8 Tin Road,
          Bromhof, Randburg</strong>. Easy parking, single-chair, calm room.
          Quick off the N1 or via William Nicol from Sandton, Fourways and
          Rosebank.
        </p>
        <MapEmbed />
      </section>

      <section className="bb-container py-20 md:py-28 max-w-3xl">
        <h2 className="bb-display-md mb-12">
          Microblading in Johannesburg: frequently asked
        </h2>
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="bg-bb-ink py-20 md:py-28">
        <div className="bb-container text-center">
          <h2 className="bb-display-md text-bb-bg mb-8 max-w-[22ch] mx-auto">
            Ready to book microblading in Johannesburg?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              context={{ context: "service", service: "Microblading Johannesburg", slug: "microblading", price: "R2,500" }}
              size="lg"
            />
            <FreshaButton size="lg" />
          </div>
          <p className="bb-meta text-bb-bg-mute mt-6 opacity-70">
            See{" "}
            <Link href="/pricing" className="underline">
              full price list
            </Link>{" "}
            ·{" "}
            <Link href="/services/microblading" className="underline">
              detailed microblading page
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
