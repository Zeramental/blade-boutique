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
              className="w-full py-6 flex items-center justify-between gap-6 text-left group transition-colors duration-150"
              aria-expanded={isOpen}
            >
              <span
                className={`font-display text-[1.2rem] leading-snug flex-1 transition-colors duration-150 ${
                  isOpen ? "text-bb-pink" : "text-bb-ink group-hover:text-bb-pink"
                }`}
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {item.q}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 transition-all duration-200 ${
                  isOpen ? "rotate-45" : "rotate-0 group-hover:scale-110"
                }`}
                style={{
                  background: isOpen ? "rgba(170,64,167,0.12)" : "rgba(170,64,167,0.06)",
                  color: "var(--color-bb-pink)",
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pb-6 pr-14 text-bb-ink-soft leading-relaxed max-w-[65ch] text-[15px]">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
