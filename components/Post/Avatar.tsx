import Image from 'next/image';
import Link from 'next/link';

export default function Avatar({ author }: { author: any }) {
  return (
    <Link
      href={`/author/${author.username}`}
      className="author-avatar flex items-center"
    >
      <Image
        src={author.picture}
        width={48}
        height={48}
        className="mr-4 h-12 w-12 rounded-full"
        alt={author.name}
      />
      <div className="text-xl font-bold">{author.name}</div>
    </Link>
  );
}
