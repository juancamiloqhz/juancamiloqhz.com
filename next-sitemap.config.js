/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://juancamiloqhz.com",
  generateRobotsTxt: true, // (optional)
  changefreq: "daily",
  priority: 0.7,
  exclude: [
    "/admin",
    "/es/admin",
    "/admin/health",
    "/es/admin/health",
    "/dashboard",
    "/es/dashboard",
  ],
  // ...other options
}
