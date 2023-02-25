import Link from 'next/link';

export default function FeaturedPostCard({
  title,
  link,
  gradient,
}: {
  title: string;
  link: string;
  gradient: string;
}) {
  return (
    <Link
      href={link}
      className={`w-full transform rounded-xl bg-gradient-to-r p-1 no-underline transition-all hover:scale-[1.01] md:w-1/3 ${gradient}`}
    >
      <div className="flex h-full flex-col justify-between rounded-lg bg-base-100 px-5 py-10">
        <div className="text-2xl font-bold transition-all duration-500 ease-in-out">
          {title}
        </div>
      </div>
    </Link>
  );
}
