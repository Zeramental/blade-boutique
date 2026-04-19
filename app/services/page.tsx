import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES, SERVICE_CATEGORIES, type ServiceCategory } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Permanent Makeup in Bromhof, Randburg",
  description:
    "Microblading, powder brows, combo brows, lip blush, eyeliner and lash enhancement by Sam in Bromhof, Randburg. Honestly natural permanent makeup.",
};

export default function ServicesPage() {
  const categories: ServiceCategory[] = ["brows", "lips", "eyes"];

  return (
    <div className="bb-container py-16 md:py-24">
      <p className="bb-eyebrow mb-3">Treatments</p>
      <h1 className="bb-display-lg mb-6 max-w-[20ch]">
        Permanent makeup, by treatment.
      </h1>
      <p className="bb-body-lg max-w-[55ch] mb-16">
        Seven treatments, all done by Sam in a single-chair Bromhof studio. Pick
        the one you came for, or message me if you&rsquo;re not sure where to
        start.
      </p>

      <div className="space-y-20">
        {categories.map((cat) => {
          const items = SERVICES.filter((s) => s.category === cat);
          return (
            <section key={cat}>
              <h2 className="bb-display-md mb-8">{SERVICE_CATEGORIES[cat]}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
