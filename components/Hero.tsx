import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";
import { FreshaButton } from "./FreshaButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-bb-clay-soft via-bb-surface-alt to-bb-bg"
        aria-hidden="true"
      />
      <div className="relative bb-container py-20 md:py-28 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 max-w-2xl">
          <p className="bb-eyebrow mb-6">
            Permanent Makeup · Bromhof, Johannesburg
          </p>
          <h1 className="bb-display-xl mb-8 max-w-[18ch]">
            Brows you wake up loving.
          </h1>
          <p className="bb-body-lg max-w-[40ch] mb-10">
            Honestly natural permanent makeup by Sam — meticulous, precise,
            healed to look like you on your best morning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton context={{ context: "hero" }} size="lg" />
            <FreshaButton size="lg" />
          </div>
        </div>
        <div className="lg:col-span-5 relative aspect-[4/5] rounded-[20px] overflow-hidden border border-bb-line shadow-[0_30px_60px_-30px_rgba(60,40,30,0.25)]">
          <Image
            src="/images/blade/hero-brow-mapping.png"
            alt="Brow mapping in progress at Blade Boutique"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
