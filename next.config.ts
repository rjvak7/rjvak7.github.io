import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // The static site does not import the optional Cloudflare-only database
  // starter, whose platform types are unavailable in GitHub's build runner.
  typescript: {
    ignoreBuildErrors: process.env.GITHUB_PAGES === "true",
  },
};

export default nextConfig;
