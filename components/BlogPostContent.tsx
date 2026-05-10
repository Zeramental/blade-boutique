import type { ContentBlock } from "@/lib/blog";
import { STUDIO } from "@/lib/studio";

const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function BlogPostContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-bb-ink leading-[1.8] text-[17px]">
                {block.text}
              </p>
            );

          case "h2":
            return (
              <h2
                key={i}
                className="text-2xl md:text-[1.75rem] font-medium mt-12 mb-1 text-bb-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                className="text-xl font-medium mt-8 mb-1 text-bb-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {block.text}
              </h3>
            );

          case "pullquote":
            return (
              <blockquote
                key={i}
                className="border-l-4 pl-6 my-8 py-1"
                style={{ borderColor: "var(--color-bb-pink)" }}
              >
                <p
                  className="text-lg md:text-xl text-bb-ink leading-relaxed italic"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {block.text}
                </p>
              </blockquote>
            );

          case "tip":
            return (
              <div
                key={i}
                className="bg-bb-surface-alt rounded-[16px] p-6 border border-bb-line my-6"
              >
                <p className="bb-eyebrow mb-2">{block.heading}</p>
                <p className="text-bb-ink leading-relaxed text-[15px]">
                  {block.text}
                </p>
              </div>
            );

          case "list":
            return (
              <div key={i} className="my-2">
                {block.intro && (
                  <p className="text-bb-ink leading-[1.8] text-[17px] mb-3">
                    {block.intro}
                  </p>
                )}
                <ul className="space-y-2.5 ml-1">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-bb-ink leading-relaxed text-[16px]"
                    >
                      <span
                        className="mt-[9px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                        style={{ background: "var(--color-bb-pink)" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "cta":
            return (
              <div
                key={i}
                className="rounded-[20px] p-8 my-10 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(170,64,167,0.07) 0%, rgba(168,120,98,0.07) 100%)",
                  border: "1px solid rgba(170,64,167,0.14)",
                }}
              >
                <h3
                  className="text-xl md:text-2xl font-medium mb-3 text-bb-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {block.heading}
                </h3>
                <p className="text-bb-ink-soft mb-6 leading-relaxed text-[15px]">
                  {block.body}
                </p>
                <a
                  href={`https://wa.me/${STUDIO.whatsappNumber}?text=Hi%20Sam%2C%20I%20read%20your%20blog%20and%20I%27d%20like%20to%20find%20out%20more.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
                  style={{
                    background: "var(--color-bb-whatsapp)",
                  }}
                >
                  {WA_ICON}
                  Message Sam on WhatsApp
                </a>
              </div>
            );

          case "divider":
            return <hr key={i} className="border-bb-line my-10" />;

          default:
            return null;
        }
      })}
    </div>
  );
}
