import Link from "next/link";
import { SERVICES, SERVICE_CATEGORIES, type ServiceCategory } from "@/lib/services";

export function PriceTable() {
  const categories: ServiceCategory[] = ["brows", "lips", "eyes"];

  return (
    <div className="space-y-12">
      {categories.map((cat) => {
        const items = SERVICES.filter((s) => s.category === cat);
        return (
          <div key={cat}>
            <p className="bb-eyebrow mb-4">{SERVICE_CATEGORIES[cat]}</p>
            <ul>
              {items.map((s) => (
                <li
                  key={s.slug}
                  className="flex items-center justify-between gap-4 py-5 border-b border-bb-line"
                >
                  <div>
                    <h3 className="bb-display-sm">{s.name}</h3>
                    <p className="bb-meta text-bb-ink-mute mt-1">
                      {s.durationLabel}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="bb-meta text-bb-ink whitespace-nowrap">
                      {s.fromPriceLabel}
                    </span>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-bb-clay hover:text-bb-clay-deep text-sm font-medium whitespace-nowrap"
                    >
                      Book →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      <div className="bg-bb-surface-alt rounded-[12px] p-6 md:p-8">
        <p className="bb-eyebrow mb-2">Touch-ups</p>
        <p className="text-bb-ink mb-1">
          First touch-up (4-8 weeks): <strong>Included</strong> with all treatments
        </p>
        <p className="text-bb-ink">Annual colour boost: From R1,500</p>
      </div>

      <p className="bb-meta text-bb-ink-mute italic">
        All prices include numbing, an aftercare kit, and one touch-up at 4-8
        weeks. R500 booking deposit secures your slot — applied to the final
        price on the day. Refundable up to 48 hours before your appointment.
      </p>
    </div>
  );
}
