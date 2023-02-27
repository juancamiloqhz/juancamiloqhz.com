import Link from 'next/link';
import { type Post } from '@/contentlayer/generated';
import { useTranslation } from 'next-i18next';
// import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';

export default function PostPreview({ post }: { post: Post }) {
  const { t } = useTranslation('header');
  return (
    <article className="mb-10 overflow-hidden sm:mb-16">
      {/* <div className="cover-wrapper relative w-full">
        <CoverImage post={post} />
      </div> */}
      <Link
        href={`/blog/${post.slug}`}
        className="text-2xl text-primary md:text-3xl lg:text-4xl"
      >
        <h2 className="my-1 font-bold">{post.title}</h2>
      </Link>
      <div className="mb-2">
        <DateFormatter dateString={new Date(post.publishedAt).toISOString()} />

        {' ⋅ '}
        {post.categories?.map((c, index) => {
          return (
            <span key={index}>
              <Link
                href={`/blog/category/${c.slug}`}
                key={index}
                className="link font-serif uppercase md:text-xl"
              >
                {c.name}
              </Link>
              {index === post.categories.length - 1 ? '' : ', '}
            </span>
          );
        })}
      </div>

      <p className="mb-3 text-lg  md:text-xl">
        {post.summary}{' '}
        <Link
          href={`/blog/${post.slug}`}
          className="link-primary link whitespace-nowrap"
        >
          {t('read-more')}
        </Link>
      </p>
    </article>
  );
}
