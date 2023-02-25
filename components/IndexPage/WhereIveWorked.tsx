import { useRouter } from 'next/router';
import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { CgShapeTriangle } from 'react-icons/cg';

export default function WhereIveWorked() {
  const { t } = useTranslation(['index-page']);
  const { locale } = useRouter();
  const [active, setActive] = React.useState(1);
  return (
    <motion.div
      className="mb-32 scroll-mt-60 px-8 transition-all duration-500 ease-in-out sm:mb-60 md:px-28"
      id="experience"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, bounce: 0 }}
    >
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-6 grid grid-cols-[auto_1fr] items-center gap-4">
          <h2 className="text-2xl font-bold ">
            <span className="mr-1 text-xl font-normal text-primary">02.</span>{' '}
            {t('where-ive-worked')}
          </h2>
          <div className="h-[1px] w-full bg-base-content/60" />
        </div>
        <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
          {/* Places List Large Screens */}
          <ul className="relative hidden w-36 sm:block">
            <li>
              <button
                className={`h-12 w-full border-l-[3px] border-base-content/20 px-4 text-left hover:bg-primary/10 hover:text-primary${
                  active === 1 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(1)}
              >
                Vibra
              </button>
            </li>
            <li>
              <button
                className={`h-12 w-full border-l-[3px] border-base-content/20 px-4 text-left hover:bg-primary/10 hover:text-primary${
                  active === 2 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(2)}
              >
                Freelancer
              </button>
            </li>
            <li>
              <button
                className={`h-12 w-full border-l-[3px] border-base-content/20 px-4 text-left hover:bg-primary/10 hover:text-primary${
                  active === 3 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(3)}
              >
                Supernova
              </button>
            </li>
            <motion.div
              className="absolute left-0 top-0 h-12 w-[3px] bg-primary"
              initial={{ y: 0 }}
              animate={{ y: 48 * (active - 1) }}
              transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
            />
          </ul>
          {/* Places List Smalls Screens */}
          <ul className="no-scrollbar relative flex overflow-x-auto sm:hidden">
            <li>
              <button
                className={`h-12 w-28 border-b-[3px] border-base-content/20 px-4 hover:bg-primary/10 hover:text-primary${
                  active === 1 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(1)}
              >
                Vibra
              </button>
            </li>
            <li>
              <button
                className={`h-12 w-28 border-b-[3px] border-base-content/20 px-4 hover:bg-primary/10 hover:text-primary${
                  active === 2 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(2)}
              >
                Freelancer
              </button>
            </li>
            <li>
              <button
                className={`h-12 w-28 border-b-[3px] border-base-content/20 px-4 hover:bg-primary/10 hover:text-primary${
                  active === 3 ? ' text-primary' : ''
                }`}
                onClick={() => setActive(3)}
              >
                Supernova
              </button>
            </li>
            <motion.div
              className="absolute left-0 bottom-0 h-[3px] w-28 bg-primary"
              initial={{ x: 0 }}
              animate={{ x: 112 * (active - 1) }}
              transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
            />
          </ul>
          <div className="pt-2">
            {active === 1 && (
              <div>
                <h3 className="mb-1 text-xl font-semibold">
                  {t('co-founder')} & CTO{' '}
                  <span className="text-primary">@</span>{' '}
                  <a
                    className="link-primary link"
                    href="https://vibra.la"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Vibra
                  </a>
                </h3>
                <p className="text-sm text-base-content/60">
                  {format(new Date(2019, 11), 'MMM yyyy', {
                    locale: locale === 'es' ? es : undefined,
                  })}{' '}
                  - {t('present')}
                </p>
                <ul className="mt-4 grid gap-3 text-base-content/60">
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="mt-1 rotate-90 text-primary"
                      size={16}
                    />
                    <p>{t('vibra.1')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="mt-1 rotate-90 text-primary"
                      size={16}
                    />
                    <p>{t('vibra.2')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="mt-1 rotate-90 text-primary"
                      size={16}
                    />
                    <p>{t('vibra.3')}</p>
                  </li>
                </ul>
              </div>
            )}
            {active === 2 && (
              <div>
                <h3 className="mb-1 text-xl font-semibold">
                  Freelancer Full Stack Developer
                </h3>
                <p className="text-sm text-base-content/60">
                  {format(new Date(2016, 0), 'MMM yyyy', {
                    locale: locale === 'es' ? es : undefined,
                  })}
                  {' - '}
                  {format(new Date(2019, 11), 'MMM yyyy', {
                    locale: locale === 'es' ? es : undefined,
                  })}
                </p>
                <ul className="mt-4 grid gap-3 text-base-content/60">
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="mt-1 rotate-90 text-primary"
                      size={16}
                    />
                    <p>{t('freelancer.1')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="mt-1 rotate-90 text-primary"
                      size={16}
                    />
                    <p>{t('freelancer.2')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="mt-1 rotate-90 text-primary"
                      size={16}
                    />
                    <p>{t('freelancer.3')}</p>
                  </li>
                </ul>
              </div>
            )}
            {active === 3 && (
              <div>
                <h3 className="mb-1 text-xl font-semibold">
                  {t('owner')} <span className="text-primary">@</span>{' '}
                  <a
                    className="link-primary link"
                    href="https://www.youtube.com/watch?v=a4SC9yAnXok"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Supernova Fireworks
                  </a>
                </h3>
                <p className="text-sm text-base-content/60">
                  {format(new Date(2011, 0), 'MMM yyyy', {
                    locale: locale === 'es' ? es : undefined,
                  })}
                  {' - '}
                  {format(new Date(2016, 6), 'MMM yyyy', {
                    locale: locale === 'es' ? es : undefined,
                  })}
                </p>
                <ul className="mt-4 grid gap-3 text-base-content/60">
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="mt-1 rotate-90 text-primary"
                      size={16}
                    />
                    <p>{t('supernova.1')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="mt-1 rotate-90 text-primary"
                      size={16}
                    />
                    <p>{t('supernova.2')}</p>
                  </li>
                  <li className="grid grid-cols-[auto_1fr] gap-4">
                    <CgShapeTriangle
                      className="mt-1 rotate-90 text-primary"
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
