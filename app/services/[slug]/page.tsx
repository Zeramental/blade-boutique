import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SERVICES, getService } from "@/lib/services";
import { galleryFor } from "@/lib/gallery";
import { STUDIO } from "@/lib/studio";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FreshaButton } from "@/components/FreshaButton";
import { TrustStrip } from "@/components/TrustStrip";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FAQ } from "@/components/FAQ";
import {
  jsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/jsonld";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const priceLabel = service.fromPrice
    ? `from ${service.fromPriceLabel}`
    : "consultation";
  const altNames = service.aliases.slice(0, 2).join(", ");

  return {
    title: `${service.name} in Randburg & Johannesburg: ${priceLabel} at Blade Boutique`,
    description: `${service.shortDescription} ${service.name} (also known as ${altNames}) by Sam at Blade Boutique, Bromhof. ${service.fromPrice ? `From ${service.fromPriceLabel}.` : "Consultation-based pricing."} Permablend + Evenflo pigments.`,
    alternates: { canonical: `/services/${service.slug}` },
    keywords: service.keywords,
    openGraph: {
      title: `${service.name} at Blade Boutique, Randburg`,
      description: service.shortDescription,
      url: `${STUDIO.url}/services/${service.slug}`,
      images: [{ url: service.image, alt: `${service.name} by Sam at Blade Boutique` }],
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const faq = buildFaq(service);
  const graph = [
    serviceSchema(service),
    faqSchema(faq),
    breadcrumbSchema([
      { name: "Home", url: STUDIO.url },
      { name: "Services", url: `${STUDIO.url}/services` },
      { name: service.name, url: `${STUDIO.url}/services/${service.slug}` },
    ]),
  ];

  const whatsappCtx = {
    context: "service" as const,
    service: service.name,
    slug: service.slug,
    price: service.fromPriceLabel,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />

      <div className="bb-container pt-8">
        <nav className="bb-meta" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-bb-ink">Home</Link>
          <span className="mx-2 text-bb-ink-mute">/</span>
          <Link href="/services" className="hover:text-bb-ink">Services</Link>
          <span className="mx-2 text-bb-ink-mute">/</span>
          <span className="text-bb-ink">{service.name}</span>
        </nav>
      </div>

      <section className="bb-container py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="bb-eyebrow mb-3">
            {service.isPMU ? "Permanent Makeup" : "Treatment"} · Randburg, Johannesburg
          </p>
          <h1 className="bb-display-lg mb-6">{service.name}</h1>
          <p className="bb-body-lg mb-4 max-w-[45ch]">
            {service.shortDescription}
          </p>
          {service.aliases.length > 0 && (
            <p className="bb-meta text-bb-ink-mute mb-8">
              Also known as: {service.aliases.join(", ")}
            </p>
          )}
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
            {service.touchUpLabel ? ` · ${service.touchUpLabel}` : ""}
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-bb-line bg-bb-clay-soft">
          <Image
            src={galleryFor(service.slug)[0] ?? service.image}
            alt={`${service.name} by Sam at Blade Boutique`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      <TrustStrip />

      <section className="bb-container py-20 md:py-32 max-w-3xl">
        <h2 className="bb-display-md mb-6">What {service.name.toLowerCase()} is</h2>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-12">
          {service.longDescription}
        </p>

        <h2 className="bb-display-md mb-6">How the session works</h2>
        <ol className="space-y-6 mb-12">
          {[
            ["Consultation and mapping", "We talk through the look, shape and pigment shade. Sam maps everything in pencil before any pigment touches the skin. Nothing is locked in until you approve it."],
            ["Numbing", "Layered topical numbing for full comfort throughout the session. Lips get a stronger numbing protocol."],
            ["Pigment session", "60 to 90 minutes of careful, deliberate work using Permablend or Evenflo pigments custom-mixed for your skin tone."],
            ["Aftercare brief", "You go home with an aftercare kit and a clear day-by-day healing guide. Sam is on WhatsApp if anything comes up."],
          ].map(([title, body], i) => (
            <li key={i} className="flex gap-4">
              <span className="bb-display-sm text-bb-clay flex-shrink-0 w-10">
                {i + 1}.
              </span>
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
                · <strong>Perfection session within 4 weeks</strong> (missed
                follow-ups will be charged)
              </li>
            </ul>
          </div>
        )}
      </section>

      {galleryFor(service.slug).length > 0 && (
        <section className="bg-bb-surface-alt py-20 md:py-32">
          <div className="bb-container">
            <h2 className="bb-display-md mb-12">Healed results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryFor(service.slug).slice(0, 6).map((url, i) => (
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

      <section className="bb-container py-20 md:py-32 max-w-3xl">
        <h2 className="bb-display-md mb-12">
          Questions about {service.name.toLowerCase()}
        </h2>
        <FAQ items={faq} />
      </section>

      <section className="bg-bb-ink py-20 md:py-32">
        <div className="bb-container text-center">
          <h2 className="bb-display-md text-bb-bg mb-8 max-w-[24ch] mx-auto">
            Ready to book {service.name.toLowerCase()}?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton context={whatsappCtx} size="lg" />
            <FreshaButton size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}

function buildFaq(service: { name: string; category: string; fromPriceLabel: string; touchUpLabel: string; isPMU: boolean }) {
  const name = service.name;
  const nameLower = name.toLowerCase();
  const base = [
    {
      q: `How long does ${nameLower} last?`,
      a: service.isPMU
        ? "Most PMU results look beautiful for 1 to 3 years before needing a colour boost. Eyeliner can last 3-5 years. Pigment fades gently and stays true to tone because we use Permablend and Evenflo."
        : "Brow lamination and lash lift results last 6 to 8 weeks. Fine line tattoos are permanent.",
    },
    {
      q: "How much does it hurt?",
      a: "Sam numbs thoroughly before and during the session. Most clients describe it as mild discomfort, similar to tweezing. Lips are the most sensitive; layered numbing is used for those.",
    },
    {
      q: "What if I don't love the result?",
      a: "We map and approve shape and shade together before any pigment touches the skin. Nothing is locked in until you say yes. Your included perfection session at 4 weeks fine-tunes anything that softened too much during healing.",
    },
    {
      q: "How do I prepare?",
      a: "Avoid caffeine and alcohol for 24 hours before, no blood thinners for 48 hours prior, no waxing or tinting in the area for 2 weeks. A full prep guide is sent on booking.",
    },
    {
      q: `How much is ${nameLower} at Blade Boutique?`,
      a: `${name} is ${service.fromPriceLabel}${service.touchUpLabel ? `, with ${service.touchUpLabel.toLowerCase()}` : ""}. The price includes a perfection session within 4 weeks of your first treatment.`,
    },
  ];
  return base;
}
