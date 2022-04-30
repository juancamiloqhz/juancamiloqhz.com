/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { useGlobalContext } from '../context/GlobalProvider';
import MenuToggle from './MenuToggle/MenuToggle';
import ModalMenuMobile from './Modals/ModalMenuMobile';
import ThemeButton from './ThemeButton';
import useDarkMode from '../hooks/useDarkMode';
import { XIcon } from './Icons';
import { useOnClickOutside } from '../lib/hooks';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header({ pageTitle }: { pageTitle?: string }) {
  const ref = useRef();
  const [colorTheme, setTheme] = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { themePickerOpen, setThemePickerOpen } = useGlobalContext();
  const { t } = useTranslation('header');
  useOnClickOutside(ref, () => setThemePickerOpen(false));
  const setThemeFn = (theme: string) => {
    setTheme(theme);
    setThemePickerOpen(false);
  };
  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter>
        {themePickerOpen && (
          <motion.div
            ref={ref}
            exit={{
              height: '0',
              transition: { ease: 'easeOut', duration: 0.3 }
            }}
            animate={{
              height: 'auto',
              transition: { ease: 'easeIn', duration: 0.3 }
            }}
            initial={{
              height: '0'
            }}
            className="overflow-y-hidden bg-gray-100 dark:bg-neutral-900 flex pt-4 relative"
          >
            <div className="h-28 mx-auto max-w-7xl w-full flex flex-col items-center justify-between">
              <h5 className="text-sm font-bold text-center w-full mb-2">
                SELECT THEME
              </h5>
              <div className="flex w-full gap-5 h-full overflow-x-auto pb-4">
                <button
                  type="button"
                  onClick={() => setThemeFn('light')}
                  className="theme-card bg-white ml-3 px-3 py-1 h-full m-0 rounded border-gray-200  dark:border-gray-600"
                >
                  <p className="flex flex-col dark:text-gray-800">Classic</p>
                </button>
                <button
                  type="button"
                  onClick={() => setThemeFn('dark')}
                  className="theme-card bg-black px-3 py-1 h-full m-0 rounded border-gray-200  dark:border-gray-600"
                >
                  <p className="flex flex-col text-white">Dark</p>
                </button>
                <button
                  type="button"
                  onClick={() => setThemeFn('light')}
                  className="theme-card bg-white px-3 py-1 h-full m-0 rounded border-gray-200  dark:border-gray-600"
                >
                  <p className="flex flex-col dark:text-gray-800">Classic</p>
                </button>
                <button
                  type="button"
                  onClick={() => setThemeFn('dark')}
                  className="theme-card bg-black px-3 py-1 h-full m-0 rounded border-gray-200  dark:border-gray-600"
                >
                  <p className="flex flex-col text-white">Dark</p>
                </button>
                <button
                  type="button"
                  onClick={() => setThemeFn('light')}
                  className="theme-card bg-white px-3 py-1 h-full m-0 rounded border-gray-200  dark:border-gray-600"
                >
                  <p className="flex flex-col dark:text-gray-800">Classic</p>
                </button>
                <button
                  type="button"
                  onClick={() => setThemeFn('dark')}
                  className="theme-card bg-black mr-3 px-3 py-1 h-full m-0 rounded border-gray-200  dark:border-gray-600"
                >
                  <p className="flex flex-col text-white">Dark</p>
                </button>
              </div>
              <motion.button
                onClick={() => setThemePickerOpen(false)}
                className="absolute top-1.5 right-1.5 border-0 p-0"
              >
                <XIcon />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="w-full top-0 bg-white dark:bg-black z-10">
        <div className="max-w-6xl h-20 md:h-28 px-8 flex justify-between items-center mx-auto">
          <Link href="/">
            <a className="nav-link flex items-center hover:opacity-80">
              <img
                src="/avatar.png"
                className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover mr-3"
                aria-label="Juan Camilo&lsquo;s Avatar"
                alt="Juan Camilo&lsquo;s Avatar"
              />
              JuanCamiloQHz
            </a>
          </Link>
          <div className="flex items-center">
            <div className="hidden md:flex gap-6 dark:text-gray-100 items-center mr-5">
              <Link href="/">
                <a className="nav-link">{t('home')}</a>
              </Link>
              <Link href="/blog">
                <a className="nav-link">{t('blog')}</a>
              </Link>
              <Link href="/work">
                <a className="nav-link">{t('work')}</a>
              </Link>
              <Link href="/about">
                <a className="nav-link">{t('about')}</a>
              </Link>
              <Link href="/contact">
                <a className="nav-link">{t('contact')}</a>
              </Link>
            </div>
            <LocaleSwitcher />
            <ThemeButton />
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="p-0 border-0 m-0 ml-3 flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full h-8 w-8"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <MenuToggle isOpen={mobileMenuOpen} size={20} />
              </button>
            </div>
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
