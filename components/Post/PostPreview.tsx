import Link from 'next/link';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';

export default function PostPreview({ post }) {
  if (!post?.title) return null;
  // console.dir(meta, { depth: null });
  return (
    <article className="mb-16 overflow-hidden px-4 md:px-0">
      <div className="cover-wrapper h-48 md:h-[365px] relative w-full">
        <CoverImage
          title={post.title}
          slug={post.slug}
          src={post.image}
          blurDataURL={post.blurDataURL}
        />
      </div>
      <div>
        <p className="text-base mt-3">
          <DateFormatter
            dateString={new Date(post.publishedAt).toISOString()}
          />{' '}
          -{' '}
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
        </p>
        <Link href={`/blog/${post.slug}`}>
          <a className="no-underline text-blue-700 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400">
            <h2 className="m-0 font-serif font-bold">{post.title}</h2>
          </a>
        </Link>
        <p className="tex-base">{post.summary}</p>

        <Link href={`/blog/${post.slug}`}>
          <a className="no-underline text-blue-700 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-500">
            <span className="text-sm">Read more</span>
          </a>
        </Link>
      </div>
    </article>
  );
}
