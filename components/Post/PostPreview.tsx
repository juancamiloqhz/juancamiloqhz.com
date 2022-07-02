import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';

export default function PostPreview({ post }) {
  const { t } = useTranslation('header');
  if (!post?.title) return null;
  // console.dir(meta, { depth: null });
  return (
    <article className="mb-12 overflow-hidden">
      {/* <div className="cover-wrapper relative w-full">
        <CoverImage
          title={post.title}
          slug={post.slug}
          src={post.image}
          blurDataURL={post.blurDataURL}
        />
      </div> */}
      <div>
        <p className="mt-3">
          <DateFormatter
            dateString={new Date(post.publishedAt).toISOString()}
          />
          {/*
            {' - '}
            {post.categories?.map((c, index) => {
              if (index === post.categories.length - 1) {
                return (
                  <Link href={`/category/${c.slug}`} key={index}>
                    <a className="post-category uppercase text-sm font-serif">
                      {c.name}
                    </a>
                  </Link>
                );
              }
              return (
                <Link href={`/category/${c.slug}`} key={index}>
                  <a className="post-category mr-1 uppercase text-sm font-serif">{`${c.name},`}</a>
                </Link>
              );
            })}
          */}
        </p>
        <Link href={`/blog/${post.slug}`}>
          {/* <a className="no-underline text-blue-700 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 text-xl">
            <h2 className="m-0 font-serif font-bold">{post.title}</h2>
          </a> */}
          <a className="no-underline text-2xl md:text-3xl">
            <h2 className="my-1 font-serif font-bold">{post.title}</h2>
          </a>
        </Link>
        <p className="tex-base mb-3">{post.summary}</p>

        <Link href={`/blog/${post.slug}`}>
          <a className="no-underline hover:underline text-blue-700 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-500">
            <span className="text-sm">{t('read-more')}</span>
          </a>
        </Link>
      </div>
    </article>
  );
}
