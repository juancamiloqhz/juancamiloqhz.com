import Link from 'next/link';
import CoverImage from './CoverImage';
import DateFormatter from './DateFormatter';

export default function PostPreview({ post }) {
  // console.dir(meta, { depth: null });
  if (!post?.title) return null;
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
        <Link href={`/blog/${post.slug}`}>
          <a className="no-underline text-blue-700 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-500">
            <h2 className="m-0 mt-3 font-serif font-bold">{post.title}</h2>
          </a>
        </Link>
        <p className="text-base mt-2">
          <DateFormatter dateString={post.date} /> -{' '}
          {post.categories?.map((category) => (
            <span
              key={category}
              className="mr-2 last:mr-0 uppercase text-sm font-serif"
            >
              {category}
            </span>
          ))}
          <span className="text-sm">{post.readTime + ' min read'}</span>
        </p>
        <p className="tex-base">{post.excerpt}</p>
      </div>
    </article>
  );
}
