import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useGlobalContext } from 'context/GlobalProvider';
import MenuToggle from 'components/MenuToggle/MenuToggle';
import ModalMenuMobile from 'components/Modals/ModalMenuMobile';
import ThemeButton from 'components/ThemeButton';
import { useOnClickOutside } from 'lib/hooks';
import LocaleSwitcher from 'components/LocaleSwitcher';
import { themes } from 'themes';
import { ThemePaint, XIcon } from './Icons';
import { useTheme } from 'next-themes';

function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={classNames(
        isActive ? 'font-semibold bg-base-200' : 'font-normal',
        ' no-underline p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-base-300 transition-all'
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}

export default function Header({ pageTitle }: { pageTitle?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { themePickerOpen, setThemePickerOpen } = useGlobalContext();
  const { t } = useTranslation('header');
  // useOnClickOutside(ref, () => setThemePickerOpen(false));

  return (
    <>
      <motion.div
        ref={ref}
        animate={{
          height: themePickerOpen ? 'auto' : 0
        }}
        transition={{
          bounce: 0
        }}
        className="overflow-y-hidden relative border-b"
      >
        <div className="h-28 w-full">
          <h5 className="text-sm font-bold text-center w-full my-2">
            SELECT THEME
          </h5>
          <div className="overflow-x-scroll h-full flex items-center justify-start w-full">
            {themes.map((theme) => (
              <button
                key={theme}
                type="button"
                onClick={() => setTheme(theme)}
                className={`btn btn-primary btn-outline mb-4 ml-5 last:mr-5${
                  theme === resolvedTheme ? ' btn-active' : ''
                }`}
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </button>
            ))}
          </div>
          <motion.button
            onClick={() => setThemePickerOpen(false)}
            className="absolute top-1.5 right-1.5 btn btn-ghost btn-circle btn-sm bg-base-200 hover:bg-base-300"
          >
            <XIcon />
          </motion.button>
        </div>
      </motion.div>

      <header className="w-full top-0 z-10 px-6 md:px-8">
        <div className="max-w-3xl w-full h-20 md:h-24  flex justify-between items-center mx-auto">
          <div className="flex items-center justify-between w-full">
            <button
              type="button"
              className="btn btn-ghost btn-circle btn-sm hover:bg-base-300 sm:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuToggle isOpen={mobileMenuOpen} size={20} />
            </button>
            <div className="hidden sm:flex items-center mr-5 ml-[-0.60rem] gap-1">
              <NavItem href="/" text={t('home')} />
              <NavItem href="/blog" text={t('blog')} />
              <NavItem href="/work" text={t('work')} />
              <NavItem href="/about" text={t('about')} />
              <NavItem href="/contact" text={t('contact')} />
            </div>
            <div className="flex items-center">
              <LocaleSwitcher />
              {/* <ThemeButton /> */}
              <button
                className="btn btn-ghost btn-sm btn-circle bg-base-200 hover:bg-base-300"
                onClick={() => setThemePickerOpen((d: boolean) => !d)}
              >
                <ThemePaint size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
      {pageTitle && (
        <div className="w-full h-14 md:h-56 flex items-center ">
          <div className="px-4 md:px-6 lg:px-8 max-w-3xl mx-auto w-full flex items-center md:justify-center">
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
