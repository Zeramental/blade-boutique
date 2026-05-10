import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getService } from "@/lib/services";
import { LOCATIONS, PSEO_SERVICE_SLUGS, getLocation, isPseoService } from "@/lib/locations";
import type { Location as StudioLocation } from "@/lib/locations";
import { galleryFor } from "@/lib/gallery";
import { STUDIO } from "@/lib/studio";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FreshaButton } from "@/components/FreshaButton";
import { TrustStrip } from "@/components/TrustStrip";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FAQ } from "@/components/FAQ";
import { jsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { PageViewTracker } from "@/components/PageViewTracker";

export function generateStaticParams() {
  const params: { slug: string; location: string }[] = [];
  for (const slug of PSEO_SERVICE_SLUGS) {
    for (const loc of LOCATIONS) {
      params.push({ slug, location: loc.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string; location: string }> }): Promise<Metadata> {
  const { slug, location: locationSlug } = await params;
  const service = getService(slug);
  const location = getLocation(locationSlug);
  if (!service || !location || !isPseoService(slug)) return {};

  const priceLabel = service.fromPrice
    ? `from ${service.fromPriceLabel}`
    : "consultation pricing";

  return {
    title: `${service.name} in ${location.name} | Blade Boutique`,
    description: `${service.name} in ${location.name} by Sam at Blade Boutique, Bromhof, Randburg — ${location.driveRange} from ${location.name}. ${service.fromPrice ? `${service.fromPriceLabel}, perfection session included.` : "Priced at consultation."} Specialist in PMU for melanin-rich skin. 5.0 Google rating, 40+ reviews.`,
    alternates: {
      canonical: `/services/${slug}/${locationSlug}`,
    },
    keywords: [
      `${service.name.toLowerCase()} ${location.name.toLowerCase()}`,
      `${service.name.toLowerCase()} near me`,
      `permanent makeup ${location.name.toLowerCase()}`,
      ...service.keywords,
    ],
    openGraph: {
      title: `${service.name} in ${location.name} | Blade Boutique`,
      description: `${service.name} in ${location.name} by Sam. ${priceLabel}. ${location.driveRange} from ${location.name}.`,
      url: `${STUDIO.url}/services/${slug}/${locationSlug}`,
      images: [
        {
          url: service.image,
          alt: `${service.name} by Sam at Blade Boutique, serving ${location.name}`,
        },
      ],
    },
  };
}

export default async function ServiceLocationPage({
  params,
}: { params: Promise<{ slug: string; location: string }> }) {
  const { slug, location: locationSlug } = await params;
  const service = getService(slug);
  const location = getLocation(locationSlug);

  if (!service || !location || !isPseoService(slug)) notFound();

  const faq = buildLocationFaq(service, location);
  const images = galleryFor(service.slug);

  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${STUDIO.url}/services/${slug}/${locationSlug}#service`,
      name: `${service.name} in ${location.name}`,
      alternateName: service.aliases,
      serviceType: service.category === "tattoos" ? "Tattoo" : "Permanent makeup",
      description: `${service.longDescription} Serving clients from ${location.fullName}, ${location.driveRange} from Blade Boutique in Bromhof, Randburg.`,
      url: `${STUDIO.url}/services/${slug}/${locationSlug}`,
      provider: {
        "@type": "LocalBusiness",
        name: STUDIO.name,
        url: STUDIO.url,
        telephone: STUDIO.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: STUDIO.address.street,
          addressLocality: STUDIO.address.suburb,
          addressRegion: STUDIO.address.province,
          postalCode: STUDIO.address.postalCode,
          addressCountry: STUDIO.address.countryCode,
        },
      },
      areaServed: [
        { "@type": "City", name: location.name },
        { "@type": "City", name: location.region },
      ],
      ...(service.fromPrice
        ? {
            offers: {
              "@type": "Offer",
              price: service.fromPrice,
              priceCurrency: "ZAR",
              availability: "https://schema.org/InStock",
            },
          }
        : {}),
    },
    faqSchema(faq),
    breadcrumbSchema([
      { name: "Home", url: STUDIO.url },
      { name: "Services", url: `${STUDIO.url}/services` },
      { name: service.name, url: `${STUDIO.url}/services/${service.slug}` },
      {
        name: `${service.name} in ${location.name}`,
        url: `${STUDIO.url}/services/${service.slug}/${location.slug}`,
      },
    ]),
  ];

  const whatsappCtx = {
    context: "service" as const,
    service: `${service.name} (${location.name})`,
    slug: service.slug,
    price: service.fromPriceLabel,
  };

  const nearbyLinks = location.nearbyLocations
    .map((s) => LOCATIONS.find((l) => l.slug === s))
    .filter(Boolean) as typeof LOCATIONS;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />
      <PageViewTracker
        event="service_view"
        params={{
          event_category: "engagement",
          event_label: `${service.name} — ${location.name}`,
          service_slug: service.slug,
        }}
      />

      {/* Breadcrumb */}
      <div className="bb-container pt-8">
        <nav className="bb-meta" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-bb-ink">Home</Link>
          <span className="mx-2 text-bb-ink-mute">/</span>
          <Link href="/services" className="hover:text-bb-ink">Services</Link>
          <span className="mx-2 text-bb-ink-mute">/</span>
          <Link href={`/services/${service.slug}`} className="hover:text-bb-ink">
            {service.name}
          </Link>
          <span className="mx-2 text-bb-ink-mute">/</span>
          <span className="text-bb-ink">{location.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bb-container py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="bb-eyebrow mb-3">
            {service.isPMU ? "Permanent Makeup" : "Treatment"} · {location.name}
          </p>
          <h1 className="bb-display-lg mb-6">
            {service.name} in {location.name}.
          </h1>
          <p className="bb-body-lg mb-4 max-w-[45ch]">
            {service.shortDescription}
          </p>
          <p className="bb-meta text-bb-ink-mute mb-8">
            At Blade Boutique, Bromhof, Randburg — {location.driveRange} from {location.name}{" "}
            {location.driveRoute}.{" "}
            {service.fromPrice ? `From ${service.fromPriceLabel}` : "Consultation pricing"}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <WhatsAppButton
              context={whatsappCtx}
              size="lg"
              label={`Book ${service.name} on WhatsApp`}
            />
            <FreshaButton size="lg" />
          </div>
          <p className="bb-meta">
            {service.fromPriceLabel} · {service.durationLabel}
            {service.isPMU ? " · Perfection session included" : ""}
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-bb-line bg-bb-clay-soft">
          <Image
            src={images[0] ?? service.image}
            alt={`${service.name} by Sam at Blade Boutique, serving ${location.name}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <TrustStrip />

      {/* Service description */}
      <section className="bb-container py-20 md:py-32 max-w-3xl">
        <h2 className="bb-display-md mb-6">What {service.name.toLowerCase()} is</h2>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-12">
          {service.longDescription}
        </p>

        {/* Location context */}
        <h2 className="bb-display-md mb-6">Serving {location.name}</h2>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-4">
          {location.areaIntro}
        </p>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-12">
          {location.clienteleSentence}
        </p>

        <h2 className="bb-display-md mb-6">How the session works</h2>
        <ol className="space-y-6 mb-12">
          {[
            [
              "Consultation and mapping",
              "We talk through the look, shape and pigment shade. Sam maps everything in pencil before any pigment touches the skin. Nothing is locked in until you approve it.",
            ],
            [
              "Numbing",
              "Layered topical numbing for full comfort throughout the session. Lips get a stronger numbing protocol.",
            ],
            [
              "Pigment session",
              "60 to 90 minutes of careful, deliberate work using Permablend or Evenflo pigments custom-mixed for your skin tone.",
            ],
            [
              "Aftercare brief",
              "You go home with an aftercare kit and a clear day-by-day healing guide. Sam is on WhatsApp if anything comes up.",
            ],
          ].map(([title, body], i) => (
            <li key={i} className="flex gap-4">
              <span className="bb-display-sm text-bb-clay flex-shrink-0 w-10">{i + 1}.</span>
              <div>
                <h3 className="bb-display-sm mb-1">{title}</h3>
                <p className="text-bb-ink-soft">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        {service.isPMU && (
          <div className="bg-bb-surface-alt rounded-[12px] p-6 md:p-8 mb-12">
            <p className="bb-eyebrow mb-2">What&rsquo;s included</p>
            <ul className="space-y-2 text-bb-ink leading-relaxed">
              <li>· Full consultation and mapping</li>
              <li>· Layered numbing</li>
              <li>· Premium Permablend or Evenflo pigment</li>
              <li>· Aftercare kit</li>
              <li>
                · <strong>Perfection session within 4 weeks</strong> (missed follow-ups will be
                charged)
              </li>
            </ul>
          </div>
        )}

        {/* Getting here */}
        <h2 className="bb-display-md mb-6">Getting here from {location.name}</h2>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-4">{location.directions}</p>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-12">
          The studio is a single-chair room inside Balance Wellness Centre — quiet, private, and
          nothing like a busy salon. Free parking is on-site. Sam will WhatsApp you a pin drop when
          you confirm your booking.
        </p>
      </section>

      {/* Gallery */}
      {images.length > 0 && (
        <section className="bg-bb-surface-alt py-20 md:py-32">
          <div className="bb-container">
            <h2 className="bb-display-md mb-12">Healed results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.slice(0, 6).map((url, i) => (
                <BeforeAfter
                  key={url}
                  imageUrl={url}
                  caption={`Healed · ${service.name}`}
                  priority={i === 0}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bb-container py-20 md:py-32 max-w-3xl">
        <h2 className="bb-display-md mb-12">
          {service.name} in {location.name}: frequently asked
        </h2>
        <FAQ items={faq} />
      </section>

      {/* Internal links to sibling location pages */}
      {nearbyLinks.length > 0 && (
        <section className="bb-container pb-16 max-w-3xl">
          <p className="bb-eyebrow mb-4">Also serving nearby</p>
          <div className="flex flex-wrap gap-3">
            {nearbyLinks.map((loc) => (
              <Link
                key={loc.slug}
                href={`/services/${service.slug}/${loc.slug}`}
                className="bb-meta px-4 py-2 rounded-full border border-bb-line hover:border-bb-clay hover:text-bb-clay transition-colors"
              >
                {service.name} in {loc.name}
              </Link>
            ))}
            <Link
              href={`/services/${service.slug}`}
              className="bb-meta px-4 py-2 rounded-full border border-bb-line hover:border-bb-clay hover:text-bb-clay transition-colors"
            >
              All {service.name} info
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-bb-ink py-20 md:py-32">
        <div className="bb-container text-center">
          <h2 className="bb-display-md text-bb-bg mb-4 max-w-[26ch] mx-auto">
            Ready to book {service.name.toLowerCase()} from {location.name}?
          </h2>
          <p className="bb-meta text-bb-bg-mute mb-8 opacity-70">
            {location.servingBlurb}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton context={whatsappCtx} size="lg" />
            <FreshaButton size="lg" />
          </div>
          <p className="bb-meta text-bb-bg-mute mt-6 opacity-60">
            <Link href={`/services/${service.slug}`} className="underline">
              Full {service.name.toLowerCase()} page
            </Link>
            {" · "}
            <Link href="/pricing" className="underline">
              Price list
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

function buildLocationFaq(
  service: { name: string; fromPriceLabel: string; touchUpLabel: string; isPMU: boolean },
  location: StudioLocation,
) {
  const nameLower = service.name.toLowerCase();
  return [
    {
      q: `Where is the best ${nameLower} in ${location.name}?`,
      a: `Blade Boutique is a specialist ${service.isPMU ? "permanent makeup" : "beauty"} studio inside Balance Wellness Centre at 8 Tin Road, Bromhof, Randburg — ${location.driveRange} from ${location.name} ${location.driveRoute}. Sam has 12+ years of full-time PMU experience, uses Permablend and Evenflo pigments, and holds a 5.0 Google rating across 40+ reviews. Single-chair studio, no double-booking.`,
    },
    {
      q: `How much does ${nameLower} cost in ${location.name}?`,
      a: `${service.name} at Blade Boutique is ${service.fromPriceLabel}${service.isPMU ? ", and this includes your perfection session within 4 weeks at no extra cost" : ""}. ${service.touchUpLabel ? `Maintenance touch-ups are priced separately — ${service.touchUpLabel.toLowerCase()}.` : ""} This is specialist-level pricing in line with experienced PMU artists across ${location.region}. A WhatsApp consultation is free and comes with no obligation.`,
    },
    {
      q: `How do I get to Blade Boutique from ${location.name}?`,
      a: `${location.directions} From arrival it is a short walk into the wellness centre. Sam sends a WhatsApp pin drop with your booking confirmation so there is no hunting for the entrance.`,
    },
    {
      q: `How long does ${nameLower} last?`,
      a: service.isPMU
        ? "Most PMU results look their best for 1 to 3 years before needing a colour boost. Eyeliner holds longest, up to 3–5 years. Pigment fades gently over time — it does not turn a sudden colour — because Sam uses Permablend and Evenflo ranges formulated to hold true tone."
        : "Brow lamination and lash lift results last 6 to 8 weeks. Fine line tattoos are permanent.",
    },
    {
      q: `Is ${nameLower} safe on darker skin tones?`,
      a: "Yes, when done by an artist who has trained specifically in melanin-rich skin. Sam's largest client demographic is ethnic women aged 28–45. Both Permablend and Evenflo pigment ranges include shades developed for deeper undertones, and Sam custom-mixes every session to ensure pigment heals true to tone — never ashy, never cool.",
    },
  ];
}
