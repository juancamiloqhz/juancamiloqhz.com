import { motion } from 'framer-motion'

const Blanket = `
  // position: fixed;
  // top: 0;
  // left: 0;
  // height: 100%;
  // width: 100%;
  // background-color: rgb(0, 0, 0, 0.5);
  // backdrop-filter: blur(4px);
  // display: flex;
  // align-items: center;
  // justify-content: center;
  z-index: 20;
`

export default function Backdrop({ children, onClick }) {
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
  )
}
