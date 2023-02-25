import React from 'react';
import { motion, useCycle } from 'framer-motion';
import MenuToggle from './MenuToggle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 26px 43px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(1px at 26px 43px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function MotionCircleNavExample() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className="fixed top-0 left-0 bottom-0 right-0 z-50"
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 right-0 bg-red-500"
        variants={sidebar}
      />
      <Navigation />
      <button
        onClick={() => toggleOpen()}
        className="absolute top-[18px] left-[15px] h-[50px] w-[50px] rounded-full border-none bg-transparent outline-none"
      >
        <MenuToggle isOpen={isOpen} />
      </button>
    </motion.nav>
  );
}

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

function MenuItem({ i }: { i: number }) {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={MenuItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-0 mb-5 flex cursor-pointer items-center p-0"
    >
      <div
        className="icon-placeholder mr-5 h-5 w-10 flex-[40px_0] rounded-full"
        style={style}
      />
      <div
        className="text-placeholder h-5 w-52 flex-[1] rounded"
        style={style}
      />
    </motion.li>
  );
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function Navigation() {
  return (
    <motion.ul variants={variants} className="absolute top-24 m-0 w-full p-6">
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
}

const itemIds = [0, 1, 2, 3, 4];

function useDimensions(ref: React.MutableRefObject<any>) {
  const dimensions = React.useRef({ width: 0, height: 0 });

  React.useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
}
