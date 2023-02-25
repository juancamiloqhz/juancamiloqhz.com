import Link from 'next/link';
import Image from 'next/image';
import { type Post } from 'contentlayer/generated';

export default function CoverImage({ post }: { post: Post }) {
  const image = (
    <Image
      src={post.mainImage}
      alt={`Cover Image for ${post.title}`}
      // layout="fill"
      height={550}
      width={1200}
      className="rounded md:rounded-md object-cover object-center"
      placeholder="blur"
      blurDataURL={post.mainImageBlurDataURL}
    />
  );
  return (
    <Link
      href={`/blog/${post.slug}`}
      passHref
      aria-label={post.title}
      className="relative w-full h-56 sm:h-[365px] flex"
    >
      {image}
    </Link>
  );
}
