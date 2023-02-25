// import { XIcon, Close } from '../Icons';
import Link from 'next/link';
import React from 'react';
import FocusTrap from 'focus-trap-react';
import { AnimatePresence, motion } from 'framer-motion';
// import ThemeButton from '../ThemeButton';
import { useTranslation } from 'next-i18next';
import { createPortal } from 'react-dom';
import MenuToggle from '@/components/MenuToggle';
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
      staggerChildren: 0.07,
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
  onClose: () => void;
  isOpen: boolean;
};

function ModalElement({ onClose, isOpen }: ModalProps) {
  const { t } = useTranslation('header');
  useKeydown('Escape', onClose);

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
      <div
        className="fixed inset-0 z-50 w-full bg-base-300"
        role="dialog"
        key="dialog"
      />
      <button
        type="button"
        onClick={onClose}
        className="fixed top-6 right-10 z-[110] md:top-8 md:right-12"
      >
        <MenuToggle isOpen={isOpen} size={24} />
      </button>
      <motion.ul
        variants={list}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="fixed top-0 bottom-0 right-0 z-[100] flex w-full flex-col items-center justify-center gap-4 md:gap-6"
      >
        <motion.li variants={item}>
          <Link
            href="/"
            passHref
            onClick={onClose}
            className="link flex w-full text-2xl font-semibold no-underline md:text-4xl"
          >
            {t('home')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/blog"
            passHref
            className="link flex w-full text-2xl font-semibold no-underline md:text-4xl"
            onClick={onClose}
          >
            {t('blog')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/dashboard"
            passHref
            onClick={onClose}
            className="link flex w-full text-2xl font-semibold no-underline md:text-4xl"
          >
            Dashboard
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/mailinglist"
            passHref
            onClick={onClose}
            className="link flex w-full text-2xl font-semibold no-underline md:text-4xl"
          >
            {t('mailList')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/work"
            onClick={onClose}
            passHref
            className="link flex w-full text-2xl font-semibold no-underline md:text-4xl"
          >
            {t('work')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/guestbook"
            onClick={onClose}
            passHref
            className="link flex w-full text-2xl font-semibold no-underline md:text-4xl"
          >
            {t('guestbook')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/about"
            passHref
            onClick={onClose}
            className="link flex w-full text-2xl font-semibold no-underline md:text-4xl"
          >
            {t('about')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/contact"
            passHref
            onClick={onClose}
            className="link flex w-full text-2xl font-semibold no-underline md:text-4xl"
          >
            {t('contact')}
          </Link>
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
