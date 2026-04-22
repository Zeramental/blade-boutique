import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { FAQ } from "@/components/FAQ";
import { MapEmbed } from "@/components/MapEmbed";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FreshaButton } from "@/components/FreshaButton";
import { getService } from "@/lib/services";
import { STUDIO } from "@/lib/studio";
import {
  jsonLd,
  faqSchema,
  breadcrumbSchema,
  localBusinessSchema,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title:
    "Permanent Makeup Pretoria: Microblading, Lip Blush and Dark Lip Neutralisation",
  description:
    "Permanent makeup for Pretoria clients by Sam at Blade Boutique, a 35-40 minute drive from central PTA. Microblading, nano brows, lip blush and dark lip neutralisation. 12+ years, Permablend + Evenflo pigments, specialist in PMU for melanin-rich skin. From R2,000.",
  alternates: { canonical: "/permanent-makeup-pretoria" },
  keywords: [
    "permanent makeup pretoria",
    "microblading pretoria",
    "lip blush pretoria",
    "eyebrow tattoo pretoria",
    "pmu pretoria",
    "dark lip neutralisation pretoria",
    "permanent makeup near pretoria",
    "cosmetic tattoo pretoria",
    "nano brows pretoria",
    "lip hyperpigmentation treatment pretoria",
  ],
  openGraph: {
    title: "Permanent Makeup Pretoria: Blade Boutique",
    description:
      "PMU for Pretoria clients at Blade Boutique, Randburg. 35-40 min from central PTA. Microblading, lip blush, dark lip neutralisation.",
    url: `${STUDIO.url}/permanent-makeup-pretoria`,
    images: [
      { url: "/images/blade/sam-portrait.jpg", alt: "Sam, permanent makeup artist at Blade Boutique, serving Pretoria clients" },
    ],
  },
};

const FAQ_ITEMS = [
  {
    q: "Is there a specialist permanent makeup studio between Pretoria and Johannesburg?",
    a: "Yes. Blade Boutique is in Bromhof, Randburg, a 35 to 40 minute drive from central Pretoria via the N1. Sam has 12+ years of PMU experience and a steady client base travelling from Pretoria every week for microblading, lip blush and dark lip neutralisation. 5.0 Google stars across 40+ reviews.",
  },
  {
    q: "How long is the drive from Pretoria to Blade Boutique?",
    a: "Central Pretoria to Blade Boutique (8 Tin Road, Bromhof) is approximately 35-40 minutes via the N1 outside of peak hours. Centurion is 25-30 minutes. Free parking on site at Balance Wellness Centre.",
  },
  {
    q: "Can the same session handle both PMU and a touch-up if I travel from Pretoria?",
    a: "Yes. Sam blocks the full session length whether you are coming from Bromhof or Centurion. Plan for 1 hour 30 minutes to 2 hours max in studio. Book via WhatsApp and mention you're travelling from PTA so Sam can stack your perfection session efficiently.",
  },
  {
    q: "Do you do dark lip neutralisation for Pretoria clients?",
    a: "Yes. Dark lip neutralisation (also called lip hyperpigmentation treatment) is one of Sam's most-booked specialities and one of the few studios offering it to this standard in the JHB/PTA corridor. Most clients benefit from 2-3 sessions for the deepest softening; a first session delivers visible results. R2,800 per session.",
  },
  {
    q: "How much does permanent makeup cost in Pretoria?",
    a: "At Blade Boutique: microblading and powder brows from R2,500, nano brows from R2,800, lip blush from R2,500, dark lip neutralisation from R2,800, eyeliner tattoo from R2,000. All PMU prices include a perfection session within 4 weeks. See the full price list for annual touch-ups and add-ons.",
  },
  {
    q: "What's the best time to book if I'm driving from Pretoria?",
    a: "Saturday mornings (09:00-14:00) and mid-morning weekday slots avoid peak N1 traffic in both directions. WhatsApp Sam on +27 72 411 1476 and she'll suggest slots that fit your drive.",
  },
];

export default function PermanentMakeupPretoriaPage() {
  const microblading = getService("microblading")!;
  const lipBlush = getService("lip-blush")!;
  const darkLip = getService("dark-lip-neutralisation")!;
  const featured = [microblading, lipBlush, darkLip];

  const graph = [
    localBusinessSchema(),
    faqSchema(FAQ_ITEMS),
    breadcrumbSchema([
      { name: "Home", url: STUDIO.url },
      { name: "Permanent Makeup Pretoria", url: `${STUDIO.url}/permanent-makeup-pretoria` },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />

      <section className="bb-container py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="bb-eyebrow mb-3">Permanent Makeup · Pretoria</p>
          <h1 className="bb-display-lg mb-6">
            Permanent makeup for Pretoria clients, 40 minutes from the city.
          </h1>
          <p className="bb-body-lg mb-4 max-w-[45ch]">
            Sam at Blade Boutique has been doing permanent makeup for Pretoria
            clients for over a decade. The studio is in Bromhof, Randburg,
            a 35 to 40 minute drive from central PTA. A steady stream of
            clients drive down every week.
          </p>
          <p className="bb-meta text-bb-ink-mute mb-8">
            Microblading, nano brows, lip blush, dark lip neutralisation,
            eyeliner. Permablend + Evenflo pigments, perfection session
            included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton
              context={{ context: "hero" }}
              size="lg"
              label="Book from Pretoria on WhatsApp"
            />
            <FreshaButton size="lg" />
          </div>
        </div>
        <div className="aspect-[4/5] rounded-[20px] bg-gradient-to-br from-bb-clay-soft to-bb-line border border-bb-line" />
      </section>

      <TrustStrip />

      <section className="bb-container py-20 md:py-28 max-w-3xl">
        <h2 className="bb-display-md mb-6">
          Why Pretoria clients drive down to Blade Boutique
        </h2>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-6">
          Specialist permanent makeup in Pretoria is thin on the ground.
          particularly if you&rsquo;re looking for melanin-rich skin
          specialism, Permablend/Evenflo pigment work, or dark lip
          neutralisation. Sam has 12+ years of full-time PMU practice and a
          reputation built entirely on word of mouth across the JHB-PTA
          corridor.
        </p>
        <ul className="space-y-3 text-bb-ink-soft text-lg leading-relaxed mb-10">
          <li>· Specialist in dark lip neutralisation and lip hyperpigmentation treatment, uncommon in PTA</li>
          <li>· 12+ years of full-time PMU, not a side hustle</li>
          <li>· Single-chair studio, no rushing, no double-booking</li>
          <li>· Premium Permablend + Evenflo pigments, custom-mixed for your undertone</li>
          <li>· 5.0 Google stars across 40+ reviews, plus Facebook reviews</li>
          <li>· Perfection session within 4 weeks always included</li>
        </ul>

        <h2 className="bb-display-md mb-6">What's the drive like?</h2>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-4">
          From <strong>central Pretoria</strong>: ~35-40 minutes via N1 off-peak.
        </p>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-4">
          From <strong>Centurion</strong>: ~25-30 minutes.
        </p>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-4">
          From <strong>Midrand</strong>: ~20-25 minutes.
        </p>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-10">
          Free parking on site at Balance Wellness Centre. Saturday mornings
          and mid-morning weekday slots work best for PTA drives.
        </p>
      </section>

      <section className="bg-bb-surface-alt py-20 md:py-28">
        <div className="bb-container">
          <p className="bb-eyebrow mb-3">Most-booked by PTA clients</p>
          <h2 className="bb-display-md mb-12 max-w-[22ch]">
            The treatments Pretoria clients come in for.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-bb-clay hover:text-bb-clay-deep font-medium"
            >
              See all treatments →
            </Link>
          </div>
        </div>
      </section>

      <section className="bb-container py-20 md:py-28">
        <p className="bb-eyebrow mb-3">Location</p>
        <h2 className="bb-display-md mb-6 max-w-[26ch]">
          Balance Wellness Centre, Bromhof, Randburg.
        </h2>
        <p className="text-bb-ink-soft text-lg leading-relaxed max-w-[58ch] mb-10">
          8 Tin Road, Bromhof, Randburg. Easy in, easy out off the N1. Sam
          will WhatsApp you a pin drop once your booking is confirmed.
        </p>
        <MapEmbed />
      </section>

      <section className="bb-container py-20 md:py-28 max-w-3xl">
        <h2 className="bb-display-md mb-12">
          Permanent makeup Pretoria: frequently asked
        </h2>
        <FAQ items={FAQ_ITEMS} />
      </section>

      <section className="bg-bb-ink py-20 md:py-28">
        <div className="bb-container text-center">
          <h2 className="bb-display-md text-bb-bg mb-8 max-w-[24ch] mx-auto">
            Ready to drive down?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton context={{ context: "hero" }} size="lg" />
            <FreshaButton size="lg" />
          </div>
          <p className="bb-meta mt-6 opacity-70 text-bb-bg">
            See{" "}
            <Link href="/pricing" className="underline">
              full price list
            </Link>{" "}
            ·{" "}
            <Link href="/services" className="underline">
              all services
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
