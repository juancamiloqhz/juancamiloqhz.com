import Link from 'next/link';
import Image from 'next/image';

interface CoverImageProps {
  title: string;
  src: string;
  slug?: string;
  blurDataURL: string;
}

export default function CoverImage({
  title,
  src,
  slug,
  blurDataURL
}: CoverImageProps) {
  if (!src) return null;
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      // layout="fill"
      height={550}
      width={1200}
      className="rounded md:rounded-md"
      objectFit="cover"
      objectPosition="center"
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
  return (
    <>
      {slug ? (
        <Link href={`/blog/${slug}`} passHref>
          <a
            aria-label={title}
            className="relative w-full h-56 sm:h-[365px] flex"
          >
            {image}
          </a>
        </Link>
      ) : (
        image
      )}
    </>
  );
}
