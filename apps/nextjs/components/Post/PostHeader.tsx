import Avatar from './Avatar';
import DateFormatter from './DateFormatter';
import CoverImage from './CoverImage';
import PostTitle from './PostTitle';
import Link from 'next/link';

export default function PostHeader({
  title,
  coverImage,
  publishedAt,
  author,
  categories,
  blurDataURL
}) {
  // console.log(post);
  const categoriesArr = categories?.map((c, index) => ({
    slug: c.split(':')[0],
    name: c.split(':')[1],
    link: `/category/${c.split(':')[0]}`
  }));
  return (
    <header>
      <PostTitle>{title}</PostTitle>
      <div className="flex flex-col justify-center md:items-center mb-6 md:mb-12">
        <div className="flex items-center">
          <DateFormatter dateString={new Date(publishedAt).toISOString()} />
          <span className="mx-1">{'-'}</span>
          <div className="flex flex-wrap items-center">
            {categoriesArr?.map((c, index) => {
              if (index === categoriesArr.length - 1) {
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
          </div>
        </div>
        {/* <Avatar author={author} /> */}
      </div>
      <div className="mb-8 md:mb-16 max-w-4xl mx-auto relative h-60 md:h-[420px] w-full">
        <CoverImage title={title} src={coverImage} blurDataURL={blurDataURL} />
      </div>
    </header>
  );
}
