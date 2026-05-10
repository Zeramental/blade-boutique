import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

const categoryColor: Record<string, string> = {
  Brows: "text-bb-clay",
  Lips: "text-bb-pink",
  Aftercare: "text-bb-success",
  Advice: "text-bb-ink-soft",
  Eyes: "text-bb-clay",
};

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-bb-surface rounded-[20px] border border-bb-line overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-bb-pink/30"
    >
      <div className="aspect-[16/9] bg-bb-surface-alt overflow-hidden relative">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(170,64,167,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="p-6">
        <p
          className={`bb-eyebrow mb-2 ${categoryColor[post.category] ?? "text-bb-pink"}`}
        >
          {post.category}
        </p>
        <h3
          className="text-xl font-medium mb-3 line-clamp-2 group-hover:text-bb-pink transition-colors duration-200 leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {post.title}
        </h3>
        <p className="text-bb-ink-soft text-[15px] line-clamp-2 leading-relaxed mb-5">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 text-[13px] text-bb-ink-mute">
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
