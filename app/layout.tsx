import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bladeboutique.co.za"),
  title: {
    default: "Blade Boutique — Permanent Makeup in Bromhof, Johannesburg",
    template: "%s · Blade Boutique",
  },
  description:
    "Honestly natural permanent makeup by Sam — microblading, powder brows, lip blush, eyeliner. Bromhof, Randburg. Twelve years of meticulous, precise work.",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Blade Boutique",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-ZA"
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bb-bg text-bb-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
