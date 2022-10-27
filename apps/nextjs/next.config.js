const { withContentlayer } = require('next-contentlayer');
const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 */
// console.log('ENV: ', process.env.NODE_ENV);
module.exports = withContentlayer({
  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com' // Twitter Profile Picture
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  }
});
