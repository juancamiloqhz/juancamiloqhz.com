import React from 'react';
import { motion } from 'framer-motion';
import { CgShapeTriangle } from 'react-icons/cg';
import { useTranslation } from 'next-i18next';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useRouter } from 'next/router';

export default function WhereIveWorked() {
  const { t } = useTranslation(['index-page']);
  const { locale } = useRouter();
  const [active, setActive] = React.useState(1);
  return (
    <motion.div
      className="px-8 md:px-28 transition-all duration-500 ease-in-out mb-32 sm:mb-60 scroll-mt-60"
      id="experience"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, bounce: 0 }}
    >
      <div className="w-full max-w-2xl mx-auto">
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center mb-6">
          <h2 className="text-2xl font-bold ">
            <span className="text-primary font-normal text-xl mr-1">02.</span>{' '}
            {t('where-ive-worked')}
          </h2>
          <div className="w-full h-[1px] bg-base-content/60" />
        </div>
        <div className="grid sm:grid-cols-[auto_1fr] gap-4">
          {/* Places List Large Screens */}
          <ul className="w-36 relative hidden sm:block">
            <li>
              <button
                className={`border-l-[3px] border-base-content/20 w-full text-left px-4 h-12 hover:bg-primary/10 hover:text-primary${
                  active === 1 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(1)}
              >
                Vibra
              </button>
            </li>
            <li>
              <button
                className={`border-l-[3px] border-base-content/20 w-full text-left px-4 h-12 hover:bg-primary/10 hover:text-primary${
                  active === 2 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(2)}
              >
                Freelancer
              </button>
            </li>
            <li>
              <button
                className={`border-l-[3px] border-base-content/20 w-full text-left px-4 h-12 hover:bg-primary/10 hover:text-primary${
                  active === 3 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(3)}
              >
                Supernova
              </button>
            </li>
            <motion.div
              className="absolute w-[3px] bg-primary h-12 left-0 top-0"
              initial={{ y: 0 }}
              animate={{ y: 48 * (active - 1) }}
              transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
            />
          </ul>
          {/* Places List Smalls Screens */}
          <ul className="relative flex sm:hidden overflow-x-auto no-scrollbar">
            <li>
              <button
                className={`border-b-[3px] border-base-content/20 w-28 px-4 h-12 hover:bg-primary/10 hover:text-primary${
                  active === 1 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(1)}
              >
                Vibra
              </button>
            </li>
            <li>
              <button
                className={`border-b-[3px] border-base-content/20 w-28 px-4 h-12 hover:bg-primary/10 hover:text-primary${
                  active === 2 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(2)}
              >
                Freelancer
              </button>
            </li>
            <li>
              <button
                className={`border-b-[3px] border-base-content/20 w-28 px-4 h-12 hover:bg-primary/10 hover:text-primary${
                  active === 3 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(3)}
              >
                Supernova
              </button>
            </li>
            <motion.div
              className="absolute h-[3px] bg-primary w-28 left-0 bottom-0"
              initial={{ x: 0 }}
              animate={{ x: 112 * (active - 1) }}
              transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
            />
          </ul>
          <div className="pt-2">
            {active === 1 && (
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {t('co-founder')} & CTO{' '}
                  <span className="text-primary">@</span>{' '}
                  <a
                    className="link link-primary"
                    href="https://vibra.la"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Vibra
                  </a>
                </h3>
                <p className="text-base-content/60 text-sm">
                  {format(new Date(2019, 11), 'MMM yyyy', {
                    locale: locale === 'es' ? es : undefined
                  })}{' '}
                  - {t('present')}
                </p>
                <ul className="mt-4 grid gap-3 text-base-content/60">
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>{t('vibra.1')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>{t('vibra.2')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>{t('vibra.3')}</p>
                  </li>
                </ul>
              </div>
            )}
            {active === 2 && (
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  Freelancer Full Stack Developer
                </h3>
                <p className="text-base-content/60 text-sm">
                  {format(new Date(2016, 0), 'MMM yyyy', {
                    locale: locale === 'es' ? es : undefined
                  })}
                  {' - '}
                  {format(new Date(2019, 11), 'MMM yyyy', {
                    locale: locale === 'es' ? es : undefined
                  })}
                </p>
                <ul className="mt-4 grid gap-3 text-base-content/60">
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>{t('freelancer.1')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>{t('freelancer.2')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>{t('freelancer.3')}</p>
                  </li>
                </ul>
              </div>
            )}
            {active === 3 && (
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {t('owner')} <span className="text-primary">@</span>{' '}
                  <a
                    className="link link-primary"
                    href="https://www.youtube.com/watch?v=a4SC9yAnXok"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Supernova Fireworks
                  </a>
                </h3>
                <p className="text-base-content/60 text-sm">
                  {format(new Date(2011, 0), 'MMM yyyy', {
                    locale: locale === 'es' ? es : undefined
                  })}
                  {' - '}
                  {format(new Date(2016, 6), 'MMM yyyy', {
                    locale: locale === 'es' ? es : undefined
                  })}
                </p>
                <ul className="mt-4 grid gap-3 text-base-content/60">
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>{t('supernova.1')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>{t('supernova.2')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="rotate-90 text-primary mt-1"
                      size={16}
                    />
                    <p>{t('supernova.3')}</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
