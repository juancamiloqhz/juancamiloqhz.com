import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import LocaleSwitcher from '@/components/shared/LocaleSwitcher';
import MenuToggle from '@/components/shared/MenuToggle';
import ThemeButton from '@/components/shared/ThemeButton';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useOnClickOutside } from 'lib/hooks';
import { useTranslation } from 'next-i18next';
import ModalMenuMobile from '@/components/Modals/ModalMenuMobile';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={classNames(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'rounded-lg p-1 no-underline transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2',
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}

export default function AdminHeader({ pageTitle }: { pageTitle?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showThemePicker, setShowThemePicker] = React.useState(false);
  const { t } = useTranslation('header');
  useOnClickOutside(ref, () => setShowThemePicker(false));

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {showThemePicker && (
          <motion.div
            ref={ref}
            exit={{
              height: '0',
              transition: { ease: 'easeOut', duration: 0.3 },
            }}
            animate={{
              height: 'auto',
              transition: { ease: 'easeIn', duration: 0.3 },
            }}
            initial={{
              height: '0',
            }}
            className="relative flex overflow-y-hidden bg-gray-100 pt-4 dark:bg-neutral-900"
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
      <header className="top-0 z-10 w-full px-6 md:px-8">
        <div className="mx-auto flex h-20  w-full items-center justify-between md:h-24">
          <div className="flex w-full items-center justify-between">
            <button
              type="button"
              className="m-0 flex items-center justify-center rounded-full border-0 p-0 hover:bg-transparent sm:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuToggle isOpen={mobileMenuOpen} size={20} />
            </button>
            <div className="mr-5 ml-[-0.60rem] hidden items-center sm:flex">
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
        <div className="flex h-14 w-full items-center md:h-56 ">
          <div className="mx-auto flex w-full items-center px-4 md:justify-center md:px-6 lg:px-8">
            <h1 className="font-serif text-3xl font-bold md:text-7xl">
              {pageTitle}
            </h1>
          </div>
        </div>
      )}
      <ModalMenuMobile isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </>
  );
}
