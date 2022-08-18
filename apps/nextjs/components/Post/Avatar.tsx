import Image from 'next/image';
import Link from 'next/link';

export default function Avatar({ author }) {
  return (
    <Link href={`/author/${author.username}`}>
      <a className="author-avatar flex items-center">
        <Image
          src={author.picture}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full mr-4"
          alt={author.name}
        />
        <div className="text-xl font-bold">{author.name}</div>
      </a>
    </Link>
  );
}
