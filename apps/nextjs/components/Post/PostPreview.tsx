import { useTranslation } from 'next-i18next';
import { type Post } from 'contentlayer/generated';
import Link from 'next/link';
// import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';

export default function PostPreview({ post }: { post: Post }) {
  const { t } = useTranslation('header');
  return (
    <article className="mb-8 overflow-hidden">
      {/* <div className="cover-wrapper relative w-full">
        <CoverImage post={post} />
      </div> */}
      <div>
        <p className="mt-3">
          <DateFormatter
            dateString={new Date(post.publishedAt).toISOString()}
          />

          {' - '}
          {post.categories?.map((c, index) => {
            if (index === post.categories.length - 1) {
              return (
                <Link
                  href={`/blog/category/${c.slug}`}
                  key={index}
                  className="uppercase text-xs"
                >
                  {c.name}
                </Link>
              );
            }
            return (
              <Link
                href={`/blog/category/${c.slug}`}
                key={index}
                className="mr-1 uppercase text-xs"
              >
                {`${c.name},`}
              </Link>
            );
          })}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="no-underline text-2xl md:text-3xl"
        >
          {/* <a className="no-underline text-blue-700 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 text-xl">
            <h2 className="m-0 font-bold">{post.title}</h2>
          </a> */}

          <h2 className="my-1 font-bold">{post.title}</h2>
        </Link>
        <p className="tex-base mb-3">
          {post.summary}{' '}
          <Link href={`/blog/${post.slug}`} className="link">
            <span className="text-sm">{t('read-more')}</span>
          </Link>
        </p>
      </div>
    </article>
  );
}
