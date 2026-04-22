"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-bb-bg/95 backdrop-blur-md shadow-sm border-b border-bb-line"
            : "bg-bb-bg/80 backdrop-blur-sm border-b border-bb-line/60"
        }`}
      >
        <div className="bb-container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Blade Boutique home"
            className="transition-opacity hover:opacity-80"
          >
            <Logo className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
                    active
                      ? "text-bb-pink"
                      : "text-bb-ink-soft hover:text-bb-ink"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-bb-pink transition-all duration-200 ${
                      active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <WhatsAppButton context={{ context: "hero" }} size="sm" />
            </div>
            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-md hover:bg-bb-surface-alt transition-colors"
            >
              <span className={`w-5 h-0.5 bg-bb-ink rounded-full transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`w-5 h-0.5 bg-bb-ink rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-bb-ink rounded-full transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition-all duration-300 ${open ? "visible" : "invisible"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-bb-ink/30 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <nav
          className={`absolute top-[64px] left-0 right-0 bg-bb-bg border-b border-bb-line shadow-lg transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="bb-container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-150 ${
                    active
                      ? "bg-bb-pink/10 text-bb-pink"
                      : "text-bb-ink hover:bg-bb-surface-alt"
                  }`}
                >
                  {link.label}
                  <span className={`text-lg ${active ? "text-bb-pink" : "text-bb-ink-mute"}`}>→</span>
                </Link>
              );
            })}
            <div className="pt-3 pb-1 border-t border-bb-line mt-2">
              <WhatsAppButton context={{ context: "hero" }} size="md" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
