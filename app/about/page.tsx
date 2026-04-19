import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "About Sam — Twelve years of precision permanent makeup",
  description:
    "Meet Sam, the artist behind Blade Boutique in Bromhof. PhiBrows-trained, twelve years of experience in permanent makeup for South African skin.",
};

export default function AboutPage() {
  return (
    <>
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
            I trained in PhiBrows mapping in 2014, then specialised in lip
            neutralisation for melanin-rich skin — a skill in short supply in
            South Africa. Most of my clients come from word of mouth. I take
            that personally.
          </p>
          <p>
            My studio in Bromhof has one chair. When you book, you get my full
            attention for the full session. No rushing. No upselling. Just the
            work you came for, done properly.
          </p>
        </div>
      </section>

      <section className="bg-bb-surface-alt py-16">
        <div className="bb-container">
          <p className="bb-eyebrow mb-6 text-center">Credentials</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <span className="bb-display-sm">PhiBrows certified</span>
            <span className="bb-display-sm text-bb-ink-mute">·</span>
            <span className="bb-display-sm">SteriLAN compliant</span>
            <span className="bb-display-sm text-bb-ink-mute">·</span>
            <span className="bb-display-sm">12+ years</span>
            <span className="bb-display-sm text-bb-ink-mute">·</span>
            <span className="bb-display-sm">★★★★★ 4.9 Google</span>
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
        <WhatsAppButton context={{ context: "hero" }} size="lg" label="Message Sam directly" />
      </section>
    </>
  );
}
