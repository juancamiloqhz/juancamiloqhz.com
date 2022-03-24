import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="py-3 md:py-8 px-2 md:px-4 lg:px-8 max-w-6xl mx-auto">
        <Link href="/">
          <a className="nav-link">
            Powered by{' '}
            <span className="">
              <Image
                src="/vercel.svg"
                alt="Juan Camilo Qhz"
                width={72}
                height={16}
              />
            </span>
          </a>
        </Link>
      </div>
    </footer>
  );
}
