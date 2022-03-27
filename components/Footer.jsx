import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-black">
      <div className="py-3 md:py-8 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link href="/">
          <a className="nav-link">Powered by </a>
        </Link>
      </div>
    </footer>
  );
}
