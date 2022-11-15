import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useGlobalContext } from 'context/GlobalProvider';
import MenuToggle from 'components/MenuToggle/MenuToggle';
import ModalMenuMobile from 'components/Modals/ModalMenuMobile';
import LocaleSwitcher from 'components/LocaleSwitcher';
import { themes } from 'themes';
import { ThemePaint, XIcon } from 'components/Icons';
import { useTheme } from 'next-themes';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

function NavItem({
  href,
  text,
  goTo
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
      className={classNames(
        isActive ? 'text-primary' : '',
        ' text-sm hover:text-primary'
      )}
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
      staggerChildren: 0.08
    }
  }
};

const liItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { bounce: 0 } }
};

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const { locale } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { themePickerOpen, setThemePickerOpen } = useGlobalContext();
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
      spacing: 15
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  const navItems = [
    { href: '/about', text: t('about'), goTo: 'about' },
    { href: '/experience', text: t('experience'), goTo: 'experience' },
    { href: '/work', text: t('work'), goTo: 'work' },
    { href: '/contact', text: t('contact'), goTo: 'contact' },
    { href: '/blog', text: t('blog') }
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
        className={`w-full top-0 fixed z-50${
          hasScrolled ? ' backdrop-blur bg-base-100/70' : ' bg-base-100'
        }`}
      >
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
              className="relative bg-base-300"
            >
              <div className="w-full pt-3">
                <h5 className="text-sm font-extrabold text-center w-full mb-4 text-primary">
                  SELECT THEME
                </h5>
                <div ref={sliderRef} className="keen-slider px-4">
                  {themes.map((theme) => (
                    <div
                      className="relative keen-slider__slide w-max min-w-max bg-transparent"
                      key={theme}
                      data-theme={theme}
                    >
                      <div
                        className={`mb-6 px-3 h-12 bg-base-100 flex gap-3 items-center font-semibold cursor-pointer rounded-[var(--rounded-btn)] border-2 border-spacing-3 border-transparent hover:border-primary${
                          theme === resolvedTheme ? ' border-primary' : ''
                        }`}
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
                      {theme === resolvedTheme && (
                        <div className="border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary w-0 h-0 absolute bottom-0 left-1/2 -translate-x-1/2" />
                      )}
                    </div>
                  ))}
                </div>
                <motion.button
                  onClick={() => setThemePickerOpen(false)}
                  className="absolute top-1.5 right-2 btn btn-ghost btn-circle btn-sm bg-base-200 hover:bg-base-300"
                >
                  <XIcon />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <nav
          className={`w-full h-16 lg:h-24 px-8 md:px-10 flex justify-between items-center${
            hasScrolled ? ' shadow-[0_4px_5px_rgba(0,0,0,0.1)]' : ''
          }`}
        >
          <Link
            href="/"
            passHref
            className="text-3xl text-primary font-bold hover:text-primary/70 transition-colors duration-300"
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
            className="hidden lg:flex items-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.li
                variants={liItem}
                key={i}
                className="flex items-end gap-2"
              >
                <span className="text-primary text-sm leading-none">
                  0{i + 1}.
                </span>{' '}
                <NavItem key={item.href} {...item} />
              </motion.li>
            ))}
            <div className="flex items-center gap-4">
              <motion.li variants={liItem}>
                <Link
                  href="/resume.pdf"
                  className="btn btn-outline btn-primary normal-case"
                  locale="en"
                  target="_blank"
                >
                  Resume
                </Link>
              </motion.li>
              <motion.li variants={liItem}>
                <LocaleSwitcher />
              </motion.li>
              <motion.li variants={liItem}>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={locale === 'es' ? 'Cambiar Tema' : 'Color Theme'}
                >
                  <button
                    className="btn btn-primary btn-outline group"
                    onClick={() => setThemePickerOpen((d: boolean) => !d)}
                  >
                    <ThemePaint size={20} />
                  </button>
                </div>
              </motion.li>
            </div>
          </motion.ul>
          <div className="lg:hidden flex items-center gap-4 -mr-[0.4rem]">
            <button
              className="btn btn-ghost btn-sm btn-circle group"
              onClick={() => setThemePickerOpen((d: boolean) => !d)}
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
      <ModalMenuMobile
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </div>
  );
}
