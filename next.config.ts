import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // Performance
  poweredByHeader: false,          // Remove X-Powered-By header
  compress: true,                  // Enable gzip compression
  reactStrictMode: true,

  images: {
    unoptimized: true,             // Required for static export
    formats: ["image/avif", "image/webp"],
  },

  // Experimental performance features
  experimental: {
    optimizeCss: false,            // Disabled: requires critters which may not be installed
    optimizePackageImports: [
      "lucide-react",
      "recharts",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-tabs",
    ],
  },
};

export default nextConfig;
