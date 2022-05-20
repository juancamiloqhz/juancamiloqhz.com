import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedPostCard({
  title,
  summary,
  link,
  image,
  gradient
}: {
  title: string;
  link: string;
  image: string;
  summary: string;
  gradient: string;
}) {
  return (
    <Link href={link}>
      <a
        className={`transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 no-underline ${gradient}`}
      >
        {/* <div className="image-wrapper relative h-52 md:h-60 shadow-2xl">
          <Image
            src={image}
            layout="fill"
            alt={title}
            objectFit="cover"
            objectPosition="center"
            // placeholder="blur"
            // blurDataURL={post.blurDataURL}
            className="rounded-lg z-0 group-hover:brightness-50 transition-all duration-100 ease-in-out"
          />
        </div> */}

        <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg px-4 py-8">
          <div className="font-bold text-2xl font-serif transition-all duration-500 ease-in-out">
            {title}
          </div>
          {/* <p className="p-4 absolute top-0 bottom-0 left-0 right-0 text-gray-100 text-xl opacity-0 mt-5 group-hover:opacity-100 group-hover:mt-0 transition-all duration-500 ease-in-out">
            {summary}
          </p> */}
        </div>
      </a>
    </Link>
  );
}
