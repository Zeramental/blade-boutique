import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { getAllPosts } from "@/lib/blog";
import { LOCATIONS, PSEO_SERVICE_SLUGS } from "@/lib/locations";

const BASE = "https://bladeboutique.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/pricing",
    "/gallery",
    "/about",
    "/book",
    "/contact",
    "/blog",
    "/microblading-johannesburg",
    "/permanent-makeup-pretoria",
  ];
  const now = new Date();

  const pseoRoutes: MetadataRoute.Sitemap = [];
  for (const slug of PSEO_SERVICE_SLUGS) {
    for (const loc of LOCATIONS) {
      pseoRoutes.push({
        url: `${BASE}/services/${slug}/${loc.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

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
    ...getAllPosts().map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...pseoRoutes,
  ];
}
