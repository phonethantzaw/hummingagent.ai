import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hummingagent.ai",
  assetPrefix: "/hummingagent.ai/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
