import type { Metadata } from "next";
import { PriceTable } from "@/components/PriceTable";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  jsonLd,
  priceListSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/jsonld";
import { STUDIO } from "@/lib/studio";
import { PageViewTracker } from "@/components/PageViewTracker";

export const metadata: Metadata = {
  title: "Permanent Makeup Prices Johannesburg 2026 | Blade Boutique Fourways",
  description:
    "Full Blade Boutique price list. Microblading R2,500 · Nano brows R2,800 · Powder brows R2,500 · Lip blush R2,500 · Dark lip neutralisation R2,800 · Eyeliner R2,000. All PMU prices include a perfection session.",
  alternates: { canonical: "/pricing" },
};

const PRICING_FAQ = [
  {
    q: "How much does microblading cost in Johannesburg?",
    a: "At Blade Boutique in Fourways, Johannesburg, microblading is R2,500 for the full session, with a R1,100 touch-up under 12 months. The price includes a perfection session within 4 weeks of your first treatment.",
  },
  {
    q: "How much is lip blush in South Africa?",
    a: "Lip blush at Blade Boutique is R2,500. Dark lip neutralisation, which is a layered treatment for hyperpigmented lips, is R2,800. Both include a perfection session within 4 weeks.",
  },
  {
    q: "Are touch-ups included in the price?",
    a: "Yes. Every PMU price at Blade Boutique includes one perfection session within 4 weeks of your initial treatment. Additional touch-ups under 12 months are R1,100 (R1,000 for eye services), and between 12-16 months they are R1,800.",
  },
  {
    q: "How much does eyeliner tattoo cost?",
    a: "Permanent eyeliner and lash enhancement are both R2,000 at Blade Boutique. Touch-ups under 12 months are R1,000.",
  },
  {
    q: "Do you offer tattoos as well as permanent makeup?",
    a: "Yes. Fine line tattoos start at R500 and are priced by design and size. Full-day sessions are R4,000. Book a consultation with Sam for a detailed quote on your piece.",
  },
];

export default function PricingPage() {
  const graph = [
    priceListSchema(),
    faqSchema(PRICING_FAQ),
    breadcrumbSchema([
      { name: "Home", url: STUDIO.url },
      { name: "Pricing", url: `${STUDIO.url}/pricing` },
    ]),
  ];

  return (
    <div className="bb-container py-16 md:py-24 max-w-3xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />
      <PageViewTracker event="pricing_view" params={{ event_category: "engagement" }} />
      <p className="bb-eyebrow mb-3">Pricing</p>
      <h1 className="bb-display-lg mb-6">Honest, transparent prices.</h1>
      <p className="bb-body-lg mb-16">
        No &ldquo;POA&rdquo; pricing, no quote-on-request. Here&rsquo;s every PMU
        treatment Sam offers with the real price. Sessions include numbing, an
        aftercare kit, and a perfection session within 4 weeks.
      </p>

      <PriceTable />

      <div className="mt-12 rounded-2xl bg-bb-surface-alt border border-bb-line px-8 py-8 text-center">
        <p className="bb-display-sm mb-2">Questions about any of these prices?</p>
        <p className="text-bb-ink-soft mb-6 text-sm leading-relaxed">
          Chat with Sam directly on WhatsApp. She&rsquo;ll answer quickly and there&rsquo;s no obligation to book.
        </p>
        <WhatsAppButton
          context={{ context: "generic", message: "Hi Sam, I have a question about your pricing. Sent from bladeboutique.co.za/pricing" }}
          label="Chat with Sam about pricing"
          size="lg"
        />
      </div>

      <section className="mt-20">
        <h2 className="bb-display-md mb-8">Common questions about pricing</h2>
        <div className="space-y-8">
          {PRICING_FAQ.map((item) => (
            <div key={item.q}>
              <h3 className="bb-display-sm mb-2">{item.q}</h3>
              <p className="text-bb-ink-soft leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-20 text-center">
        <WhatsAppButton context={{ context: "hero" }} size="lg" />
      </div>
    </div>
  );
}
