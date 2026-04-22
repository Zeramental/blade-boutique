import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { allGalleryImages } from "@/lib/gallery";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Gallery: Real, Healed Permanent Makeup Results",
  description:
    "Before and after photos from Sam's permanent makeup work at Blade Boutique, Bromhof. Every photo a real client, healed at 4+ weeks. No filters.",
};

export default function GalleryPage() {
  const items = allGalleryImages();

  return (
    <div className="bb-container py-16 md:py-24">
      <p className="bb-eyebrow mb-3">Gallery</p>
      <h1 className="bb-display-lg mb-6 max-w-[20ch]">Healed results.</h1>
      <p className="bb-body-lg mb-16 max-w-[55ch]">
        Every photo here is a real client of mine, healed at 4+ weeks, with
        permission. No filters. No edits.&nbsp;— Sam
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ slug, url }, i) => (
          <BeforeAfter
            key={url}
            imageUrl={url}
            caption={getService(slug)?.name ?? slug}
            priority={i < 3}
          />
        ))}
      </div>

      <p className="bb-meta text-bb-ink-mute italic mt-16 max-w-[55ch]">
        All gallery images are shared with explicit, written consent from each
        client. Photos taken at the 4-week healed mark using studio lighting.
      </p>
    </div>
  );
}
