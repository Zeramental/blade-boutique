import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fkgigqodctfselcwsqfz.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async redirects() {
    return [
      // Old WordPress URL patterns → new pages (301 permanent)
      { source: "/gallery/", destination: "/gallery", permanent: true },
      { source: "/services/", destination: "/services", permanent: true },
      { source: "/about/", destination: "/about", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      { source: "/whatsapp/", destination: "/book", permanent: true },
      { source: "/2025/05/10/hello-world/", destination: "/", permanent: true },
      { source: "/2025/05/09/jetpack-forms/", destination: "/book", permanent: true },
      { source: "/2025/05/10/services/", destination: "/services", permanent: true },
      { source: "/2025/05/07/location/", destination: "/contact", permanent: true },
      { source: "/category/uncategorized/", destination: "/", permanent: true },
      { source: "/category/:slug/", destination: "/", permanent: true },
      // Trailing slash normalisation for anything else
      { source: "/:path+/", destination: "/:path+", permanent: true },
    ];
  },
};

export default nextConfig;
