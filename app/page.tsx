import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonial } from "@/components/Testimonial";
import { FAQ } from "@/components/FAQ";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FreshaButton } from "@/components/FreshaButton";
import { SERVICES } from "@/lib/services";

const HOME_FAQ = [
  {
    q: "How long does permanent makeup actually last?",
    a: "Brows last 1-3 years before needing a colour boost. Lip blush lasts 2-3 years. Eyeliner 3-5 years. Pigment fades gently and naturally — it doesn't turn blue or green. An annual touch-up keeps everything looking fresh.",
  },
  {
    q: "Will it hurt?",
    a: "I numb thoroughly before and during the session. Most clients describe it as mild discomfort, similar to tweezing. Lips are the most sensitive — I use stronger numbing for those.",
  },
  {
    q: "How long is the appointment?",
    a: "Plan for 2 to 3 hours. The pigment session itself is around 60-90 minutes; the rest is consultation, mapping, numbing, and aftercare brief.",
  },
  {
    q: "What's the healing process like?",
    a: "Days 1-3: pigment looks bold. Days 4-10: scabbing and lightening. Weeks 2-4: pigment reappears soft and natural. Touch-up at 6-8 weeks perfects the result.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="bb-container py-20 md:py-32">
        <p className="bb-eyebrow mb-3">What I do</p>
        <h2 className="bb-display-md mb-12 max-w-[20ch]">
          Permanent makeup, done with surgical patience.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="text-bb-clay hover:text-bb-clay-deep font-medium"
          >
            See all services →
          </Link>
        </div>
      </section>

      <section className="bg-bb-surface-alt py-20 md:py-32">
        <div className="bb-container">
          <p className="bb-eyebrow mb-3">Healed results</p>
          <h2 className="bb-display-md mb-12 max-w-[20ch]">
            Real clients. No filters. Healed at week 4 or later.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[2/1] rounded-[20px] bg-gradient-to-br from-bb-clay-soft to-bb-line border border-bb-line"
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="text-bb-clay hover:text-bb-clay-deep font-medium"
            >
              See full gallery →
            </Link>
          </div>
        </div>
      </section>

      <section className="bb-container py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="aspect-[4/5] rounded-[20px] bg-gradient-to-br from-bb-clay-soft to-bb-line border border-bb-line" />
        <div>
          <p className="bb-eyebrow mb-3">Meet Sam</p>
          <h2 className="bb-display-md mb-6">
            Twelve years of precision work.
          </h2>
          <p className="text-bb-ink-soft text-lg leading-relaxed mb-4">
            Sam built Blade Boutique on a single principle: permanent makeup
            should look like you, just better-rested. No drawn-on brows. No
            heavy lip lines. Just careful, custom work that heals beautifully.
          </p>
          <p className="text-bb-ink-soft text-lg leading-relaxed mb-8">
            Trained in PhiBrows mapping and lip neutralisation, Sam works from a
            calm Bromhof studio with a single chair and a single client at a
            time.
          </p>
          <Link
            href="/about"
            className="text-bb-clay hover:text-bb-clay-deep font-medium"
          >
            Read Sam&rsquo;s story →
          </Link>
        </div>
      </section>

      <section className="bg-bb-surface-alt py-20 md:py-32">
        <div className="bb-container">
          <p className="bb-eyebrow mb-3 text-center">Kind words</p>
          <h2 className="bb-display-md mb-12 text-center">
            From Sam&rsquo;s clients.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial
              quote="Meticulous is the only word. Three sessions in and my brows have never looked better."
              author="Lerato"
              detail="Powder Brows · April 2026"
            />
            <Testimonial
              quote="Sam is a wizard. I cried when I saw my lips healed at week four."
              author="Naledi"
              detail="Lip Blush · March 2026"
            />
            <Testimonial
              quote="Calm, precise, and not once did she rush me. I'd send my mum here."
              author="Aisha"
              detail="Microblading · February 2026"
            />
          </div>
        </div>
      </section>

      <section className="bb-container py-20 md:py-32 max-w-3xl">
        <p className="bb-eyebrow mb-3">Common questions</p>
        <h2 className="bb-display-md mb-12">Everything first-timers ask.</h2>
        <FAQ items={HOME_FAQ} />
      </section>

      <section className="bg-bb-ink py-20 md:py-32">
        <div className="bb-container text-center">
          <h2 className="bb-display-md text-bb-bg mb-8 max-w-[20ch] mx-auto">
            Ready when you are.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton context={{ context: "hero" }} size="lg" />
            <FreshaButton size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
