import type { Metadata } from "next";
import { BookingForm } from "./BookingForm";
import { STUDIO } from "@/lib/studio";
import { jsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Book Your Permanent Makeup Appointment at Blade Boutique, Randburg",
  description:
    "Book microblading, nano brows, lip blush, dark lip neutralisation or eyeliner with Sam at Blade Boutique, Bromhof. WhatsApp is fastest — replies within 2 hours in studio hours. Fresha calendar coming soon.",
  alternates: { canonical: "/book" },
};

const BOOKING_FAQ = [
  {
    q: "How do I book with Blade Boutique?",
    a: "WhatsApp Sam on +27 72 411 1476 is the fastest way. Replies are usually within 2 hours during studio hours (Mon-Fri 09:00-17:00, Sat 09:00-14:00). You can also submit the form on this page and Sam will message you back.",
  },
  {
    q: "Is a deposit required?",
    a: "A small booking deposit secures your slot and is applied to the final price on the day. Deposit details are confirmed in your WhatsApp booking conversation.",
  },
  {
    q: "What is the perfection session policy?",
    a: "All PMU prices include one perfection session within 4 weeks of your first treatment. This touch-up fine-tunes shape, density and colour after healing. Missed follow-ups will be charged.",
  },
  {
    q: "Can I reschedule my appointment?",
    a: "Yes. WhatsApp Sam as early as possible if you need to move your booking. Try to give at least 48 hours' notice so the slot can be offered to another client.",
  },
];

export default function BookPage() {
  const graph = [
    faqSchema(BOOKING_FAQ),
    breadcrumbSchema([
      { name: "Home", url: STUDIO.url },
      { name: "Book", url: `${STUDIO.url}/book` },
    ]),
  ];

  return (
    <div className="bb-container py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />
      <div className="max-w-2xl mb-12">
        <p className="bb-eyebrow mb-3">Book</p>
        <h1 className="bb-display-lg mb-6">Book your treatment.</h1>
        <p className="bb-body-lg">
          Two ways: WhatsApp Sam directly with a few details, or browse open
          slots on Fresha. Sam typically replies within 2 hours during studio
          hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <p className="bb-eyebrow mb-4">Book via WhatsApp</p>
          <BookingForm />
        </div>

        <aside className="lg:col-span-2">
          <p className="bb-eyebrow mb-4">Or browse open times</p>
          <div className="bg-bb-surface-alt rounded-[20px] p-8 border border-bb-line">
            {STUDIO.freshaUrl ? (
              <iframe
                src={STUDIO.freshaUrl}
                title="Fresha booking calendar"
                loading="lazy"
                className="w-full h-[480px] border-0 rounded-md"
              />
            ) : (
              <div className="text-center">
                <p className="text-bb-ink-soft mb-6 leading-relaxed">
                  The Fresha calendar is being set up. For now, please use the
                  WhatsApp form on the left. Sam responds within 2 hours
                  during studio hours.
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 bg-bb-surface rounded-[12px] p-6 border border-bb-line">
            <p className="bb-eyebrow mb-3">Studio hours</p>
            <ul className="space-y-1">
              {STUDIO.hours.map((h) => (
                <li key={h.day} className="text-bb-ink">
                  <span className="text-bb-ink-soft">{h.day}:</span>{" "}
                  {h.open ? `${h.open}–${h.close}` : "Closed"}
                </li>
              ))}
            </ul>
            <p className="bb-meta mt-4 text-bb-ink-mute">
              {STUDIO.fullAddress}
            </p>
          </div>
        </aside>
      </div>

      <section className="mt-20 max-w-3xl">
        <h2 className="bb-display-md mb-6">Before you book: what you should know</h2>
        <div className="space-y-6 bg-bb-surface-alt rounded-[12px] p-6 md:p-8">
          <div>
            <p className="bb-eyebrow mb-2">Perfection session included</p>
            <p className="text-bb-ink leading-relaxed">
              All PMU prices include one perfection session within 4 weeks of
              your first treatment. Missed follow-ups will be charged.
            </p>
          </div>
          <div>
            <p className="bb-eyebrow mb-2">Prep the day before</p>
            <p className="text-bb-ink leading-relaxed">
              Avoid caffeine and alcohol for 24 hours before. No blood thinners
              48 hours prior. No waxing or tinting in the area for 2 weeks.
              Full prep guide sent on booking.
            </p>
          </div>
          <div>
            <p className="bb-eyebrow mb-2">Session length</p>
            <p className="text-bb-ink leading-relaxed">
              Plan for 1 hour 30 minutes to 2 hours max for your initial session. Perfection and follow-up sessions run 45 minutes to 1 hour.
            </p>
          </div>
        </div>

        <h2 className="bb-display-md mb-8 mt-16">Booking FAQ</h2>
        <div className="space-y-6">
          {BOOKING_FAQ.map((item) => (
            <div key={item.q}>
              <h3 className="bb-display-sm mb-2">{item.q}</h3>
              <p className="text-bb-ink-soft leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
