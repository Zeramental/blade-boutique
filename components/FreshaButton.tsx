import { STUDIO } from "@/lib/studio";

type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[15px]",
  lg: "h-14 px-6 text-base",
};

export function FreshaButton({
  size = "md",
  label = "View available times",
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
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 border-2 border-bb-pink text-bb-pink hover:bg-bb-pink hover:text-white hover:-translate-y-0.5 active:scale-[0.98] ${sizeClasses[size]}`}
    >
      {label}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
    </a>
  );
}
