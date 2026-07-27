import type { Metadata } from "next";
import { BookingForm } from "./BookingForm";
import { STUDIO } from "@/lib/studio";
import { jsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Book Your Permanent Makeup Appointment at Blade Boutique, Fourways",
  description:
    "Book microblading, nano brows, lip blush, dark lip neutralisation or eyeliner with Sam at Blade Boutique, Fourways. Fill in the form or WhatsApp Sam directly — replies within 2 hours during studio hours.",
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
        <p className="bb-body-lg mb-4">
          Two ways to book: fill in the form below and Sam will WhatsApp you
          back, or message her directly. She typically replies within 2 hours
          during studio hours.
        </p>
        <p className="bb-meta text-bb-ink-mute">
          Studio in Fourways, Johannesburg · 15 min from Sandton · 5 min from Fourways Mall
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <p className="bb-eyebrow mb-4">Book via WhatsApp</p>
          <BookingForm />
        </div>

        <aside className="lg:col-span-2">
          <p className="bb-eyebrow mb-4">Prefer to message directly?</p>
          <div className="bg-bb-surface-alt rounded-[20px] p-8 border border-bb-line space-y-6">
            <div>
              <p className="bb-display-sm mb-2">WhatsApp Sam</p>
              <p className="text-bb-ink-soft leading-relaxed mb-4">
                Fastest way to book. Sam typically replies within 2 hours
                during studio hours. Just say which treatment you're interested in
                and your preferred dates.
              </p>
              <a
                href={`https://wa.me/${STUDIO.phone}?text=Hi%20Sam%2C%20I'd%20like%20to%20book%20a%20treatment%20at%20Blade%20Boutique.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-5 py-3 rounded-full transition-colors text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Message Sam on WhatsApp
              </a>
            </div>
            <div className="border-t border-bb-line pt-6">
              <p className="bb-eyebrow mb-2">What to include</p>
              <ul className="space-y-1 text-bb-ink-soft text-sm leading-relaxed">
                <li>Which treatment you want</li>
                <li>Your preferred dates or days</li>
                <li>First time or touch-up</li>
                <li>Any skin concerns</li>
              </ul>
            </div>
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
