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
    <figure className="bg-bb-surface-alt rounded-[20px] p-8 h-full flex flex-col">
      <div
        className="text-bb-clay text-xl mb-4 tracking-widest"
        aria-label="Five out of five stars"
      >
        ★★★★★
      </div>
      <blockquote className="bb-display-sm flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="bb-meta text-bb-ink-soft mt-6">
        — {author}
        {detail && <span className="text-bb-ink-mute"> · {detail}</span>}
      </figcaption>
    </figure>
  );
}
