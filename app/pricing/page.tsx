import type { Metadata } from "next";
import { PriceTable } from "@/components/PriceTable";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Pricing — Honest, transparent permanent makeup prices",
  description:
    "Full price list for microblading, powder brows, lip blush, eyeliner and more at Blade Boutique, Bromhof. All prices include numbing, aftercare, and a touch-up.",
};

export default function PricingPage() {
  return (
    <div className="bb-container py-16 md:py-24 max-w-3xl">
      <p className="bb-eyebrow mb-3">Pricing</p>
      <h1 className="bb-display-lg mb-6">
        Honest, transparent.
      </h1>
      <p className="bb-body-lg mb-16">
        No POC pricing, no surprises. All prices include numbing, an aftercare
        kit, and one touch-up at 4-8 weeks.
      </p>

      <PriceTable />

      <div className="mt-20 text-center">
        <WhatsAppButton context={{ context: "hero" }} size="lg" />
      </div>
    </div>
  );
}
