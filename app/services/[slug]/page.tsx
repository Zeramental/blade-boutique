import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, getService } from "@/lib/services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FreshaButton } from "@/components/FreshaButton";
import { TrustStrip } from "@/components/TrustStrip";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FAQ } from "@/components/FAQ";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.name} — From R${service.fromPrice.toLocaleString()} in Bromhof`,
    description: `${service.shortDescription} Bookings via WhatsApp with Sam at Blade Boutique, Bromhof.`,
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const faq = [
    {
      q: `How long does ${service.name.toLowerCase()} last?`,
      a: "Most clients see beautiful results for 1-3 years. We schedule a touch-up at 4-8 weeks (included), then an annual colour boost keeps things looking fresh.",
    },
    {
      q: "How much does it actually hurt?",
      a: "I numb thoroughly. Most clients say it's milder than threading. Lips need stronger numbing — I use a layered approach.",
    },
    {
      q: "What if I don't love the colour?",
      a: "We map and approve the shape and shade together before any pigment touches the skin. Nothing is locked in until you say yes.",
    },
    {
      q: "How do I prepare?",
      a: "Avoid caffeine and alcohol the day before, no blood thinners 48 hours prior, no waxing/tinting in the area for 2 weeks. Full prep guide is sent on booking.",
    },
  ];

  return (
    <>
      <div className="bb-container pt-8">
        <nav className="bb-meta">
          <Link href="/" className="hover:text-bb-ink">
            Home
          </Link>
          <span className="mx-2 text-bb-ink-mute">/</span>
          <Link href="/services" className="hover:text-bb-ink">
            Services
          </Link>
          <span className="mx-2 text-bb-ink-mute">/</span>
          <span className="text-bb-ink">{service.name}</span>
        </nav>
      </div>

      <section className="bb-container py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="bb-eyebrow mb-3">Permanent Makeup</p>
          <h1 className="bb-display-lg mb-6">{service.name}</h1>
          <p className="bb-body-lg mb-8 max-w-[45ch]">
            {service.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <WhatsAppButton
              context={{
                context: "service",
                service: service.name,
                slug: service.slug,
                price: service.fromPriceLabel.replace("From ", ""),
              }}
              size="lg"
              label={`Book ${service.name} on WhatsApp`}
            />
            <FreshaButton size="lg" />
          </div>
          <p className="bb-meta">
            {service.fromPriceLabel} · {service.durationLabel} · Healed in 4 weeks
          </p>
        </div>
        <div className="aspect-[4/5] rounded-[20px] bg-gradient-to-br from-bb-clay-soft to-bb-line border border-bb-line" />
      </section>

      <TrustStrip />

      <section className="bb-container py-20 md:py-32 max-w-3xl">
        <h2 className="bb-display-md mb-6">What it is</h2>
        <p className="text-bb-ink-soft text-lg leading-relaxed mb-12">
          {service.longDescription}
        </p>

        <h2 className="bb-display-md mb-6">How it works</h2>
        <ol className="space-y-6 mb-12">
          {[
            ["Consultation + mapping", "We discuss the look, shape, and pigment shade. I map everything before any pigment touches the skin."],
            ["Numbing", "Layered numbing for full comfort throughout the session."],
            ["Pigment session", "60-90 minutes of careful, deliberate work."],
            ["Aftercare brief", "I send you home with a kit and a clear day-by-day healing plan."],
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
      </section>

      <section className="bg-bb-surface-alt py-20 md:py-32">
        <div className="bb-container">
          <h2 className="bb-display-md mb-12">Healed results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <BeforeAfter
                key={i}
                caption={`Healed at week 4 · ${service.name}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bb-container py-20 md:py-32 max-w-3xl">
        <h2 className="bb-display-md mb-12">Questions about {service.name.toLowerCase()}</h2>
        <FAQ items={faq} />
      </section>

      <section className="bg-bb-ink py-20 md:py-32">
        <div className="bb-container text-center">
          <h2 className="bb-display-md text-bb-bg mb-8 max-w-[20ch] mx-auto">
            Ready to book {service.name.toLowerCase()}?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              context={{
                context: "service",
                service: service.name,
                slug: service.slug,
                price: service.fromPriceLabel.replace("From ", ""),
              }}
              size="lg"
            />
            <FreshaButton size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
