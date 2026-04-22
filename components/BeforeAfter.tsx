import Image from "next/image";

type BeforeAfterProps = {
  imageUrl?: string;
  caption?: string;
  priority?: boolean;
};

export function BeforeAfter({ imageUrl, caption, priority }: BeforeAfterProps) {
  const alt = caption
    ? `Before and after: ${caption}`
    : "Before and after treatment by Sam at Blade Boutique";

  return (
    <figure className="rounded-[20px] overflow-hidden border border-bb-line bg-bb-surface">
      <div className="relative aspect-square bg-bb-surface-alt">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority={priority}
          />
        ) : null}
        <span className="absolute top-3 left-3 bb-eyebrow bg-bb-bg/85 px-2 py-1 rounded-sm">
          Before
        </span>
        <span className="absolute top-1/2 left-3 -translate-y-1/2 mt-1 bb-eyebrow bg-bb-bg/85 px-2 py-1 rounded-sm">
          After
        </span>
      </div>
      {caption && (
        <figcaption className="bb-meta px-5 py-3 border-t border-bb-line">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
