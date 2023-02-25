import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useKeydown } from '../../lib/helpers';
// import { XIcon, Close } from '../Icons';
import Link from 'next/link';
// import ThemeButton from '../ThemeButton';
import { useTranslation } from 'next-i18next';
import MenuToggle from 'components/MenuToggle';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

// Up to Down animation
const dialogVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      bounce: 0,
      staggerChildren: 0.1,
      delayChildren: 0.2
      // when: 'beforeChildren'
    }
  },
  hidden: {
    opacity: 0,
    x: '100%',
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 }
};

function ModalElement({ onClose, isOpen }) {
  const { t } = useTranslation('header');
  useKeydown('Escape', onClose);
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflowY = 'hidden';
  //   } else {
  //     document.body.style.overflowY = 'auto';
  //   }
  //   return () => (document.body.style.overflowY = 'auto');
  // }, [isOpen]);

  return (
    <motion.div
      // onClick={(e) => e.stopPropagation()}
      className="fixed bg-black top-0 bottom-0 right-0 w-80 py-4 px-6 lg:hidden z-50 shadow-lg"
      animate="visible"
      initial="hidden"
      exit="exit"
      ariaLabel="Menu"
      role="dialog"
      tabIndex="-1"
      variants={dialogVariants}
      key="dialog"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-6 text-white"
      >
        <MenuToggle isOpen={isOpen} size={24} />
      </button>
      <ul className="h-full flex flex-col mt-20 text-white">
        <motion.li variants={item}>
          <Link
            href="/"
            passHref
            onClick={onClose}
            className="flex no-underline font-normal leading-4 py-5 border-b border-white/20 w-full"
          >
            {t('home')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/blog"
            passHref
            className="flex no-underline font-normal leading-4 py-5 border-b border-white/20 w-full"
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
            className="flex no-underline font-normal leading-4 py-5 border-b border-white/20 w-full"
          >
            Dashboard
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/mailinglist"
            passHref
            onClick={onClose}
            className="flex no-underline font-normal leading-4 py-5 border-b border-white/20 w-full"
          >
            {t('mailList')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/work"
            onClick={onClose}
            passHref
            className="flex no-underline font-normal leading-4 py-5 border-b border-white/20 w-full"
          >
            {t('work')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/guestbook"
            onClick={onClose}
            passHref
            className="flex no-underline font-normal leading-4 py-5 border-b border-white/20 w-full"
          >
            {t('guestbook')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/about"
            passHref
            onClick={onClose}
            className="flex no-underline font-normal leading-4 py-5 border-b border-white/20 w-full"
          >
            {t('about')}
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link
            href="/contact"
            passHref
            onClick={onClose}
            className="flex no-underline font-normal leading-4 py-5 w-full"
          >
            {t('contact')}
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
}

ModalElement.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  dialogStyles: PropTypes.object
};

export default function ModalMenuMobile(props) {
  if (!canUseDOM) return null;
  return createPortal(
    <AnimatePresence initial={false} mode="wait">
      {props.isOpen && <ModalElement {...props} />}
    </AnimatePresence>,
    document.getElementById('modal-root')
  );
}
