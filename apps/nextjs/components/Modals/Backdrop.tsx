import { motion } from 'framer-motion';

export default function Backdrop({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: (props: any) => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      className="fixed left-0 right-0 top-0 bottom-0 backdrop-filter backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center"
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
