import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Pour Cloudflare Pages
  experimental: {
    runtime: "edge",
  },
};

export default nextConfig;
