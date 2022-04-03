import Avatar from './Avatar';
import DateFormatter from './DateFormatter';
import CoverImage from './CoverImage';
import PostTitle from './PostTitle';
import Link from 'next/link';

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <header>
      <PostTitle>{title}</PostTitle>
      <div className="flex flex-col justify-center md:items-center mb-12">
        <div className="flex items-center">
          <DateFormatter dateString={date} />
          {' - '}
          <div className="flex flex-wrap items-center ml-2">
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
          </div>
        </div>
        {/* <Avatar name={author.name} src={author.picture} /> */}
      </div>
      <div className="mb-8 md:mb-16 max-w-3xl mx-auto">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
    </header>
  );
}
