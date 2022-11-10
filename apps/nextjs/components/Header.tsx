import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useGlobalContext } from 'context/GlobalProvider';
import MenuToggle from 'components/MenuToggle/MenuToggle';
import ModalMenuMobile from 'components/Modals/ModalMenuMobile';
// import ThemeButton from 'components/ThemeButton';
// import { useOnClickOutside } from 'lib/hooks';
import LocaleSwitcher from 'components/LocaleSwitcher';
import { themes } from 'themes';
import { ThemePaint, XIcon } from 'components/Icons';
import { useTheme } from 'next-themes';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

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

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { themePickerOpen, setThemePickerOpen } = useGlobalContext();
  const { t } = useTranslation('header');
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: 'free-snap',
    slides: {
      perView: 'auto',
      spacing: 15
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {themePickerOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            transition={{
              bounce: 0
            }}
            className="border-b relative bg-base-300"
          >
            <div className="w-full py-2">
              <h5 className="text-sm font-bold text-center w-full mb-4">
                SELECT THEME
              </h5>
              {/* <div className="overflow-x-scroll h-full flex items-center justify-start w-full"> */}
              <div ref={sliderRef} className="keen-slider mb-2 px-4">
                {themes.map((theme) => (
                  <div
                    className={`keen-slider__slide w-max min-w-max px-3 h-12 bg-base-100 flex gap-3 items-center font-semibold cursor-pointer rounded-xl border-2 border-spacing-3 border-transparent${
                      theme === resolvedTheme ? ' border-base-content' : ''
                    }`}
                    key={theme}
                    data-theme={theme}
                    onClick={() => setTheme(theme)}
                  >
                    <span>
                      {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="bg-primary w-2 h-6 rounded-lg"></span>
                      <span className="bg-secondary w-2 h-6 rounded-lg"></span>
                      <span className="bg-accent w-2 h-6 rounded-lg"></span>
                      <span className="bg-neutral w-2 h-6 rounded-lg"></span>
                    </div>
                  </div>
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
        )}
      </AnimatePresence>

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
      <ModalMenuMobile
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
