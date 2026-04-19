import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapEmbed } from "@/components/MapEmbed";
import { STUDIO } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Contact — Visit, call, or message Blade Boutique",
  description:
    "Visit Blade Boutique at 8 Tin Road, Bromhof. WhatsApp Sam on +27 72 411 1476 or browse studio hours.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bb-container py-16 md:py-24">
        <p className="bb-eyebrow mb-3">Contact</p>
        <h1 className="bb-display-lg mb-6">Visit, call, message.</h1>
        <p className="bb-body-lg max-w-[55ch] mb-16">
          The studio is in Bromhof, Randburg — easy parking, single-chair, calm
          space. WhatsApp is always the fastest way to reach Sam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Card title="Address">
            <p className="text-bb-ink leading-relaxed">{STUDIO.address.street}<br />{STUDIO.address.suburb}<br />{STUDIO.address.city}, {STUDIO.address.postalCode}</p>
          </Card>

          <Card title="Hours">
            <ul className="space-y-1">
              {STUDIO.hours.map((h) => (
                <li key={h.day} className="text-bb-ink">
                  <span className="text-bb-ink-soft">{h.day}:</span>{" "}
                  {h.open ? `${h.open}–${h.close}` : "Closed"}
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Get in touch">
            <div className="space-y-3">
              <WhatsAppButton context={{ context: "hero" }} size="md" />
              <a
                href={`mailto:${STUDIO.email}`}
                className="block bb-meta text-bb-clay hover:text-bb-clay-deep"
              >
                {STUDIO.email}
              </a>
              <a
                href={`tel:${STUDIO.phone}`}
                className="block bb-meta text-bb-clay hover:text-bb-clay-deep"
              >
                {STUDIO.phone}
              </a>
            </div>
          </Card>
        </div>

        <MapEmbed />
      </div>
    </>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bb-surface rounded-[20px] p-8 border border-bb-line">
      <p className="bb-eyebrow mb-4">{title}</p>
      {children}
    </div>
  );
}
