import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonial } from "@/components/Testimonial";
import { FAQ } from "@/components/FAQ";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FreshaButton } from "@/components/FreshaButton";
import { SERVICES, getService } from "@/lib/services";
import { jsonLd, faqSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blade Boutique: Permanent Makeup Studio in Bromhof, Randburg",
  description:
    "Meticulous permanent makeup by Sam: microblading, nano brows, powder brows, lip blush, dark lip neutralisation, eyeliner. Bromhof, Randburg. Specialist in PMU for melanin-rich skin. 12+ years. Permablend + Evenflo pigments.",
  alternates: { canonical: "/" },
};

const HOME_FAQ = [
  {
    q: "How long does permanent makeup actually last?",
    a: "Brows last 1 to 3 years before needing a colour boost. Lip blush lasts 2 to 3 years. Eyeliner and lash enhancement last 3 to 5 years. Pigment fades gently and stays true to tone. We use Permablend and Evenflo, two of the most trusted pigment brands in the world. An annual touch-up keeps everything looking fresh.",
  },
  {
    q: "Is Blade Boutique good for darker skin tones?",
    a: "Yes. Sam's biggest client demographic is ethnic women aged 28 to 45, and dark lip neutralisation for melanin-rich skin is one of her most-booked specialities. Both Permablend and Evenflo pigment ranges have shades developed specifically for deeper skin tones, and Sam custom-mixes every session to match your undertone.",
  },
  {
    q: "Where is Blade Boutique located?",
    a: "Blade Boutique is inside Balance Wellness Centre at 8 Tin Road, Bromhof, Randburg. The studio serves Johannesburg, Sandton, Northriding, Fourways and Pretoria, with clients occasionally travelling from Durban and Cape Town.",
  },
  {
    q: "Will it hurt?",
    a: "Sam numbs thoroughly before and during the session. Most clients describe it as mild discomfort, similar to tweezing. Lips are the most sensitive, and a layered numbing protocol is used for lip blush and dark lip neutralisation.",
  },
  {
    q: "How long is a permanent makeup appointment?",
    a: "Plan for 1 hour 30 minutes to 2 hours max for your initial session — pigment session itself is 60 to 90 minutes, with the rest being consultation, mapping, numbing and aftercare brief. Follow-up and perfection sessions run 45 minutes to 1 hour.",
  },
  {
    q: "What's the healing process like?",
    a: "Days 1 to 3: pigment looks bold. Days 4 to 10: scabbing and lightening. Weeks 2 to 4: pigment reappears soft and natural. Your included perfection session at around 4 weeks fine-tunes the final result.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(HOME_FAQ))}
      />
      <Hero />
      <TrustStrip />

      {/* Services section */}
      <section
        className="py-20 md:py-32 relative"
        style={{
          background: "linear-gradient(180deg, #FAF7F2 0%, rgba(170,64,167,0.03) 40%, #FAF7F2 100%)",
        }}
      >
        <div className="bb-container">
          <p className="bb-eyebrow mb-3">What Sam does</p>
          <h2 className="bb-display-md mb-4 max-w-[22ch]">
            Permanent makeup, done with surgical patience.
          </h2>
          <p className="text-bb-ink-soft text-lg mb-12 max-w-[48ch] leading-relaxed">
            Every service is custom to your face, your skin tone, and your lifestyle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "microblading",
              "powder-brows",
              "lip-blush",
              "dark-lip-neutralisation",
              "brow-lamination",
              "lash-lift",
            ]
              .map((slug) => getService(slug))
              .filter((s): s is NonNullable<typeof s> => Boolean(s))
              .map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="bb-link-pink text-base">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section
        className="py-20 md:py-32"
        style={{ background: "#F2ECE3" }}
      >
        <div className="bb-container">
          <p className="bb-eyebrow mb-3">Healed results</p>
          <h2 className="bb-display-md mb-4 max-w-[20ch]">
            Real clients. No filters. Healed at week 4 or later.
          </h2>
          <p className="text-bb-ink-soft text-lg mb-12 max-w-[48ch] leading-relaxed">
            What you see is what heals. No studio lighting tricks, no heavy editing.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {[
              { src: "/images/blade/gallery-brows-1.jpg", alt: "Microblading before and after on a client at Blade Boutique in Randburg" },
              { src: "/images/blade/gallery-lips-3.jpg", alt: "Lip blush healed result by Sam at Blade Boutique" },
              { src: "/images/blade/gallery-brows-3.jpg", alt: "Powder brows healed result on oily skin" },
              { src: "/images/blade/home/healed-lips.webp", alt: "Dark lip neutralisation before and after on melanin-rich skin" },
              { src: "/images/blade/gallery-brows-4.jpg", alt: "Nano brows fine hair-stroke healed result" },
              { src: "/images/blade/gallery-lips-1.jpg", alt: "Lip blush healed, natural tint" },
            ].map((g) => (
              <div
                key={g.src}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-bb-line bg-bb-surface-alt transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(170,64,167,0.15), transparent 50%)" }}
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/gallery" className="bb-link-pink text-base">
              See full gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Sam section */}
      <section
        className="py-20 md:py-32 relative"
        style={{
          background: "linear-gradient(180deg, #FAF7F2 0%, rgba(170,64,167,0.04) 50%, #FAF7F2 100%)",
        }}
      >
        <div className="bb-container grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
            className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-bb-line"
            style={{
              boxShadow: "0 30px 60px -20px rgba(170,64,167,0.15), 0 30px 60px -30px rgba(60,40,30,0.15)",
            }}
          >
            <Image
              src="/images/blade/sam-portrait.jpg"
              alt="Sam, founder and permanent makeup artist at Blade Boutique"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(170,64,167,0.10), transparent)" }}
            />
          </div>
          <div>
            <p className="bb-eyebrow mb-4">Meet Sam</p>
            <h2 className="bb-display-md mb-6">
              Twelve years of precision work.
            </h2>
            <p className="text-bb-ink-soft text-lg leading-relaxed mb-4">
              Sam built Blade Boutique on a single principle: permanent makeup
              should look like you, just better-rested. No drawn-on brows. No
              heavy lip lines. Just careful, custom work that heals beautifully
              on every skin tone.
            </p>
            <p className="text-bb-ink-soft text-lg leading-relaxed mb-8">
              PhiBrows-trained, twelve years of work, Permablend and Evenflo
              pigments. Sam is trained across every skin tone — brows, lips,
              eyeliner, lash and brow styling — with a particular specialty in
              lip neutralisation for melanin-rich skin. She works out of Balance
              Wellness Centre in Bromhof, Randburg. One chair, one client at a
              time.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["PhiBrows Certified", "12+ Years", "Permablend Pigments", "Evenflo Pigments"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
                  style={{ background: "rgba(170,64,167,0.08)", color: "var(--color-bb-pink)" }}
                >
                  {badge}
                </span>
              ))}
            </div>
            <Link href="/about" className="bb-link-pink text-base">
              Read Sam&rsquo;s story →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 md:py-32"
        style={{ background: "#F2ECE3" }}
      >
        <div className="bb-container">
          <p className="bb-eyebrow mb-3 text-center">Kind words</p>
          <h2 className="bb-display-md mb-3 text-center">
            From Sam&rsquo;s clients.
          </h2>
          <p className="text-bb-ink-soft text-center mb-12 max-w-[40ch] mx-auto leading-relaxed">
            Every review below is real, unedited, and left voluntarily on Google.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Testimonial
              quote="Meticulous is the only word. Three sessions in and my brows have never looked better."
              author="Lerato"
              detail="Powder Brows · April 2026"
            />
            <Testimonial
              quote="Sam is a wizard. I cried when I saw my lips healed at week four."
              author="Naledi"
              detail="Dark Lip Neutralisation · March 2026"
            />
            <Testimonial
              quote="Calm, precise, and not once did she rush me. I'd send my mum here."
              author="Aisha"
              detail="Microblading · February 2026"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 md:py-32 relative"
        style={{
          background: "linear-gradient(180deg, #FAF7F2 0%, rgba(170,64,167,0.035) 50%, #FAF7F2 100%)",
        }}
      >
        <div className="bb-container max-w-3xl">
          <p className="bb-eyebrow mb-3">Common questions</p>
          <h2 className="bb-display-md mb-12">Everything first-timers ask.</h2>
          <FAQ items={HOME_FAQ} />
        </div>
      </section>

      {/* CTA section */}
      <section
        className="py-20 md:py-32 relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0E0810 0%, #2D0E2D 30%, #1A0B1F 60%, #0E0810 100%)",
        }}
      >
        {/* Main pink bloom — top centre */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse, rgba(170,64,167,0.55) 0%, rgba(170,64,167,0.18) 40%, transparent 70%)",
          }}
        />
        {/* Secondary bloom — bottom left drift */}
        <div
          className="absolute bottom-0 -left-20 w-[600px] h-[400px] pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse, rgba(200,80,195,0.40) 0%, rgba(170,64,167,0.12) 50%, transparent 75%)",
          }}
        />
        {/* Accent — bottom right */}
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[300px] pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse at bottom right, rgba(170,64,167,0.30) 0%, transparent 65%)",
          }}
        />
        {/* Sweeping diagonal streak */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(170,64,167,0.08) 30%, rgba(200,80,195,0.14) 50%, rgba(170,64,167,0.06) 70%, transparent 100%)",
          }}
        />

        <div className="relative bb-container text-center">
          <p className="bb-eyebrow mb-4" style={{ color: "rgba(170,64,167,0.9)" }}>
            Book your session
          </p>
          <h2
            className="bb-display-md mb-6 max-w-[20ch] mx-auto"
            style={{ color: "#FAF7F2" }}
          >
            Ready when you are.
          </h2>
          <p className="text-bb-ink-mute mb-10 max-w-[40ch] mx-auto leading-relaxed">
            One chair, one client at a time. Message Sam directly on WhatsApp to check availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton context={{ context: "hero" }} size="lg" />
            <FreshaButton size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
