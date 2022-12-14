import { useTranslation } from 'next-i18next';
import { type Post } from 'contentlayer/generated';
import Link from 'next/link';
// import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';

export default function PostPreview({ post }: { post: Post }) {
  const { t } = useTranslation('header');
  return (
    <article className="mb-10 sm:mb-16 overflow-hidden">
      {/* <div className="cover-wrapper relative w-full">
        <CoverImage post={post} />
      </div> */}
      <Link
        href={`/blog/${post.slug}`}
        className="text-3xl md:text-4xl lg:text-5xl text-primary"
      >
        <h2 className="my-1 font-bold font-serif">{post.title}</h2>
      </Link>
      <div className="mb-2">
        <DateFormatter dateString={new Date(post.publishedAt).toISOString()} />

        {' ⋅ '}
        {post.categories?.map((c, index) => {
          return (
            <>
              <Link
                href={`/blog/category/${c.slug}`}
                key={index}
                className="link font-serif uppercase md:text-xl"
              >
                {c.name}
              </Link>
              {index === post.categories.length - 1 ? '' : ', '}
            </>
          );
        })}
      </div>

      <p className="text-lg md:text-xl  mb-3">
        {post.summary}{' '}
        <Link
          href={`/blog/${post.slug}`}
          className="link link-primary whitespace-nowrap"
        >
          {t('read-more')}
        </Link>
      </p>
    </article>
  );
}
