import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useKeydown } from '../../lib/helpers';
import { XIcon, Close } from '../Icons';
import Link from 'next/link';
import ThemeButton from '../ThemeButton';

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
      duration: 0.2,
      type: 'spring',
      damping: 50,
      stiffness: 400,
    },
  },
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
};

function ModalElement({ children, onClose, title, dialogStyles, isOpen }) {
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
      className="bg-white dark:bg-black fixed top-0 bottom-0 left-0 right-0"
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
      <motion.button
        onClick={onClose}
        className="absolute top-1 right-2 p-0 border-0"
      >
        <XIcon />
      </motion.button>
      <div className="items-center h-full flex flex-col text-center justify-center gap-8">
        <Link href="/">
          <a onClick={onClose} className="nav-link !text-3xl">
            {t('home')}
          </a>
        </Link>
        <Link href="/blog">
          <a onClick={onClose} className="nav-link !text-3xl">
            {t('blog')}
          </a>
        </Link>
        <Link href="/work">
          <a onClick={onClose} className="nav-link !text-3xl">
            {t('work')}
          </a>
        </Link>
        <Link href="/about">
          <a onClick={onClose} className="nav-link !text-3xl">
            {t('about')}
          </a>
        </Link>
        <Link href="/contact">
          <a onClick={onClose} className="nav-link !text-3xl">
            {t('contact')}
          </a>
        </Link>
      </div>
    </motion.div>
  );
}

ModalElement.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  dialogStyles: PropTypes.object,
};

export default function ModalMenuMobile(props) {
  if (!canUseDOM) return null;
  return createPortal(
    <AnimatePresence initial={false} exitBeforeEnter>
      {props.isOpen && <ModalElement {...props} />}
    </AnimatePresence>,
    document.body
  );
}
