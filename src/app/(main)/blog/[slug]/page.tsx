import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { formatDate } from "@/lib/utils"
import { blog } from "@/lib/source"
import { useMDXComponents } from "@/mdx-components"

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return blog.getPages().map((page) => ({
    slug: page.slugs.join("/"),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { slug } = await params
  const page = blog.getPage([slug])
  if (!page) return {}

  return {
    title: page.data.title,
    description: page.data.summary,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Params
}) {
  const { slug } = await params
  const page = blog.getPage([slug])
  if (!page) notFound()

  const MDX = page.data.body
  const components = useMDXComponents()

  return (
    <article>
      <h1 className="font-medium pt-12 mb-0 fade-in">{page.data.title}</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        {formatDate(page.data.publishedAt)}
      </p>
      <MDX components={components} />
    </article>
  )
}
