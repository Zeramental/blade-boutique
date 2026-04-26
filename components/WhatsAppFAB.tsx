"use client";

import { usePathname } from "next/navigation";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppGlyph } from "./WhatsAppButton";
import { GA } from "@/lib/analytics";

const HIDE_ON_PATHS = ["/book"];

export function WhatsAppFAB() {
  const pathname = usePathname();
  if (HIDE_ON_PATHS.includes(pathname)) return null;

  return (
    <a
      href={whatsappLink({ context: "hero" })}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sam on WhatsApp"
      onClick={() => GA.whatsappClick("fab")}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full bg-bb-whatsapp text-white flex items-center justify-center hover:bg-bb-whatsapp-dk transition-colors group"
      style={{ boxShadow: "0 8px 24px rgba(37, 211, 102, 0.30)" }}
    >
      <WhatsAppGlyph className="w-7 h-7" />
      <span className="hidden md:block absolute right-full mr-3 whitespace-nowrap bg-bb-ink text-bb-bg text-sm px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with Sam
      </span>
    </a>
  );
}
