import Link from "next/link";
import { SERVICES, SERVICE_CATEGORIES, CATEGORY_ORDER, type ServiceCategory } from "@/lib/services";

export function PriceTable() {
  return (
    <div className="space-y-14">
      {CATEGORY_ORDER.map((cat: ServiceCategory) => {
        const items = SERVICES.filter((s) => s.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat}>
            <p className="bb-eyebrow mb-4">{SERVICE_CATEGORIES[cat]}</p>
            <ul>
              {items.map((s) => (
                <li
                  key={s.slug}
                  className="flex items-start justify-between gap-4 py-5 border-b border-bb-line"
                >
                  <div className="min-w-0">
                    <h3 className="bb-display-sm">{s.name}</h3>
                    <p className="bb-meta text-bb-ink-mute mt-1">
                      {s.durationLabel}
                    </p>
                    {s.touchUpLabel && (
                      <p className="bb-meta text-bb-ink-mute mt-1">
                        {s.touchUpLabel}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-6 flex-shrink-0">
                    <span className="bb-meta text-bb-ink whitespace-nowrap font-medium">
                      {s.fromPriceLabel}
                    </span>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-bb-clay hover:text-bb-clay-deep text-sm font-medium whitespace-nowrap"
                    >
                      Details →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      <div className="bg-bb-surface-alt rounded-[12px] p-6 md:p-8 space-y-4">
        <div>
          <p className="bb-eyebrow mb-2">Perfection session</p>
          <p className="text-bb-ink leading-relaxed">
            All PMU prices include <strong>one perfection session</strong> within{" "}
            <strong>4 weeks</strong> of your first treatment. Missed follow-ups will be charged.
          </p>
        </div>
        <div>
          <p className="bb-eyebrow mb-2">Touch-ups over 12 months</p>
          <p className="text-bb-ink leading-relaxed">
            Touch-ups between <strong>12 and 16 months</strong>: R1,800. After 16 months, a fresh
            session is priced as new.
          </p>
        </div>
        <div>
          <p className="bb-eyebrow mb-2">Tattoos</p>
          <p className="text-bb-ink leading-relaxed">
            Most tattoos are priced by design and size. Kindly book a consultation with Sam
            for a detailed quote.
          </p>
        </div>
      </div>

      <p className="bb-meta text-bb-ink-mute italic">
        Pricing current as at April 2026. All sessions include numbing, an aftercare kit, and the perfection session noted above.
      </p>
    </div>
  );
}
