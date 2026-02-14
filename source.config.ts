import { defineCollections, defineConfig } from "fumadocs-mdx/config"
import remarkGfm from "remark-gfm"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import { z } from "zod"

export const blogPosts = defineCollections({
  type: "doc",
  dir: "./data/blog",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.string(),
    mainImage: z.string().optional(),
    featured: z.boolean().optional().default(false),
    categories: z
      .array(z.object({ name: z.string(), slug: z.string() }))
      .optional(),
    tags: z
      .array(z.object({ name: z.string(), slug: z.string() }))
      .optional(),
  }),
})

export default defineConfig({
  mdxOptions: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    remarkPlugins: [remarkGfm as any],
    rehypePlugins: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rehypeSlug as any,
      [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rehypeAutolinkHeadings as any,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})
