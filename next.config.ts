import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images only — no external domains needed
    formats: ["image/avif", "image/webp"],
  },
  // Strict mode for better React dev experience
  reactStrictMode: true,
};

export default nextConfig;
