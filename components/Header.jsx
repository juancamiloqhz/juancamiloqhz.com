/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useGlobalContext } from '../context/GlobalProvider';

import MenuToggle from './MenuToggle/MenuToggle';
import ModalMenuMobile from './Modals/ModalMenuMobile';
import ThemeButton from './ThemeButton';
import useDarkMode from '../hooks/useDarkMode';
import { XIcon } from './Icons';

export default function Header({ pageTitle }) {
  const [colorTheme, setTheme] = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { themePickerOpen, setThemPickerOpen } = useGlobalContext();

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter>
        {themePickerOpen && (
          <motion.div
            exit={{ height: 0 }}
            animate={{ height: '6rem' }}
            className="overflow-y-hidden bg-gray-100 dark:bg-neutral-900 flex py-4 overflow-x-auto relative"
          >
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 w-full flex flex-col items-center justify-between">
              <h5 className="text-sm font-bold text-center w-full">
                SELECT THEME
              </h5>
              <div className="flex w-full gap-5 h-full">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className="theme-card bg-white px-3 py-1 h-full m-0 rounded border-gray-200  dark:border-gray-600"
                >
                  <p className="flex flex-col dark:text-gray-800">Classic</p>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className="theme-card bg-black px-3 py-1 h-full m-0 rounded border-gray-200  dark:border-gray-600"
                >
                  <p className="flex flex-col text-white">Dark</p>
                </button>
              </div>
              <motion.button
                onClick={() => setThemPickerOpen(false)}
                className="absolute top-1.5 right-1.5 border-0 p-0"
              >
                <XIcon />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="w-full top-0 bg-white dark:bg-black z-10">
        <div className="max-w-6xl h-20 md:h-28 px-4 md:px-6 lg:px-8 flex justify-between items-center mx-auto">
          <Link href="/">
            <a className="nav-link flex items-center hover:opacity-80">
              <img
                src="/face.png"
                className="rounded-full w-12 h-12 object-cover mr-3"
                aria-label="Juan Camilo&lsquo;s face"
                alt="Juan Camilo&lsquo;s face"
              />
              JuanCamiloQHz
            </a>
          </Link>
          <div className="hidden md:flex gap-6 dark:text-gray-100 items-center">
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
        <div className="w-full h-14 md:h-56 flex items-center ">
          <div className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto w-full flex items-center md:justify-center">
            <h1 className="font-serif font-bold text-3xl md:text-7xl">
              {pageTitle}
            </h1>
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
