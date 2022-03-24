import Link from 'next/link';

export default function Post({ post }) {
  const {
    link,
    module: { meta },
  } = post;
  // console.dir(meta, {depth: null})
  if (!meta?.title) return null;
  return (
    <article className="h-auto mx-auto py-6 border-b last:border-b-0 overflow-hidden">
      <Link href={'/blog' + link}>
        <a>
          <h2 className="m-0">{meta.title}</h2>
        </a>
      </Link>
      <h5 className="tex-base">{meta.description}</h5>
      <p>{meta.date}</p>
      <p>{meta.author}</p>
      <span role="img" aria-label="one coffee">
        ☕ {meta.readTime + ' min read'}
      </span>
    </article>
  );
}
