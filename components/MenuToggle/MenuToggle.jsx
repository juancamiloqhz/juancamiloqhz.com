import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Path = ({ isOpen, ...props }) => (
  <motion.path
    className="stroke-current"
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    isOpen={isOpen}
    initial="closed"
    {...props}
  />
);

Path.propTypes = {
  isOpen: PropTypes.bool,
};

Path.defaultProps = {
  isOpen: false,
};

export default function MenuToggle({ isOpen, size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 23 20">
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        animate={isOpen ? 'open' : 'closed'}
      />
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        animate={isOpen ? 'open' : 'closed'}
      />
    </svg>
  );
}

MenuToggle.propTypes = {
  isOpen: PropTypes.bool,
  size: PropTypes.number,
};

MenuToggle.defaultProps = {
  isOpen: false,
  size: 23,
};
