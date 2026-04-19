import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const BASE = "https://bladeboutique.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/pricing", "/gallery", "/about", "/book", "/contact"];
  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1.0 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
