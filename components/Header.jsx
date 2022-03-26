import Link from 'next/link';
import { useState } from 'react';

import MenuToggle from './MenuToggle/MenuToggle';
import ModalMenuMobile from './Modals/ModalMenuMobile';
import ThemeButton from './ThemeButton';

export default function Header({ pageTitle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b dark:border-gray-600 fixed top-0 bg-white dark:bg-black z-10">
        <div className="max-w-6xl h-16 md:h-20 px-4 md:px-6 lg:px-8 flex justify-between items-center mx-auto">
          <Link href="/">
            <a className="nav-link">JuanCamiloQhz</a>
          </Link>
          <div className="hidden md:flex gap-4 dark:text-gray-100">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
            <Link href="/work">
              <a className="nav-link">Work</a>
            </Link>
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
            <ThemeButton />
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="p-0 border-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuToggle isOpen={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </header>
      {pageTitle && (
        <div className="mt-16 md:mt-20 w-full h-24 md:h-28 flex items-center border-b dark:border-gray-600 bg-white dark:bg-black">
          <div className="px-4 md:px-6 ld:px-8 max-w-6xl mx-auto w-full flex items-center">
            <h1>{pageTitle}</h1>
          </div>
        </div>
      )}
      <ModalMenuMobile
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
