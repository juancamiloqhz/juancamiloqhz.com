import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useKeydown } from '../../lib/helpers';
import { XIcon, Close } from '../Icons';
import Link from 'next/link';
import ThemeButton from '../ThemeButton';
import { useTranslation } from 'next-i18next';

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
      staggerChildren: 0.1
      // when: 'beforeChildren'
    }
  },
  hidden: { opacity: 0, x: '100%' },
  exit: { opacity: 0, x: '100%' }
};

const item = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 }
};

function ModalElement({ onClose }) {
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
      onClick={(e) => e.stopPropagation()}
      className="fixed bg-black top-0 bottom-0 right-0 w-80 py-4 px-6 lg:hidden"
      animate="visible"
      initial="hidden"
      exit="exit"
      ariaLabel="Menu"
      role="dialog"
      tabIndex="-1"
      variants={dialogVariants}
      key="dialog"
    >
      {/* <motion.button
        onClick={onClose}
        className="absolute top-1 right-2 p-0 border-0"
      >
        <XIcon />
      </motion.button> */}
      <ul className="h-full flex flex-col mt-20 text-white">
        <motion.li variants={item} onClick={onClose} className="">
          <Link
            href="/"
            passHref
            className="text-primary no-underline font-normal leading-4 py-5 border-b border-white/20 w-full"
          >
            {t('home')}
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          onClick={onClose}
          className="py-5 border-b border-white/20"
        >
          <Link
            href="/blog"
            passHref
            className="no-underline font-normal leading-4"
          >
            {t('blog')}
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          onClick={onClose}
          className="py-5 border-b border-white/20"
        >
          <Link
            href="/dashboard"
            passHref
            className="no-underline font-normal leading-4"
          >
            Dashboard
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          onClick={onClose}
          className="py-5 border-b border-white/20"
        >
          <Link
            href="/mailinglist"
            passHref
            className="no-underline font-normal leading-4"
          >
            {t('mailList')}
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          onClick={onClose}
          className="py-5 border-b border-white/20"
        >
          <Link
            href="/work"
            passHref
            className="no-underline font-normal leading-4"
          >
            {t('work')}
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          onClick={onClose}
          className="py-5 border-b border-white/20"
        >
          <Link
            href="/guestbook"
            passHref
            className="no-underline font-normal leading-4"
          >
            {t('guestbook')}
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          onClick={onClose}
          className="py-5 border-b border-white/20"
        >
          <Link
            href="/about"
            passHref
            className="no-underline font-normal leading-4"
          >
            {t('about')}
          </Link>
        </motion.li>
        <motion.li variants={item} onClick={onClose} className="pt-5">
          <Link
            href="/contact"
            passHref
            className="no-underline font-normal leading-4"
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
    document.body
  );
}
