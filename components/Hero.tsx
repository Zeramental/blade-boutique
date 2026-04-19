import { WhatsAppButton } from "./WhatsAppButton";
import { FreshaButton } from "./FreshaButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bb-clay-soft via-bb-surface-alt to-bb-bg" aria-hidden="true" />
      <div className="relative bb-container py-24 md:py-40 lg:py-48 max-w-3xl">
        <p className="bb-eyebrow mb-6">
          Permanent Makeup · Bromhof, Johannesburg
        </p>
        <h1 className="bb-display-xl mb-8 max-w-[18ch]">
          Brows you wake up loving.
        </h1>
        <p className="bb-body-lg max-w-[40ch] mb-10">
          Honestly natural permanent makeup by Sam — meticulous, precise, healed
          to look like you on your best morning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <WhatsAppButton context={{ context: "hero" }} size="lg" />
          <FreshaButton size="lg" />
        </div>
      </div>
    </section>
  );
}
