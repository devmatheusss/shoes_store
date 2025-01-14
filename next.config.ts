import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-8f0ceda61e564d0986d83107698d1087.r2.dev"
      }
    ]
  }
};

export default nextConfig;
