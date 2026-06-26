import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAllPosts,
  getFeaturedPost,
  BLOG_CATEGORIES,
  type BlogCategory,
} from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { STUDIO } from "@/lib/studio";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Beauty & PMU Journal | Blade Boutique Fourways",
  description:
    "Honest advice on permanent makeup, brow treatments, and beauty from Sam at Blade Boutique in Fourways, Johannesburg. Read about microblading, powder brows, lip treatments, and aftercare.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const rawCategory = params.category;
  const activeCategory =
    typeof rawCategory === "string"
      ? (rawCategory as BlogCategory)
      : undefined;

  const featured = getFeaturedPost();
  const allPosts = getAllPosts();
  const filteredPosts = activeCategory
    ? allPosts.filter((p) => p.category === activeCategory)
    : allPosts;
  const gridPosts = filteredPosts.filter(
    (p) => p.featured !== true || activeCategory !== undefined,
  );

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: STUDIO.url },
    { name: "Journal", url: `${STUDIO.url}/blog` },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Beauty & PMU Journal | Blade Boutique Fourways",
    url: `${STUDIO.url}/blog`,
    description: "Permanent makeup advice, brow and lip treatment guides by Sam at Blade Boutique in Fourways, Johannesburg.",
    publisher: { "@id": `${STUDIO.url}#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allPosts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${STUDIO.url}/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <div className="bb-container py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([breadcrumb, collectionSchema])}
      />

      {/* Page header */}
      <div className="max-w-2xl mb-14">
        <p className="bb-eyebrow mb-3">The Studio Journal</p>
        <h1 className="bb-display-lg mb-5">Beauty that lasts.</h1>
        <p className="bb-body-lg">
          Honest advice on permanent makeup, healing, and getting the most out
          of your treatments — written by Sam from the studio.
        </p>
      </div>

      {/* Featured post — hidden when filtering by category */}
      {featured && !activeCategory && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group block bg-bb-surface rounded-[24px] border border-bb-line overflow-hidden mb-16 transition-all duration-300 hover:shadow-lg hover:border-bb-pink/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
            <div className="aspect-[16/9] lg:aspect-auto relative overflow-hidden min-h-[240px]">
              <Image
                src={featured.featuredImage}
                alt={featured.featuredImageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(170,64,167,0.06) 0%, transparent 50%)",
                }}
              />
            </div>
            <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(170,64,167,0.10)",
                    color: "var(--color-bb-pink)",
                  }}
                >
                  Featured
                </span>
                <span className="bb-eyebrow">{featured.category}</span>
              </div>
              <h2
                className="text-2xl md:text-[1.75rem] lg:text-[2rem] font-medium leading-snug mb-4 group-hover:text-bb-pink transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {featured.title}
              </h2>
              <p className="text-bb-ink-soft leading-relaxed mb-7 line-clamp-3 text-[15px]">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-[13px] text-bb-ink-mute">
                <time dateTime={featured.publishedAt}>
                  {new Intl.DateTimeFormat("en-ZA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(featured.publishedAt))}
                </time>
                <span>·</span>
                <span>{featured.readTime} min read</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/blog"
          className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors duration-150 ${
            !activeCategory
              ? "text-white border-transparent"
              : "bg-bb-surface border-bb-line text-bb-ink-soft hover:border-bb-pink/40 hover:text-bb-ink"
          }`}
          style={
            !activeCategory
              ? { background: "var(--color-bb-pink)" }
              : undefined
          }
        >
          All posts
        </Link>
        {BLOG_CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={`/blog?category=${cat}`}
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors duration-150 ${
              activeCategory === cat
                ? "text-white border-transparent"
                : "bg-bb-surface border-bb-line text-bb-ink-soft hover:border-bb-pink/40 hover:text-bb-ink"
            }`}
            style={
              activeCategory === cat
                ? { background: "var(--color-bb-pink)" }
                : undefined
            }
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Post grid */}
      {gridPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-bb-ink-soft text-center py-20">
          No posts in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
