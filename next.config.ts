import type { NextConfig } from "next";

const isGhPages = process.env.GH_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGhPages ? '/jpl-tech-website' : undefined,
  assetPrefix: isGhPages ? '/jpl-tech-website' : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
