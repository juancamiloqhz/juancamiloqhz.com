import Link from 'next/link'

export default function Post({ post }) {
  const {
    link,
    module: { meta },
  } = post
  console.dir(meta, {depth: null})
    if(!meta?.title) return null
  return (
      <article className='h-auto mx-auto mb-20 p-6 rounded overflow-hidden'>
        <Link href={'/blog' + link}>
          <a className='no-underline'>
            <h2 className='m-0 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-300'>{meta.title}</h2>
          </a>
        </Link>
        <h5 className='text-gray-700 text-base'>{meta.description}</h5>
        <p>{meta.date}</p>
        <p>{meta.author}</p>
        <span role='img' aria-label='one coffee'>
          ☕ {meta.readTime + ' min read'}
        </span>
      </article>
  )
}
