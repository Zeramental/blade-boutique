import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapEmbed } from "@/components/MapEmbed";
import { STUDIO } from "@/lib/studio";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact Blade Boutique: Visit, Call or WhatsApp (Bromhof, Randburg)",
  description: `Visit Blade Boutique at ${STUDIO.fullAddress}. WhatsApp Sam on ${STUDIO.phoneDisplay} or browse studio hours. Permanent makeup studio serving Randburg, Johannesburg and Pretoria.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: STUDIO.url },
    { name: "Contact", url: `${STUDIO.url}/contact` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbs)} />
      <div className="bb-container py-16 md:py-24">
        <p className="bb-eyebrow mb-3">Contact</p>
        <h1 className="bb-display-lg mb-6">Visit, call, message.</h1>
        <p className="bb-body-lg max-w-[58ch] mb-16">
          The studio is inside Balance Wellness Centre in Bromhof, Randburg.
          easy parking, single-chair, calm space. WhatsApp is always the fastest
          way to reach Sam. She typically replies within 2 hours during studio hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Card title="Address">
            <p className="text-bb-ink leading-relaxed">
              <strong>{STUDIO.venueName}</strong>
              <br />
              {STUDIO.address.street}
              <br />
              {STUDIO.address.suburb}
              <br />
              {STUDIO.address.city}, {STUDIO.address.postalCode}
              <br />
              {STUDIO.address.province}
            </p>
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
                {STUDIO.phoneDisplay}
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
