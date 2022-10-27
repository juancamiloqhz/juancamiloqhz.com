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
    transition: {
      duration: 0.05,
      type: 'spring',
      damping: 50,
      stiffness: 400,
      staggerChildren: 0.07
      // when: 'beforeChildren'
    }
  },
  hidden: { opacity: 0 },
  exit: { opacity: 0 }
};

const item = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 }
};

function ModalElement({ children, onClose, title, dialogStyles, isOpen }) {
  const { t } = useTranslation('header');
  useKeydown('Escape', onClose);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => (document.body.style.overflowY = 'auto');
  }, [isOpen]);

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="bg-gray-50 dark:bg-gray-900 fixed top-16 bottom-0 left-0 right-0 py-4 px-6"
      animate="visible"
      initial="hidden"
      exit="exit"
      ariaLabel={title}
      role="dialog"
      tabIndex="-1"
      variants={dialogVariants}
      key="dialog"
      style={{ width: '100%', ...dialogStyles }}
    >
      {/* <motion.button
        onClick={onClose}
        className="absolute top-1 right-2 p-0 border-0"
      >
        <XIcon />
      </motion.button> */}
      <div className="h-full flex flex-col">
        <motion.li
          variants={item}
          onClick={onClose}
          className="pb-5 border-bottom"
        >
          <Link
            href="/"
            passHref
            className="no-underline font-normal leading-4"
          >
            {t('home')}
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          onClick={onClose}
          className="py-5 border-bottom"
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
          className="py-5 border-bottom"
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
          className="py-5 border-bottom"
        >
          <Link
            href="/newsletter"
            passHref
            className="no-underline font-normal leading-4"
          >
            {t('mailList')}
          </Link>
        </motion.li>
        <motion.li
          variants={item}
          onClick={onClose}
          className="py-5 border-bottom"
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
          className="py-5 border-bottom"
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
          className="py-5 border-bottom"
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
      </div>
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
