import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-bb-surface rounded-[20px] border border-bb-line overflow-hidden hover:-translate-y-0.5 transition-transform duration-200"
    >
      <div className="aspect-[16/9] bg-bb-surface-alt overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-bb-clay-soft to-bb-line group-hover:scale-[1.04] transition-transform duration-300" />
      </div>
      <div className="p-6 md:p-8">
        <p className="bb-eyebrow mb-2">{service.category}</p>
        <h3 className="bb-display-sm mb-2">{service.name}</h3>
        <p className="text-bb-ink-soft text-[15px] mb-4 line-clamp-2">
          {service.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <p className="bb-meta">{service.fromPriceLabel}</p>
          <span className="text-bb-clay text-xl group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
