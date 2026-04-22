import manifest from "./gallery-manifest.json";

export type GallerySlug = keyof typeof manifest;

export const GALLERY: Record<string, string[]> = manifest;

export function galleryFor(slug: string): string[] {
  return GALLERY[slug] ?? [];
}

export function allGalleryImages(): { slug: string; url: string }[] {
  return Object.entries(GALLERY).flatMap(([slug, urls]) =>
    urls.map((url) => ({ slug, url })),
  );
}
