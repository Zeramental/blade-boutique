import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import {
  jsonLd,
  localBusinessSchema,
  personSchema,
  websiteSchema,
} from "@/lib/jsonld";

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
    default:
      "Blade Boutique: Permanent Makeup Studio in Bromhof, Randburg",
    template: "%s · Blade Boutique",
  },
  description:
    "Award-quality permanent makeup by Sam in Bromhof, Randburg. Microblading, nano brows, powder brows, lip blush, dark lip neutralisation, eyeliner tattoo. Specialist in PMU for melanin-rich skin. Permablend + Evenflo pigments. 12+ years.",
  keywords: [
    "permanent makeup Johannesburg",
    "permanent makeup Randburg",
    "microblading Johannesburg",
    "nano brows Johannesburg",
    "powder brows Randburg",
    "lip blush South Africa",
    "dark lip neutralisation Johannesburg",
    "eyeliner tattoo Johannesburg",
    "cosmetic tattoo Randburg",
    "PMU Bromhof",
    "makeup tattoo Gauteng",
    "brow tattoo Johannesburg",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Blade Boutique",
    url: "https://bladeboutique.co.za",
    title: "Blade Boutique: Permanent Makeup Studio in Bromhof, Randburg",
    description:
      "Meticulous permanent makeup by Sam: microblading, nano brows, lip blush, dark lip neutralisation. Specialist in PMU for melanin-rich skin.",
    images: [
      {
        url: "/images/blade/sam-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Sam, Permanent Makeup Artist at Blade Boutique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blade Boutique: Permanent Makeup in Randburg",
    description:
      "Microblading, nano brows, lip blush, dark lip neutralisation by Sam. Bromhof, Randburg.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  category: "Beauty & Personal Care",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const graph = [
    localBusinessSchema(),
    personSchema(),
    websiteSchema(),
  ];

  return (
    <html
      lang="en-ZA"
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bb-bg text-bb-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(graph)}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
