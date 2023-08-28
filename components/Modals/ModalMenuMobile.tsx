// import { XIcon, Close } from '../Icons';
import Link from 'next/link';
import React from 'react';
import LocaleSwitcher from '@/components/shared/LocaleSwitcher';
import MenuToggle from '@/components/shared/MenuToggle';
import SocialLinks from '@/components/shared/SocialLinks';
import FocusTrap from 'focus-trap-react';
import { AnimatePresence, motion } from 'framer-motion';
// import ThemeButton from '@/components/shared/ThemeButton';
import { useTranslation } from 'next-i18next';
import { createPortal } from 'react-dom';
import { useKeydown } from '@/lib/helpers';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const list = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      when: 'afterChildren',
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      bounce: 0,
    },
  },
};

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

function ModalElement({ setIsOpen, isOpen }: ModalProps) {
  const { t } = useTranslation('header');
  useKeydown('Escape', () => setIsOpen(false));

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed inset-0 z-50 w-full bg-base-300" /> {/* backdrop */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="fixed top-6 right-6 z-[110] md:top-8 md:right-12"
      >
        <MenuToggle isOpen={isOpen} size={24} />
      </button>
      <motion.ul
        variants={list}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="fixed top-0 bottom-0 right-0 z-[100] flex w-full flex-col items-center justify-center gap-3"
      >
        <motion.li variants={item}>
          <Link
            href="/"
            passHref
            onClick={() => setIsOpen(false)}
            className="link flex w-full text-2xl font-semibold no-underline md:text-3xl"
          >
            {t('home')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/blog"
            passHref
            className="link flex w-full text-2xl font-semibold no-underline md:text-3xl"
            onClick={() => setIsOpen(false)}
          >
            {t('blog')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/dashboard"
            passHref
            onClick={() => setIsOpen(false)}
            className="link flex w-full text-2xl font-semibold no-underline md:text-3xl"
          >
            Dashboard
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/mailinglist"
            passHref
            onClick={() => setIsOpen(false)}
            className="link flex w-full text-2xl font-semibold no-underline md:text-3xl"
          >
            {t('mailList')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            // href="/work"
            href="/#work"
            onClick={() => setIsOpen(false)}
            passHref
            className="link flex w-full text-2xl font-semibold no-underline md:text-3xl"
          >
            {t('work')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/guestbook"
            onClick={() => setIsOpen(false)}
            passHref
            className="link flex w-full text-2xl font-semibold no-underline md:text-3xl"
          >
            {t('guestbook')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/about"
            passHref
            onClick={() => setIsOpen(false)}
            className="link flex w-full text-2xl font-semibold no-underline md:text-3xl"
          >
            {t('about')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/contact"
            passHref
            onClick={() => setIsOpen(false)}
            className="link flex w-full text-2xl font-semibold no-underline md:text-3xl"
          >
            {t('contact')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/JuanCamiloQHz_Resume_2023.pdf"
            passHref
            onClick={() => setIsOpen(false)}
            className="link flex w-full text-2xl font-semibold no-underline md:text-3xl"
          >
            {t('resume')}
          </Link>
        </motion.li>
        <motion.li variants={item} className="mt-4">
          <LocaleSwitcher />
        </motion.li>
        <motion.li variants={item} className="mt-4 flex items-center gap-5">
          <SocialLinks size={24} />
        </motion.li>
      </motion.ul>
    </>
  );
}

export default function ModalMenuMobile(props: ModalProps) {
  if (!canUseDOM) return null;
  return createPortal(
    <AnimatePresence initial={false} mode="wait">
      {props.isOpen && (
        <FocusTrap focusTrapOptions={{ initialFocus: false }}>
          <div className="absolute">
            <ModalElement {...props} />
          </div>
        </FocusTrap>
      )}
    </AnimatePresence>,
    document.body as HTMLElement,
  );
}
