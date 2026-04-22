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
      </div>
      {caption && (
        <figcaption className="bb-meta px-5 py-3 border-t border-bb-line">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
