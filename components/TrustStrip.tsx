const ITEMS = [
  { label: "★★★★★ 4.9" },
  { label: "Google reviews" },
  { label: "8 Tin Road, Bromhof" },
  { label: "PhiBrows certified" },
  { label: "12+ years" },
];

export function TrustStrip() {
  return (
    <div className="bg-bb-surface border-y border-bb-line">
      <div className="bb-container py-4">
        <ul className="flex items-center gap-3 md:gap-6 overflow-x-auto md:justify-center snap-x snap-mandatory md:snap-none">
          {ITEMS.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 md:gap-6 bb-meta whitespace-nowrap snap-center"
            >
              <span>{item.label}</span>
              {i < ITEMS.length - 1 && (
                <span className="text-bb-ink-mute" aria-hidden="true">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
