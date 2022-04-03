import Link from 'next/link';
import Image from 'next/image';

export default function CoverImage({ title, src, slug, height, width }) {
  if (!src) return null;
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      width={width}
      height={height}
      className="rounded-md"
    />
  );
  return (
    <div>
      {slug ? (
        <Link href={`/blog/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
