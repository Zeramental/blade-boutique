import type { Metadata } from "next";
import { BookingForm } from "./BookingForm";
import { STUDIO } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Book — WhatsApp Sam directly or browse Fresha",
  description:
    "Two ways to book your permanent makeup appointment with Sam at Blade Boutique, Bromhof. WhatsApp for fastest response or browse Fresha calendar.",
};

export default function BookPage() {
  return (
    <div className="bb-container py-16 md:py-24">
      <div className="max-w-2xl mb-12">
        <p className="bb-eyebrow mb-3">Book</p>
        <h1 className="bb-display-lg mb-6">Book your treatment.</h1>
        <p className="bb-body-lg">
          Two ways — WhatsApp Sam directly with a few details, or browse open
          slots on Fresha. Sam typically replies within 2 hours during studio
          hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <p className="bb-eyebrow mb-4">Book via WhatsApp</p>
          <BookingForm />
        </div>

        <aside className="lg:col-span-2">
          <p className="bb-eyebrow mb-4">Or browse open times</p>
          <div className="bg-bb-surface-alt rounded-[20px] p-8 border border-bb-line">
            {STUDIO.freshaUrl ? (
              <iframe
                src={STUDIO.freshaUrl}
                title="Fresha booking calendar"
                loading="lazy"
                className="w-full h-[480px] border-0 rounded-md"
              />
            ) : (
              <div className="text-center">
                <p className="text-bb-ink-soft mb-6 leading-relaxed">
                  The Fresha calendar is being set up. For now, please use the
                  WhatsApp form on the left — Sam responds within 2 hours during
                  studio hours.
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 bg-bb-surface rounded-[12px] p-6 border border-bb-line">
            <p className="bb-eyebrow mb-3">Studio hours</p>
            <ul className="space-y-1">
              {STUDIO.hours.map((h) => (
                <li key={h.day} className="text-bb-ink">
                  <span className="text-bb-ink-soft">{h.day}:</span>{" "}
                  {h.open ? `${h.open}–${h.close}` : "Closed"}
                </li>
              ))}
            </ul>
            <p className="bb-meta mt-4 text-bb-ink-mute">
              {STUDIO.fullAddress}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
