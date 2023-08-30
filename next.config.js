const { withContentlayer } = require("next-contentlayer")
// import {i18n} from './next-i18next.config.mjs';

// import "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n,
  images: {
    domains: [
      "i.scdn.co", // Spotify Album Art
      "pbs.twimg.com", // Twitter Profile Picture
    ],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

// export default withContentlayer()(nextConfig)

module.exports = withContentlayer(nextConfig)
