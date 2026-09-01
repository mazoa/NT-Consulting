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
  env: {
    NEXT_PUBLIC_BASE_PATH: githubPages ? `/${repo}` : "",
  },
};

export default nextConfig;
