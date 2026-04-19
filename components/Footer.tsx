import Link from "next/link";
import { Logo } from "./Logo";
import { STUDIO } from "@/lib/studio";

export function Footer() {
  return (
    <footer className="border-t border-bb-line mt-0" style={{ background: "#F2ECE3" }}>
      <div className="bb-container py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Logo className="h-14 md:h-16 w-auto mb-4 text-bb-ink" />
          <p className="bb-meta font-medium text-bb-ink">{STUDIO.venueName}</p>
          <p className="bb-meta">{STUDIO.address.street}, {STUDIO.address.suburb}, {STUDIO.address.city}, {STUDIO.address.postalCode}</p>
          <p className="bb-meta mt-1">
            <a href={`tel:${STUDIO.phone}`}>{STUDIO.phoneDisplay}</a> ·{" "}
            <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
          </p>
        </div>

        <div>
          <p className="bb-eyebrow mb-3">Hours</p>
          <ul className="space-y-1">
            {STUDIO.hours.map((h) => (
              <li key={h.day} className="bb-meta">
                {h.day}: {h.open ? `${h.open}–${h.close}` : "Closed"}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="bb-eyebrow mb-3">Visit</p>
          <ul className="space-y-1">
            <li><Link href="/services" className="bb-meta hover:text-bb-ink">Services</Link></li>
            <li><Link href="/gallery" className="bb-meta hover:text-bb-ink">Gallery</Link></li>
            <li><Link href="/pricing" className="bb-meta hover:text-bb-ink">Pricing</Link></li>
            <li><Link href="/about" className="bb-meta hover:text-bb-ink">About Sam</Link></li>
            <li><Link href="/book" className="bb-meta hover:text-bb-ink">Book</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bb-line">
        <div className="bb-container py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="bb-meta text-bb-ink-mute">
            © {new Date().getFullYear()} Blade Boutique. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href={STUDIO.social.instagram} target="_blank" rel="noopener noreferrer" className="bb-meta transition-colors hover:text-bb-pink">Instagram</a>
            <a href={STUDIO.social.facebook} target="_blank" rel="noopener noreferrer" className="bb-meta transition-colors hover:text-bb-pink">Facebook</a>
            <a href={STUDIO.social.tiktok} target="_blank" rel="noopener noreferrer" className="bb-meta transition-colors hover:text-bb-pink">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
