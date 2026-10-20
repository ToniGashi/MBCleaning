import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75, 78, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1280],
  },
};

export default nextConfig;
