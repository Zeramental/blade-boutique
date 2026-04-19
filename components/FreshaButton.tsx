import { STUDIO } from "@/lib/studio";

type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[15px]",
  lg: "h-14 px-6 text-base",
};

export function FreshaButton({
  size = "md",
  label = "Or browse times on Fresha",
}: {
  size?: Size;
  label?: string;
}) {
  if (!STUDIO.freshaUrl) {
    return null;
  }

  return (
    <a
      href={STUDIO.freshaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 border border-bb-ink text-bb-ink hover:bg-bb-ink hover:text-bb-bg ${sizeClasses[size]}`}
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}
