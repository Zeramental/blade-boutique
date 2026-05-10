import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton, WhatsAppGlyph } from "@/components/WhatsAppButton";
import { STUDIO } from "@/lib/studio";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { resolveAdMessage, type AdParams } from "@/lib/adMessages";

export const metadata: Metadata = {
  title: "WhatsApp Sam at Blade Boutique — Permanent Makeup, Bromhof",
  description:
    "Chat with Sam at Blade Boutique on WhatsApp. Book microblading, nano brows, lip blush, dark lip neutralisation or any permanent makeup treatment. She replies within 2 hours.",
  alternates: { canonical: "/whatsapp" },
  robots: { index: false },
};

export default async function WhatsAppPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;

  const params: AdParams = {
    utm_campaign: typeof sp.utm_campaign === "string" ? sp.utm_campaign : undefined,
    utm_content: typeof sp.utm_content === "string" ? sp.utm_content : undefined,
    utm_term: typeof sp.utm_term === "string" ? sp.utm_term : undefined,
    utm_device: typeof sp.utm_device === "string" ? sp.utm_device : undefined,
  };

  const config = resolveAdMessage(params);
  const fromAd = !!(params.utm_campaign || params.utm_term);

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: STUDIO.url },
    { name: "WhatsApp Sam", url: `${STUDIO.url}/whatsapp` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbs)} />

      <div className="bb-container py-16 md:py-24">
        <div className="max-w-2xl mx-auto">

          {/* Eyebrow */}
          <p className="bb-eyebrow mb-4 flex items-center gap-2">
            <WhatsAppGlyph className="w-4 h-4" />
            WhatsApp Sam
          </p>

          {/* Heading — personalised per funnel */}
          <h1 className="bb-display-lg mb-5 leading-[1.08]">
            {config.heading}
          </h1>

          {/* Subtext — personalised per funnel */}
          <p className="bb-body-lg max-w-[52ch] mb-10">
            {config.subtext}
          </p>

          {/* Main CTA card */}
          <div
            className="rounded-2xl p-8 mb-10 border border-bb-line"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,211,102,0.06) 0%, rgba(37,211,102,0.02) 100%)",
            }}
          >
            <WhatsAppButton
              context={{ context: "generic", message: config.whatsappMessage }}
              size="lg"
              label={config.buttonLabel}
            />

            <p className="mt-5 text-[13px] text-bb-ink-mute leading-relaxed">
              Opens WhatsApp with a pre-written message — edit it before sending if you&apos;d like.
              <br />
              Sam typically replies within 2 hours during studio hours (Mon–Fri 09:00–17:00, Sat 09:00–14:00).
            </p>
          </div>

          {/* Trust row */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { stat: "12+", label: "Years experience" },
              { stat: "5★", label: "40+ Google reviews" },
              { stat: "~2h", label: "Reply time" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="bg-bb-surface rounded-xl p-4 text-center border border-bb-line"
              >
                <p className="text-xl font-bold text-bb-pink mb-0.5">{stat}</p>
                <p className="text-[12px] text-bb-ink-soft leading-tight">{label}</p>
              </div>
            ))}
          </div>

          {/* What to tell Sam */}
          <div className="border-t border-bb-line pt-10 mb-12">
            <h2 className="text-base font-semibold text-bb-ink mb-4">
              What to include in your message
            </h2>
            <ul className="space-y-3">
              {[
                "Which treatment you're interested in",
                "Your preferred date or rough timeframe",
                "Any skin concerns — especially for darker skin tones or existing brows",
                "Whether this is your first time or a touch-up",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-bb-ink-soft">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-bb-pink-soft flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-bb-pink" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/book" className="bb-btn bb-btn-outline text-center">
              Submit a booking form instead
            </Link>
            <Link href="/services" className="bb-btn bb-btn-ghost text-center">
              Browse all services
            </Link>
          </div>

          {/* Studio address */}
          <p className="mt-10 text-[13px] text-bb-ink-mute">
            {STUDIO.fullAddress}
          </p>
        </div>
      </div>
    </>
  );
}
