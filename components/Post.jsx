import Link from 'next/link'

export default function Post({ post }) {
  const {
    link,
    module: { meta },
  } = post
  console.dir(meta, {depth: null})
    if(!meta?.title) return null
  return (
      <article className='h-auto mx-auto mb-20 p-6 rounded overflow-hidden shadow-xl'>
        <Link href={'/blog' + link}>
          <a className='no-underline'>
            <h2 className='m-0 hover:text-blue-500'>{meta.title}</h2>
          </a>
        </Link>
        <h5 className='text-gray-700 text-base'>{meta.description}</h5>
        <p>{meta.date}</p>
        <p>{meta.author}</p>
      </article>
  )
}
