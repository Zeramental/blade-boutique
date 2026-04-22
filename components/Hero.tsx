import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";
import { FreshaButton } from "./FreshaButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background: cream base + pink radial glow */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 15% 40%, rgba(170,64,167,0.08) 0%, transparent 60%), linear-gradient(135deg, #F2ECE3 0%, #FAF7F2 55%, #F7F0F7 100%)",
        }}
      />
      {/* Subtle pink arc top-right */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #AA40A7, transparent 70%)" }}
      />

      <div className="relative bb-container py-20 md:py-28 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 max-w-2xl">
          <p className="bb-eyebrow mb-6">
            Permanent Makeup · Bromhof, Randburg · Johannesburg
          </p>
          <h1 className="bb-display-xl mb-8 max-w-[18ch]">
            Brows you wake up{" "}
            <span
              className="italic"
              style={{ color: "var(--color-bb-pink)" }}
            >
              loving.
            </span>
          </h1>
          <p className="bb-body-lg max-w-[44ch] mb-6">
            Meticulous permanent makeup by Sam: microblading, nano brows, lip
            blush and dark lip neutralisation. Twelve years in, specialist in
            PMU for melanin-rich skin.
          </p>
          <p className="bb-meta mb-10 max-w-[44ch]">
            Permablend + Evenflo pigments · One chair, one client · From R2,000
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <WhatsAppButton context={{ context: "hero" }} size="lg" />
            <FreshaButton size="lg" />
          </div>

          {/* Trust micro-row */}
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-sm text-bb-ink-soft">
              <span style={{ color: "var(--color-bb-pink)" }}>★★★★★</span>
              <span className="font-semibold text-bb-ink">5.0</span> Google
            </span>
            <span className="text-bb-line" aria-hidden="true">·</span>
            <span className="text-sm text-bb-ink-soft">40+ reviews</span>
            <span className="text-bb-line" aria-hidden="true">·</span>
            <span className="text-sm text-bb-ink-soft">12+ years</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-bb-line"
            style={{
              boxShadow:
                "0 40px 80px -20px rgba(31,27,23,0.25), 0 0 0 1px rgba(170,64,167,0.08)",
            }}
          >
            <Image
              src="/images/blade/hero-brow-mapping.png"
              alt="Sam mapping brows before a microblading session at Blade Boutique in Bromhof, Randburg"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
            {/* Pink overlay shimmer at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(170,64,167,0.12), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
