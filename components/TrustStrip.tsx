const ITEMS = [
  { label: "★★★★★ 5.0 Google", pink: true },
  { label: "40+ reviews" },
  { label: "12+ years experience" },
  { label: "Permablend + Evenflo pigments" },
  { label: "PhiBrows certified" },
  { label: "Balance Wellness Centre, Bromhof" },
];

export function TrustStrip() {
  return (
    <div className="bg-bb-surface border-y border-bb-line">
      <div className="bb-container py-3.5">
        <ul className="flex items-center gap-3 md:gap-5 overflow-x-auto md:justify-center snap-x snap-mandatory md:snap-none scrollbar-none">
          {ITEMS.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 md:gap-5 whitespace-nowrap snap-center"
            >
              <span
                className={`text-sm font-medium tracking-wide ${
                  item.pink ? "text-bb-pink font-semibold" : "text-bb-ink-soft"
                }`}
              >
                {item.label}
              </span>
              {i < ITEMS.length - 1 && (
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "rgba(170,64,167,0.35)" }}
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
