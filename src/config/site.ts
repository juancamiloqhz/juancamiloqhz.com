import { SiteConfig } from "@/types"

export const twitter = "https://x.com/juancamiloqhz"
export const github = "https://github.com/juancamiloqhz"
export const youtube = "https://www.youtube.com/@juancamiloqhz"
export const linkedin = "https://www.linkedin.com/in/juancamiloqhz"
export const instagram = "https://www.instagram.com/juancamiloqhz"

const navItems = [
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
]

export const siteConfig: SiteConfig = {
  name: "Juan Camilo QHz",
  initials: "JC",
  description: "AI Consultant and Software Engineer",
  url: "https://juancamiloqhz.com",
  ogImage: "https://juancamiloqhz.com/og.jpg",
  links: {
    twitter,
    github,
    // youtube,
    linkedin,
    // instagram,
  },
  headerNavItems: navItems,
  footer: {
    links: [
      { name: "Twitter", url: twitter },
      {
        name: "GitHub",
        url: github,
      },
      // {
      //   name: "YouTube",
      //   url: youtube,
      // },
      {
        name: "LinkedIn",
        url: linkedin,
      },
      {
        name: "Instagram",
        url: instagram,
      },
    ],
    navItems: [{ title: "Home", href: "/" }, ...navItems],
  },
}
