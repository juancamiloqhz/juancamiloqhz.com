import type { Metadata } from "next"
import { Link } from "next-view-transitions"

import { formatDate } from "@/lib/utils"
import { blog } from "@/lib/source"

export const metadata: Metadata = {
  title: "Blog",
}

export default function BlogPage() {
  const posts = blog
    .getPages()
    .sort(
      (a, b) =>
        new Date(b.data.publishedAt).getTime() -
        new Date(a.data.publishedAt).getTime()
    )

  return (
    <div>
      <h1 className="font-medium pt-12 mb-0 fade-in">Blog</h1>
      <ul className="not-prose list-none pl-0 mt-6">
        {posts.map((post) => (
          <li key={post.slugs.join("/")}>
            <Link
              href={post.url}
              className="flex items-baseline justify-between gap-4 py-2 no-underline transition-opacity hover:opacity-70"
            >
              <span className="text-foreground truncate">{post.data.title}</span>
              <span className="text-muted-foreground shrink-0 text-sm tabular-nums">
                {formatDate(post.data.publishedAt)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
