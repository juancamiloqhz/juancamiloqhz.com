import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedPostCard({
  title,
  summary,
  slug,
  image
}: {
  title: string;
  slug: string;
  image: string;
  summary: string;
}) {
  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <a className="group block relative w-full">
        <div className="image-wrapper relative h-52 md:h-60 shadow-2xl">
          <Image
            src={image}
            layout="fill"
            alt={title}
            objectFit="cover"
            objectPosition="center"
            // placeholder="blur"
            // blurDataURL={post.blurDataURL}
            className="rounded-lg z-0 group-hover:brightness-50 transition-all duration-100 ease-in-out"
          />
        </div>

        <div className="p-4 absolute top-0 bottom-0 left-0 right-0">
          <div className="font-bold text-3xl mb-2 text-white font-serif transition-all duration-500 ease-in-out">
            {title}
          </div>
          {/* <p className="p-4 absolute top-0 bottom-0 left-0 right-0 text-gray-100 text-xl opacity-0 mt-5 group-hover:opacity-100 group-hover:mt-0 transition-all duration-500 ease-in-out">
            {summary}
          </p> */}
        </div>
      </a>
    </Link>
  );
}
