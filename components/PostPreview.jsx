import Link from 'next/link';

export default function PostPreview({ post }) {
  const {
    link,
    module: { meta },
  } = post;
  // console.dir(meta, { depth: null });
  if (!meta?.title) return null;
  return (
    <article className="py-6 mx-4 md:mx-6 lg:mx-8 overflow-hidden">
      <Link href={'/blog' + link}>
        <a className="no-underline text-blue-700 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-500">
          <h2 className="m-0 font-serif font-bold">{meta.title}</h2>
        </a>
      </Link>
      <p className="text-base">
        {meta.date} -{' '}
        {meta.categories?.map((category) => (
          <span
            key={category}
            className="mr-2 last:mr-0 uppercase text-sm font-serif"
          >
            {category}
          </span>
        ))}
        {/* <span className="text-sm">{meta.readTime + ' min read'}</span> */}
      </p>
      <h5 className="tex-base">{meta.description}</h5>
    </article>
  );
}
