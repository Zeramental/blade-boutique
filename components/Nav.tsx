import Link from "next/link";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-bb-bg/90 backdrop-blur-md border-b border-bb-line">
      <div className="bb-container flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          aria-label="Blade Boutique — home"
          className="text-bb-ink hover:text-bb-clay-deep transition-colors"
        >
          <Logo className="h-10 md:h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-bb-ink-soft hover:text-bb-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <WhatsAppButton context={{ context: "hero" }} size="sm" hideTextOnMobile />
        </div>
      </div>
    </header>
  );
}
