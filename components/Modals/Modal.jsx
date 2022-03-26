import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useKeydown } from '../../lib/helpers';
import { XIcon, Close } from '../Icons';
import Backdrop from './Backdrop';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

// Newspaper animation
// const dialogVariants = {
//   hidden: {
//     transform: 'scale(0) rotate(720deg)',
//     opacity: 0,
//     transition: {
//       delay: 0.3,
//     },
//   },
//   visible: {
//     transform: ' scale(1) rotate(0deg)',
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   exit: {
//     transform: 'scale(0) rotate(-720deg)',
//     opacity: 0,
//     transition: {
//       duration: 0.3,
//     },
//   },
// };

// Flip animation
// const dialogVariants = {
//   hidden: {
//     transform: 'scale(0) rotateY(-360deg)',
//     opacity: 0,
//     transition: {
//       delay: 0.3,
//     },
//   },
//   visible: {
//     transform: ' scale(1) rotateY(0deg)',
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   exit: {
//     transform: 'scale(0) rotateY(360deg)',
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// Up to Down animation
const dialogVariants = {
  visible: {
    opacity: 1,
    y: '0',
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 50,
      stiffness: 400,
    },
  },
  hidden: { opacity: 0, y: '100vh' },
  exit: { opacity: 0, y: '100vh' },
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
    <Backdrop onClick={onClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg relative"
        animate="visible"
        initial="hidden"
        exit="exit"
        ariaLabel={title}
        role="dialog"
        tabIndex="-1"
        variants={dialogVariants}
        key="dialog"
        style={{ width: 'clamp(60%, 2600px, 95%)', ...dialogStyles }}
      >
        <motion.button onClick={onClose} className="absolute top-1.5 right-1.5">
          <XIcon />
        </motion.button>
        {title && (
          <div className="py-3 px-2 flex items-center justify-center border-b border-gray-500">
            <h1 className="text-xl">{title}</h1>
          </div>
        )}
        <div className="p-3">{children}</div>
      </motion.div>
    </Backdrop>
  );
}

ModalElement.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  dialogStyles: PropTypes.object,
};

ModalElement.defaultProps = {
  title: 'title',
};

export default function Modal(props) {
  if (!canUseDOM) return null;
  return createPortal(
    <AnimatePresence initial={false} exitBeforeEnter>
      {props.isOpen && <ModalElement {...props} />}
    </AnimatePresence>,
    document.body
  );
}
