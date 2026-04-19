export function BeforeAfter({
  beforeUrl,
  afterUrl,
  caption,
}: {
  beforeUrl?: string;
  afterUrl?: string;
  caption?: string;
}) {
  return (
    <figure className="rounded-[20px] overflow-hidden border border-bb-line bg-bb-surface">
      <div className="grid grid-cols-2">
        <div className="relative aspect-square bg-bb-surface-alt">
          <span className="absolute top-3 left-3 bb-eyebrow bg-bb-bg/80 px-2 py-1 rounded-sm">
            Before
          </span>
          {beforeUrl && (
            <img
              src={beforeUrl}
              alt={caption ? `Before: ${caption}` : "Before treatment"}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="relative aspect-square bg-bb-clay-soft border-l border-bb-clay">
          <span className="absolute top-3 left-3 bb-eyebrow bg-bb-bg/80 px-2 py-1 rounded-sm">
            After
          </span>
          {afterUrl && (
            <img
              src={afterUrl}
              alt={caption ? `After: ${caption}` : "After treatment"}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      {caption && (
        <figcaption className="bb-meta px-5 py-3 border-t border-bb-line">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
