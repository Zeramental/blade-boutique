import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { jsonLd, personSchema, breadcrumbSchema } from "@/lib/jsonld";
import { STUDIO } from "@/lib/studio";

export const metadata: Metadata = {
  title: "About Sam: 12+ Years of Permanent Makeup in Johannesburg",
  description:
    "Meet Sam, the permanent makeup artist behind Blade Boutique in Bromhof, Randburg. PhiBrows-trained, specialist in PMU for melanin-rich skin, Permablend + Evenflo pigments. Serving Johannesburg and Pretoria.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const graph = [
    personSchema(),
    breadcrumbSchema([
      { name: "Home", url: STUDIO.url },
      { name: "About Sam", url: `${STUDIO.url}/about` },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />
      <section className="bb-container py-16 md:py-24 max-w-3xl">
        <p className="bb-eyebrow mb-3">Meet Sam</p>
        <h1 className="bb-display-lg mb-8">
          Twelve years of precision work.
        </h1>
        <div className="space-y-6 text-bb-ink-soft text-lg leading-relaxed">
          <p>
            I started Blade Boutique because I wanted to do permanent makeup
            differently. One client at a time. No production line. No drawn-on
            brows. No heavy lines. Just careful, custom work that heals to look
            like you on your best morning.
          </p>
          <p>
            I trained in PhiBrows mapping in 2014, then went deep on lip
            neutralisation for melanin-rich skin, a skill in short supply in
            South Africa. Most of my clients come from word of mouth, and a
            good chunk of my diary is women between 28 and 45 who&rsquo;ve
            done their research on pigment and technique. I take that
            seriously.
          </p>
          <p>
            I use Permablend and Evenflo pigments, two of the most trusted
            pigment ranges in the world. I spoil my clients with the good
            stuff because healing is where permanent makeup is won or lost.
          </p>
          <p>
            The studio is inside Balance Wellness Centre in Bromhof,
            Randburg. One chair. When you book, you get my full attention for
            the full session. No rushing. No upselling. Just the work you came
            for, done properly.
          </p>
          <p>
            Clients travel to me from across Johannesburg and Pretoria, and
            every so often I get booked by someone flying in from Cape Town or
            Durban. I don&rsquo;t advertise for those. They come because
            someone sent them.
          </p>
        </div>
      </section>

      <section className="bg-bb-surface-alt py-16">
        <div className="bb-container">
          <p className="bb-eyebrow mb-6 text-center">Credentials &amp; tools</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            <span className="bb-display-sm">PhiBrows certified</span>
            <span className="bb-display-sm text-bb-ink-mute">·</span>
            <span className="bb-display-sm">12+ years</span>
            <span className="bb-display-sm text-bb-ink-mute">·</span>
            <span className="bb-display-sm">Permablend pigments</span>
            <span className="bb-display-sm text-bb-ink-mute">·</span>
            <span className="bb-display-sm">Evenflo pigments</span>
            <span className="bb-display-sm text-bb-ink-mute">·</span>
            <span className="bb-display-sm">★★★★★ 5.0 Google</span>
          </div>
        </div>
      </section>

      <section className="bb-container py-20 md:py-32 max-w-2xl text-center">
        <h2 className="bb-display-md mb-6">My promise to you</h2>
        <p className="bb-body-lg mb-10">
          You will not leave my chair with anything you didn&rsquo;t agree to.
          We map, we approve, we numb, we work. If at any point you want to
          stop, we stop. That&rsquo;s the whole job.
        </p>
        <WhatsAppButton
          context={{ context: "hero" }}
          size="lg"
          label="Message Sam directly"
        />
      </section>
    </>
  );
}
