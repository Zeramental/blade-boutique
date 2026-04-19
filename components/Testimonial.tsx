export function Testimonial({
  quote,
  author,
  detail,
}: {
  quote: string;
  author: string;
  detail?: string;
}) {
  return (
    <figure
      className="relative bg-bb-surface rounded-[20px] p-8 h-full flex flex-col border border-bb-line transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
    >
      {/* Subtle pink corner accent */}
      <div
        className="absolute top-0 left-0 w-24 h-24 rounded-br-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 0% 0%, rgba(170,64,167,0.07), transparent 70%)" }}
        aria-hidden="true"
      />

      <div
        className="text-lg mb-5 tracking-widest"
        aria-label="Five out of five stars"
        style={{ color: "var(--color-bb-pink)" }}
      >
        ★★★★★
      </div>
      <blockquote
        className="flex-1 text-bb-ink leading-relaxed text-xl"
        style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontVariationSettings: '"opsz" 14, "SOFT" 30' }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="bb-meta mt-6 pt-4 border-t border-bb-line/60">
        <span className="font-semibold text-bb-ink">{author}</span>
        {detail && (
          <span className="text-bb-ink-mute ml-2">· {detail}</span>
        )}
      </figcaption>
    </figure>
  );
}
