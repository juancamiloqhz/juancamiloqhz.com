import { blogPosts } from "fumadocs-mdx:collections/server"
import { toFumadocsSource } from "fumadocs-mdx/runtime/server"
import { loader } from "fumadocs-core/source"

export const blog = loader({
  baseUrl: "/blog",
  source: toFumadocsSource(blogPosts, []),
})
