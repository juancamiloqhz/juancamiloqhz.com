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
      className="bg-white dark:bg-black fixed top-20 bottom-0 left-0 right-0 py-4 px-8"
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
        <Link href="/" passHref>
          <motion.a
            variants={item}
            onClick={onClose}
            className="nav-link !text-lg !leading-4 pb-5 border-bottom"
          >
            {t('home')}
          </motion.a>
        </Link>
        <Link href="/blog" passHref>
          <motion.a
            variants={item}
            onClick={onClose}
            className="nav-link !text-lg !leading-4 py-5 border-bottom"
          >
            {t('blog')}
          </motion.a>
        </Link>
        <Link href="/dashboard" passHref>
          <motion.a
            variants={item}
            onClick={onClose}
            className="nav-link !text-lg !leading-4 py-5 border-bottom"
          >
            Dashboard
          </motion.a>
        </Link>
        <Link href="/work" passHref>
          <motion.a
            variants={item}
            onClick={onClose}
            className="nav-link !text-lg !leading-4 py-5 border-bottom"
          >
            {t('work')}
          </motion.a>
        </Link>
        <Link href="/guestbook" passHref>
          <motion.a
            variants={item}
            onClick={onClose}
            className="nav-link !text-lg !leading-4 py-5 border-bottom"
          >
            {t('guestbook')}
          </motion.a>
        </Link>
        <Link href="/about" passHref>
          <motion.a
            variants={item}
            onClick={onClose}
            className="nav-link !text-lg !leading-4 py-5 border-bottom"
          >
            {t('about')}
          </motion.a>
        </Link>
        <Link href="/contact" passHref>
          <motion.a
            variants={item}
            onClick={onClose}
            className="nav-link !text-lg !leading-4 pt-5"
          >
            {t('contact')}
          </motion.a>
        </Link>
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
    <AnimatePresence initial={false} exitBeforeEnter>
      {props.isOpen && <ModalElement {...props} />}
    </AnimatePresence>,
    document.body
  );
}
