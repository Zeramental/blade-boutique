import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import {
  SERVICES,
  SERVICE_CATEGORIES,
  CATEGORY_ORDER,
  type ServiceCategory,
} from "@/lib/services";
import { STUDIO } from "@/lib/studio";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Permanent Makeup & Cosmetic Tattoo Services at Bromhof, Randburg",
  description:
    "Every treatment Sam offers at Blade Boutique in Bromhof, Randburg: microblading, nano brows, powder brows, lip blush, dark lip neutralisation, eyeliner, freckles, brow lamination, lash lift and fine line tattoos.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: STUDIO.url },
    { name: "Services", url: `${STUDIO.url}/services` },
  ]);

  return (
    <div className="bb-container py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbs)} />
      <p className="bb-eyebrow mb-3">Treatments</p>
      <h1 className="bb-display-lg mb-6 max-w-[20ch]">
        Permanent makeup, by treatment.
      </h1>
      <p className="bb-body-lg max-w-[58ch] mb-16">
        Eleven treatments, all done by Sam in a single-chair Bromhof studio at
        Balance Wellness Centre. PMU sessions use Permablend and Evenflo
        pigments, custom-mixed to your undertone. Pick the one you came for,
        or message Sam on WhatsApp if you&rsquo;re unsure where to start.
      </p>

      <div className="space-y-20">
        {CATEGORY_ORDER.map((cat: ServiceCategory) => {
          const items = SERVICES.filter((s) => s.category === cat);
          if (items.length === 0) return null;
          return (
            <section key={cat} id={cat}>
              <h2 className="bb-display-md mb-3">{SERVICE_CATEGORIES[cat]}</h2>
              <p className="bb-meta text-bb-ink-mute mb-8">
                {categoryBlurb(cat)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-24 text-center">
        <h2 className="bb-display-md mb-6">Not sure which treatment you need?</h2>
        <p className="bb-body-lg max-w-[50ch] mx-auto mb-8">
          Send Sam a WhatsApp with a photo and a sentence about what
          you&rsquo;re after. She&rsquo;ll tell you honestly which treatment
          will heal best on your skin.
        </p>
        <div className="flex justify-center">
          <WhatsAppButton context={{ context: "hero" }} size="lg" label="Ask Sam on WhatsApp" />
        </div>
        <p className="bb-meta text-bb-ink-mute mt-10">
          See the full{" "}
          <Link href="/pricing" className="text-bb-clay hover:text-bb-clay-deep">
            price list
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function categoryBlurb(cat: ServiceCategory): string {
  switch (cat) {
    case "brows":
      return "Three brow techniques for different skin types: microblading for dry skin, powder for oily, nano for a modern hair-stroke finish.";
    case "lips":
      return "Soft blushed lip colour and specialist dark lip neutralisation for hyperpigmented lips.";
    case "eyes":
      return "Defined lash lines, from an invisible enhancement to a full liner shape.";
    case "face":
      return "Cosmetic freckle placement, fully customisable in density and colour.";
    case "addons":
      return "Brow lamination and lash lifting, two of Sam's most-booked treatments. Perfect if you're not ready for permanent work yet.";
    case "tattoos":
      return "Fine line and small-piece tattoos, priced by design. Full-day sessions available.";
  }
}
