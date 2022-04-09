import Link from 'next/link';
import Image from 'next/image';

export default function CoverImage({ title, src, slug, blurDataURL }) {
  if (!src) return null;
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout="fill"
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
        <Link href={`/blog/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
}
