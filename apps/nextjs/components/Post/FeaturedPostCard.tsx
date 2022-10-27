import Link from 'next/link';

export default function FeaturedPostCard({
  title,
  link,
  gradient
}: {
  title: string;
  link: string;
  gradient: string;
}) {
  return (
    <Link
      href={link}
      className={`transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 no-underline ${gradient}`}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg px-5 py-10">
        <div className="font-bold text-2xl font-serif transition-all duration-500 ease-in-out">
          {title}
        </div>
      </div>
    </Link>
  );
}
