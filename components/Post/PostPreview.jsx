import Link from 'next/link';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';

export default function PostPreview({ post }) {
  if (!post?.title) return null;
  const categories = post.categories.map((c) => ({
    slug: c.split(':')[0],
    name: c.split(':')[1],
    link: `/blog/category/${c.split(':')[0]}`,
  }));
  // console.dir(meta, { depth: null });
  return (
    <article className="mb-16 overflow-hidden">
      <CoverImage
        title={post.title}
        slug={post.slug}
        src={post.coverImage}
        width="800"
        height="400"
      />
      <div className="px-4 md:px-0">
        <p className="text-base mt-3">
          <DateFormatter dateString={post.date} /> -{' '}
          {categories?.map((c, index) => {
            if (index === categories.length - 1) {
              return (
                <Link href={c.link} key={index}>
                  <a className="post-category uppercase text-sm font-serif">
                    {c.name}
                  </a>
                </Link>
              );
            }
            return (
              <Link href={c.link} key={index}>
                <a className="post-category mr-1 uppercase text-sm font-serif">{`${c.name},`}</a>
              </Link>
            );
          })}
        </p>
        <Link href={`/blog/${post.slug}`}>
          <a className="no-underline text-blue-700 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-500">
            <h2 className="m-0 font-serif font-bold">{post.title}</h2>
          </a>
        </Link>
        <p className="tex-base">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <Link href={`/blog/${post.slug}`}>
            <a className="no-underline text-blue-700 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-500">
              <span className="text-sm">Read more</span>
            </a>
          </Link>
          <span className="text-sm">{post.readTime + ' min read'}</span>
        </div>
      </div>
    </article>
  );
}
