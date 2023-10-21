export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}
