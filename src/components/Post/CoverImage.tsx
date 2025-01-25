import Image from "next/image"
import Link from "next/link"
import { Post } from "@/types"

// import { type Post } from "contentlayer/generated"

export default function CoverImage({ post }: { post: Post }) {
  const image = (
    <Image
      src={post.mainImage}
      alt={`Cover Image for ${post.title}`}
      // layout="fill"
      height={550}
      width={1200}
      className="rounded object-cover object-center md:rounded-md"
      placeholder="blur"
      blurDataURL={post.mainImageBlurDataURL}
    />
  )
  return (
    <Link
      href={`/blog/${post.slug}`}
      passHref
      aria-label={post.title}
      className="relative flex h-56 w-full sm:h-[365px]"
    >
      {image}
    </Link>
  )
}
