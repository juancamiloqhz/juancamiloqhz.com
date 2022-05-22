/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
// import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

// import useDarkMode from '../hooks/useDarkMode';
// import { XIcon } from './Icons';

import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useOnClickOutside } from 'lib/hooks';
import { useGlobalContext } from 'context/GlobalProvider';
import MenuToggle from 'components/MenuToggle';
import LocaleSwitcher from 'components/LocaleSwitcher';
import ThemeButton from 'components/ThemeButton';
import ModalMenuMobile from 'components/Modals/ModalMenuMobile';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={classNames(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'no-underline p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  );
}

export default function AdminHeader({ pageTitle }: { pageTitle?: string }) {
  const ref = useRef();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { themePickerOpen, setThemePickerOpen } = useGlobalContext();
  const { t } = useTranslation('header');
  useOnClickOutside(ref, () => setThemePickerOpen(false));

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
            {/* <div className="h-28 mx-auto max-w-5xl w-full flex flex-col items-center justify-between">
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
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
      <header className="w-full top-0 z-10 px-6 md:px-8">
        <div className="w-full h-20 md:h-24  flex justify-between items-center mx-auto">
          <div className="flex items-center justify-between w-full">
            <button
              type="button"
              className="p-0 border-0 m-0 flex items-center justify-center rounded-full sm:hidden hover:bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuToggle isOpen={mobileMenuOpen} size={20} />
            </button>
            <div className="hidden sm:flex items-center mr-5 ml-[-0.60rem]">
              <NavItem href="/" text={t('home')} />
              <NavItem href="/blog" text={t('blog')} />
              <NavItem href="/admin" text="Admin Dashboard" />
              <NavItem href="/admin/health" text="Health" />
            </div>
            <div className="flex items-center">
              <LocaleSwitcher />
              <ThemeButton />
            </div>
          </div>
        </div>
      </header>
      {pageTitle && (
        <div className="w-full h-14 md:h-56 flex items-center ">
          <div className="px-4 md:px-6 lg:px-8 mx-auto w-full flex items-center md:justify-center">
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
