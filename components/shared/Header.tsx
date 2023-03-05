import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import LocaleSwitcher from '@/shared/LocaleSwitcher';
import MenuToggle from '@/shared/MenuToggle';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import { themes } from 'themes';
import { ThemePaint, XIcon } from '@/components/Icons';
import ModalMenuMobile from '@/components/Modals/ModalMenuMobile';

function NavItem({
  href,
  text,
  goTo,
}: {
  href: string;
  text: string;
  goTo?: string;
}) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={goTo ? `/#${goTo}` : href}
      className={`link ${classNames(
        isActive ? 'text-primary' : '',
        ' hover:text-primary',
      )}`}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}

const ulContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // delayChildren: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const liItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { bounce: 0 } },
};

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const { locale } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [showThemePicker, setShowThemePicker] = React.useState(false);
  const { t } = useTranslation('header');
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [scrollDir, setScrollDir] = React.useState('');
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: themes.findIndex((theme) => theme === resolvedTheme),
    mode: 'free-snap',
    slides: {
      perView: 'auto',
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const navItems = [
    { href: '/about', text: t('about'), goTo: 'about' },
    { href: '/experience', text: t('experience'), goTo: 'experience' },
    { href: '/work', text: t('work'), goTo: 'work' },
    { href: '/contact', text: t('contact'), goTo: 'contact' },
    { href: '/blog', text: t('blog') },
  ];

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    // console.log(scrollDir);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <div className="relative">
      <motion.header
        initial={false}
        animate={scrollDir === 'down' ? { y: -220 } : { y: 0 }}
        transition={{ bounce: 0 }}
        className={`fixed top-0 w-full z-50${
          hasScrolled ? ' bg-base-100/70 backdrop-blur' : ' bg-base-100'
        }`}
      >
        <AnimatePresence mode="wait">
          {showThemePicker && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                bounce: 0,
              }}
              className="relative bg-base-300"
            >
              <div className="w-full pt-3">
                <h5 className="mb-4 w-full text-center text-sm font-extrabold text-primary">
                  SELECT THEME
                </h5>
                <div ref={sliderRef} className="keen-slider px-4">
                  {themes.map((theme) => (
                    <div
                      className="keen-slider__slide relative w-max min-w-max bg-transparent"
                      key={theme}
                      data-theme={theme}
                    >
                      <div
                        className={`mb-6 flex h-12 border-spacing-3 cursor-pointer items-center gap-3 rounded-[var(--rounded-btn)] border-2 border-transparent bg-base-100 px-3 font-semibold hover:border-primary${
                          theme === resolvedTheme ? ' !border-primary' : ''
                        }`}
                        onClick={() => setTheme(theme)}
                      >
                        <span>
                          {theme === 'night' && locale === 'en'
                            ? 'Main'
                            : theme === 'night' && locale === 'es'
                            ? 'Principal'
                            : theme.charAt(0).toUpperCase() + theme.slice(1)}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="h-6 w-2 rounded-lg bg-primary"></span>
                          <span className="h-6 w-2 rounded-lg bg-secondary"></span>
                          <span className="h-6 w-2 rounded-lg bg-accent"></span>
                          <span className="h-6 w-2 rounded-lg bg-neutral"></span>
                        </div>
                      </div>
                      {theme === resolvedTheme && (
                        <div className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary" />
                      )}
                    </div>
                  ))}
                </div>
                <motion.button
                  onClick={() => setShowThemePicker(false)}
                  className="btn-ghost btn-sm btn-circle btn absolute top-1.5 right-2 bg-base-200 hover:bg-base-300"
                >
                  <XIcon />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <nav
          className={`flex h-16 w-full justify-between px-4 md:px-10 lg:h-24 items-center${
            hasScrolled ? ' shadow-[0_4px_5px_rgba(0,0,0,0.1)]' : ''
          }`}
        >
          <Link
            href="/"
            passHref
            className="text-3xl font-bold text-primary transition-colors duration-300 hover:text-primary/70"
          >
            <motion.span
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {'{ JC }'}
            </motion.span>
          </Link>
          <motion.ul
            variants={ulContainer}
            initial="hidden"
            animate="show"
            className="hidden items-center gap-4 lg:flex xl:gap-6"
          >
            {navItems.map((item, i) => (
              <motion.li
                variants={liItem}
                key={i}
                className="flex items-end gap-2"
              >
                <span className="text-sm leading-none text-primary">
                  0{i + 1}.
                </span>{' '}
                <NavItem key={item.href} {...item} />
              </motion.li>
            ))}
            <div className="flex items-center gap-4">
              <motion.li variants={liItem}>
                <Link
                  href="/resume.pdf"
                  className="btn-outline btn-primary btn normal-case"
                  locale="en"
                  target="_blank"
                >
                  {t('resume')}
                </Link>
              </motion.li>
              <motion.li variants={liItem}>
                <LocaleSwitcher isHeader />
              </motion.li>
              <motion.li variants={liItem}>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={locale === 'es' ? 'Cambiar Tema' : 'Color Theme'}
                >
                  <button
                    className="group btn-outline btn-primary btn"
                    onClick={() => setShowThemePicker((d: boolean) => !d)}
                  >
                    <ThemePaint size={20} />
                  </button>
                </div>
              </motion.li>
              <motion.li
                variants={liItem}
                className="flex items-center justify-center"
              >
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={locale === 'es' ? 'Menú' : 'Menu'}
                >
                  <button
                    type="button"
                    className="flex items-center justify-center"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <MenuToggle isOpen={mobileMenuOpen} size={24} />
                  </button>
                </div>
              </motion.li>
            </div>
          </motion.ul>
          <div className="-mr-[0.4rem] flex items-center gap-4 lg:hidden">
            <button
              className="group btn-ghost btn-sm btn-circle btn"
              onClick={() => setShowThemePicker((d: boolean) => !d)}
            >
              <ThemePaint size={20} />
            </button>
            <button
              type="button"
              className="flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuToggle isOpen={mobileMenuOpen} size={24} />
            </button>
          </div>
        </nav>
      </motion.header>
      <ModalMenuMobile isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </div>
  );
}
