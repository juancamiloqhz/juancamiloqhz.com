import { Link } from "next-view-transitions"

import { formatDate } from "@/lib/utils"
import { blog } from "@/lib/source"

import { NameTransition } from "./name"

export default function HomePage() {
  const posts = blog
    .getPages()
    .sort(
      (a, b) =>
        new Date(b.data.publishedAt).getTime() -
        new Date(a.data.publishedAt).getTime()
    )
    .slice(0, 3)

  return (
    <div>
      <NameTransition />
      <p className="leading-snug">
        I'm a frontend developer and mechanical engineer, blending the precision
        of engineering with the creativity of web development. I craft elegant
        solutions that bridge the gap between form and function, using modern
        technologies like React and Next.js to build exceptional user
        experiences.
      </p>

      <h2 className="font-medium mt-8 mb-3">Recent Writing</h2>
      <ul className="not-prose list-none pl-0">
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

      <h2 className="font-medium mt-8 mb-3">Contact</h2>
      <p className="leading-snug">
        Feel free to reach out via{" "}
        <a href="mailto:juancamiloqhz@gmail.com">email</a> or connect with me
        on social media.
      </p>
    </div>
  )
}
