import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/blog";
import { BlogPostContent } from "@/components/BlogPostContent";
import { BlogCard } from "@/components/BlogCard";
import { STUDIO } from "@/lib/studio";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      images: [{ url: post.featuredImage, alt: post.featuredImageAlt }],
    },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const sameCategory = allPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const recent = allPosts.filter(
    (p) => p.slug !== post.slug && p.category !== post.category,
  );
  const relatedPosts = [...sameCategory, ...recent].slice(0, 3);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: STUDIO.url },
    { name: "Journal", url: `${STUDIO.url}/blog` },
    { name: post.title, url: `${STUDIO.url}/blog/${post.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seo.title,
    description: post.seo.description,
    image: `${STUDIO.url}${post.featuredImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: "Sam",
      url: STUDIO.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Blade Boutique",
      url: STUDIO.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([breadcrumb, articleSchema])}
      />

      {/* Full-bleed hero */}
      <div className="relative w-full bg-bb-surface-alt overflow-hidden"
        style={{ aspectRatio: "21/9", minHeight: 240, maxHeight: 520 }}
      >
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(31,27,23,0.10) 0%, rgba(31,27,23,0.50) 100%)",
          }}
        />
        <div className="absolute bottom-7 left-0 right-0 bb-container">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full text-white"
            style={{
              background: "rgba(170,64,167,0.65)",
              backdropFilter: "blur(6px)",
            }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Article body */}
      <div className="bb-container py-12 md:py-16">
        <div className="max-w-[68ch] mx-auto">

          {/* Back to journal */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] text-bb-ink-mute hover:text-bb-pink transition-colors mb-8"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to journal
          </Link>

          {/* Title */}
          <h1
            className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-medium leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-bb-ink-mute pb-8 mb-8 border-b border-bb-line">
            <span>By Sam, Blade Boutique</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.updatedAt && (
              <>
                <span>·</span>
                <span>Updated {formatDate(post.updatedAt)}</span>
              </>
            )}
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>

          {/* Content blocks */}
          <BlogPostContent blocks={post.content} />
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-bb-line">
            <p className="bb-eyebrow mb-3">More from the journal</p>
            <h2
              className="bb-display-md mb-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Keep reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
