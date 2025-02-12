import type { NextConfig } from "next"
import createMDX from "@next/mdx"

// import "./env.mjs";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  reactStrictMode: true,
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
      "pbs.twimg.com", // Twitter Profile Picture
    ],
  },
  // Note: Using the Rust compiler means we cannot use
  // rehype or remark plugins. For my app, this is fine.
  experimental: {
    mdxRs: true,
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
