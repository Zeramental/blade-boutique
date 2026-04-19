import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-bb-surface rounded-[20px] border border-bb-line overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-bb-pink/30"
      style={{ "--shadow-hover": "0 20px 40px -10px rgba(170,64,167,0.12)" } as React.CSSProperties}
    >
      <div className="aspect-[16/9] bg-bb-surface-alt overflow-hidden relative">
        <Image
          src={service.image}
          alt={`${service.name} by Sam at Blade Boutique`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
        />
        {/* Pink shimmer on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(170,64,167,0.08) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="p-6 md:p-7">
        <p className="bb-eyebrow mb-2">{service.category}</p>
        <h3 className="font-display text-xl font-medium mb-2 group-hover:text-bb-pink transition-colors duration-200" style={{ fontFamily: "var(--font-display)" }}>{service.name}</h3>
        <p className="text-bb-ink-soft text-[15px] mb-5 line-clamp-2 leading-relaxed">
          {service.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold" style={{ color: "var(--color-bb-pink)" }}>
            {service.fromPriceLabel}
          </p>
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 group-hover:translate-x-0.5"
            style={{
              background: "rgba(170,64,167,0.08)",
              color: "var(--color-bb-pink)",
            }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
