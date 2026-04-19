"use client";

import { useState } from "react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-bb-line border-y border-bb-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full py-6 flex items-center justify-between gap-6 text-left hover:text-bb-clay transition-colors"
              aria-expanded={isOpen}
            >
              <span className="bb-display-sm flex-1">{item.q}</span>
              <span className="text-2xl text-bb-clay flex-shrink-0" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-12 text-bb-ink-soft leading-relaxed max-w-[65ch]">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
