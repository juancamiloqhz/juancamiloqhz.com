import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { FiExternalLink } from 'react-icons/fi';

export default function SomeThingsIveBuilt() {
  const { t } = useTranslation('index-page');
  return (
    <motion.div
      className="mb-32 scroll-mt-40 px-8 transition-all duration-500 ease-in-out sm:mb-52 md:px-28"
      id="work"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, bounce: 0 }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-[1fr_auto] lg:gap-16">
          <div className="mb-10 grid items-center gap-4 sm:mb-14 sm:grid-cols-[auto_1fr]">
            <h2 className="text-2xl font-bold ">
              <span className="mr-1 text-xl font-normal text-primary">03.</span>{' '}
              {t('things-ive-built')}
            </h2>
            <div className="h-[1px] w-full bg-base-content/60" />
          </div>
          <div className="w-0 lg:w-72"></div>
        </div>
        <FeaturedProject />
      </div>
    </motion.div>
  );
}

function FeaturedProject() {
  const { t } = useTranslation('index-page');
  return (
    <div className="grid sm:grid-cols-[60%_1fr]">
      <div className="group relative h-fit w-full justify-self-center lg:justify-self-auto">
        <Image
          src="/assets/featured-projects/vibra-screenshot.png"
          alt="Vibra.la Screen Shot"
          height={380}
          width={700}
          //   fill
          className="rounded-[var(--rounded-btn)] border border-base-300 transition-all duration-500 ease-in-out"
          //   placeholder="blur"
          //   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpklEQVQokT2SS0sbURzFB6H9AO2X0LWge7+Am7ZBBRcKipI0BhN8xImvZJJ5xISJRKPkYQSfqJCIMakKPlE3guDCLF200PoBxCT3lHMpXfyZO3Pnnv/vnPtXLi4uPpdKpT+FQgF7e3uN7e1tLC8vi9bWVrS0tKCnpwejo6Po7e1FR0cHmpub0dTUhLa2NhEIBODz+eoejwcjIyNVXdc/KuVy+fvh4SH29/ffNzc3sb6+LlZWVtDV1YVcLofz83NcXl6iXC7j4OAAbMi99vZ2TExMCK/XS7Ga0+mEx+P5ppydnf0gXSqVqpMslUohHA5jamoKNzc3uL+/x+PjI+7u7nB9fS3XJycn6Ovrg9vtJr1wu901l8vF97xye3v76+joCIFAgBaEaZqYmZnB2NgYNjY2+B1+vx+7u7uYm5vDwMAA5ufnMTQ0hPHxcczOzgpVVRuqqnL9pDw8PNRphxusWCwGVjAYRCQSgcPhQHd3N4rFIqanp9HZ2YnBwUFMTk5C0zToui6CwaBgk1AoVFOen5/rp6enpBKapgnbthGPx5FOp7GzsyNJSV2tVmWObJLP52FZlmxqmqY891/w5eXlJ4OnYCQSEYuLi2Ctrq7i+PhYim5tbUnCtbU1MB7aNwxDipqmyXMNimua9qS8vr5Wrq6uoKpq3TAMkUgkJB0pMpkMSqWSzJKkjIIXkkwmEY1GQTeWZQld12u0Hw6H88rb25uLt+f3+99pLZFICApxPChMWtKEQiFpkQcpRnH+u7CwwP0aozAM46sC4FOlUvnNwA3DaLBrNpsVtEjbFPL5fOjv78fw8LC8cdbS0pKMJxaL1f9Zr2YymQ+KZVlKMpl0MlRd199t2xbZbJbW5JNiJCMl55MDTJuMhHNr23aNxPF4/Es0GlX+ArFlQxVMtgyfAAAAAElFTkSuQmCC"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[var(--rounded-btn)] bg-primary/40 transition-all duration-500 ease-in-out group-hover:bg-transparent" />
      </div>

      <div className="z-[2] mt-4 flex flex-col justify-center sm:mt-0 sm:items-end">
        <h4 className="text-sm text-primary">{t('featured-project')}</h4>
        <a
          href="https://vibra.la"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-between transition-all duration-300 ease-in-out hover:text-primary"
        >
          <h2 className="text-2xl font-bold">Vibra Real State</h2>
          <FiExternalLink size={22} className="sm:hidden" />
        </a>
        <div className="mt-2 rounded-[var(--rounded-btn)] sm:-ml-28 sm:mt-4 sm:bg-neutral sm:px-6 sm:py-3 sm:shadow-md">
          <p className="text-base-content/60 sm:my-3 sm:text-right sm:text-neutral-content">
            {t('vibra-project-description')}
          </p>
        </div>
        <p className="mt-4 flex flex-wrap items-center gap-4 font-mono text-sm sm:justify-end sm:text-right sm:text-xs">
          <span>React</span>
          <span>NextJS</span>
          <span>Typescript</span>
          <span>Node</span>
          <span>GraphQL</span>
          <span>PostgreSQL</span>
          <span>Styled Components</span>
          <span>Google Maps</span>
          <span>Cloudinary</span>
          <span>AWS</span>
        </p>
        <div
          className="tooltip tooltip-left mt-2 hidden transition-all duration-300 hover:text-primary sm:block"
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
