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
    // Next.js strips trailing slashes before running custom redirects, so
    // sources here must be the slash-stripped form or they never match.
    return [
      { source: "/whatsapp", destination: "/book", permanent: true },
      { source: "/2025/05/10/hello-world", destination: "/", permanent: true },
      { source: "/2025/05/09/jetpack-forms", destination: "/book", permanent: true },
      { source: "/2025/05/10/services", destination: "/services", permanent: true },
      { source: "/2025/05/07/location", destination: "/contact", permanent: true },
      { source: "/category/:slug*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
