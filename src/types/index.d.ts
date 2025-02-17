import type { MDX } from "contentlayer/core"
import * as Local from "contentlayer/source-files"

import { Category, Tag } from ".contentlayer/generated/types"
import * as Local from 'contentlayer/source-files'

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
  navItems: NavItem[]
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}
export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: "Post"
  featured: boolean
  title: string
  summary: string
  mainImage: string
  publishedAt: string
  categories: Category[]
  tags: Tag[]
  /** MDX file body */
  body: MDX
  readingTime: json
  wordCount: number
  slug: string
  locale: string
  mainImageBlurDataURL: string
}

export type Newsletter = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Newsletter'
  title: string
  publishedAt: string
  summary: string
  mainImage: string
  /** MDX file body */
  body: MDX
  readingTime: json
  wordCount: number
  slug: string
  locale: string
  mainImageBlurDataURL: string
}
