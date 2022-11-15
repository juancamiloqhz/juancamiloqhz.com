import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

export default function SomeThingsIveBuilt() {
  return (
    <motion.div
      className="px-8 md:px-28 transition-all duration-500 ease-in-out mb-32 sm:mb-52 scroll-mt-40"
      id="work"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, bounce: 0 }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-[1fr_auto] lg:gap-16">
          <div className="grid sm:grid-cols-[auto_1fr] gap-4 items-center mb-10 sm:mb-14">
            <h2 className="text-2xl font-bold ">
              <span className="text-primary font-normal text-xl mr-1">03.</span>{' '}
              Some Things I've Built
            </h2>
            <div className="w-full h-[1px] bg-base-content/60" />
          </div>
          <div className="w-0 lg:w-72"></div>
        </div>
        <FeaturedProject />
      </div>
    </motion.div>
  );
}

function FeaturedProject() {
  return (
    <div className="grid sm:grid-cols-[60%_1fr]">
      <div className="group w-full h-fit relative justify-self-center lg:justify-self-auto">
        <Image
          src="/assets/featured-projects/vibra-screenshot.png"
          alt="Vibra.la Screen Shot"
          height={380}
          width={700}
          //   fill
          className="rounded-[var(--rounded-btn)] transition-all duration-500 ease-in-out border-base-300 border"
          //   placeholder="blur"
          //   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpklEQVQokT2SS0sbURzFB6H9AO2X0LWge7+Am7ZBBRcKipI0BhN8xImvZJJ5xISJRKPkYQSfqJCIMakKPlE3guDCLF200PoBxCT3lHMpXfyZO3Pnnv/vnPtXLi4uPpdKpT+FQgF7e3uN7e1tLC8vi9bWVrS0tKCnpwejo6Po7e1FR0cHmpub0dTUhLa2NhEIBODz+eoejwcjIyNVXdc/KuVy+fvh4SH29/ffNzc3sb6+LlZWVtDV1YVcLofz83NcXl6iXC7j4OAAbMi99vZ2TExMCK/XS7Ga0+mEx+P5ppydnf0gXSqVqpMslUohHA5jamoKNzc3uL+/x+PjI+7u7nB9fS3XJycn6Ovrg9vtJr1wu901l8vF97xye3v76+joCIFAgBaEaZqYmZnB2NgYNjY2+B1+vx+7u7uYm5vDwMAA5ufnMTQ0hPHxcczOzgpVVRuqqnL9pDw8PNRphxusWCwGVjAYRCQSgcPhQHd3N4rFIqanp9HZ2YnBwUFMTk5C0zToui6CwaBgk1AoVFOen5/rp6enpBKapgnbthGPx5FOp7GzsyNJSV2tVmWObJLP52FZlmxqmqY891/w5eXlJ4OnYCQSEYuLi2Ctrq7i+PhYim5tbUnCtbU1MB7aNwxDipqmyXMNimua9qS8vr5Wrq6uoKpq3TAMkUgkJB0pMpkMSqWSzJKkjIIXkkwmEY1GQTeWZQld12u0Hw6H88rb25uLt+f3+99pLZFICApxPChMWtKEQiFpkQcpRnH+u7CwwP0aozAM46sC4FOlUvnNwA3DaLBrNpsVtEjbFPL5fOjv78fw8LC8cdbS0pKMJxaL1f9Zr2YymQ+KZVlKMpl0MlRd199t2xbZbJbW5JNiJCMl55MDTJuMhHNr23aNxPF4/Es0GlX+ArFlQxVMtgyfAAAAAElFTkSuQmCC"
        />
        <div className="rounded-[var(--rounded-btn)] absolute top-0 bottom-0 left-0 right-0 bg-primary/40 group-hover:bg-transparent transition-all duration-500 ease-in-out" />
      </div>

      <div className="z-[2] mt-4 sm:mt-0 flex flex-col sm:items-end justify-center">
        <h4 className="text-primary text-sm">Featured Project</h4>
        <a
          href="https://vibra.la"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-primary transition-all duration-300 ease-in-out flex items-center justify-between"
        >
          <h2 className="text-2xl font-bold">Vibra Real State</h2>
          <FiExternalLink size={22} className="sm:hidden" />
        </a>
        <div className="sm:bg-neutral sm:px-6 sm:py-3 sm:-ml-28 mt-2 sm:mt-4 rounded-[var(--rounded-btn)] sm:shadow-md">
          <p className="sm:my-3 sm:text-right text-neutral-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            repudiandae quibusdam doloremque pariatur dol Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Aspernatur repudiandae quibusdam
            doloremque pariatur dol amet consectetur adipisicing elit.
            Aspernatur repudiandae quibusdam doloremque pariatur dol
          </p>
        </div>
        <p className="font-mono text-sm sm:text-xs sm:text-right mt-4 flex flex-wrap items-center gap-3 sm:justify-end">
          <span>React</span>
          <span>NextJS</span>
          <span>Typescript</span>
          <span>Node</span>
          <span>GraphQL</span>
          <span>PostgreSQL</span>
          <span>Styled Components</span>
        </p>
        <div
          className="tooltip tooltip-left mt-2 hover:text-primary transition-all duration-300 hidden sm:block"
          data-tip="vibra.la"
        >
          <a href="https://vibra.la" target="_blank" rel="noreferrer noopener">
            <FiExternalLink size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}
