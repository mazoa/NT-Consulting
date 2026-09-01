import type { NextConfig } from "next";

const repo = "anatoly-mazo-compliance";
const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: githubPages ? `/${repo}` : "",
  assetPrefix: githubPages ? `/${repo}` : undefined,
};

export default nextConfig;
