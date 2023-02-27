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
          className="rounded-[var(--rounded-btn)] border border-base-300 transition-all duration-500 ease-in-out"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpElEQVR4nIWO248adRiGf7VdYGYZhmFngIEZzrAsu8txDxRY2mVbtsAqNdumNj0kbZOa6KU3VjkvGLOXRm2i1db4D2rTax/D1nipb/J+efK9+d58Ile8ylrQQjctrESaUDSJaviIxbYZfPGS7378nh9e/sxPv7zh1a+/8er179SutUlvlklmC5jRNMuOUrXFVrmOiK4XUXw6WtDEb0cvbMZSqLqO21DRwwn0YIRQNE0iWyS5USab3ydb2KdSu0G9dUKz3eewc4fM1g5CD1nkSlUCdpw108IXCBHP5tE0DY/iQdMDRGJJbnY/pn/3Ed3b9zg46rFbP6J13L/4NhxfJ7NVRnJ7ELKqEIzGKOw1yO/UWN8qktwsU69dpd+7Rbvdodlocnh4k4ePn/Ls08958vwzjo4/pNU+IZXLEwhHCYQiXF5xItQ1H4rmJZHdoLRXZXO7QCa/T+OgzknnmP7tHifdGs2DPLXaLt1en9PTOyQTCWzbxrRjGOEIHq/GlRUHQlbcuD0qms+L4Q+gqV68qsaqJGNbBo3KA/r7CzrFKe3qfY6aFa5VK9T3CqRCOgkzgB1P45RlHE4HYtkqSy78ho4VMrF1D8WoRikdprSd4XrjmE86j7nXOuVu9yNOe3WaOxtUkgYZUyMXNgiFLVyKG6fLiXBJMm5ZIhWz2EjF8XtVbL+PWEAjl4xQKWS41czS2rW5vpOhmk9zUEyTX4+gKB4iQYOwZeNyK0jyKkIIsRxcuSxwuC5dsLj0fic+EIgVgdMtkJeWBJJDsOoQOJfZP7crDulfFoPRkOFoyJdfv+DF+CsG0yHj+ZjpYsJoNmJ0NmY8n7A4X7A4n/HN+ZTFtzPO5lMmkwmz2RmL+ZzZZMRgOEAA/PHnO96+fbfE/9Bf/5O/19//X4nI31KcUwAAAABJRU5ErkJggg=="
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[var(--rounded-btn)] bg-primary/40 transition-all duration-500 ease-in-out group-hover:bg-transparent" />
      </div>

      <div className="z-[2] mt-4 flex flex-col justify-center sm:mt-0 sm:items-end">
        <h4 className="text-primary">{t('featured-project')}</h4>
        <div
          className="tooltip tooltip-left transition-all duration-300 hover:text-primary"
          data-tip="vibra.la"
        >
          <a
            href="https://vibra.la"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-between transition-all duration-300 ease-in-out hover:text-primary"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              Vibra Real State <FiExternalLink size={22} />
            </h2>
          </a>
        </div>
        <div className="mt-2 rounded-[var(--rounded-btn)] sm:-ml-28 sm:mt-4 sm:bg-neutral sm:px-6 sm:py-3 sm:shadow-md">
          <p className="text-base text-base-content/60 sm:my-3 sm:text-right sm:text-neutral-content">
            {t('vibra-project-description.1')}
            <br />
            {t('vibra-project-description.2')}
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
          <span>Framer Motion</span>
          <span>Radix UI</span>
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
