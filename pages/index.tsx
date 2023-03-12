import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Container from '@/shared/Container';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BsChevronCompactDown } from 'react-icons/bs';
import {
  ContactMe,
  SomeThingsIveBuilt,
  WhereIveWorked,
} from '@/components/IndexPage';

// import blurImage from '@/lib/blur-images';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.08 * 9,
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { bounce: 0 } },
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // const { imgBase64 } = await blurImage(
  //   '/assets/featured-projects/vibra-screenshot.png',
  // );
  // console.log(imgBase64);
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'index-page',
        'footer',
        'header',
        'mailinglist',
        'contact-page',
      ])),
    },
  };
};

export default function Home() {
  const { t } = useTranslation('index-page');
  return (
    <Container
      exclusiveTitle={`${t('metaTitle')}`}
      description={`${t('metaDescription')}`}
      schemaType="WebSite"
    >
      {/* Hero */}
      <div className="relative flex h-screen max-h-screen min-h-screen w-full items-center justify-center px-4 transition-all duration-500 ease-in-out md:px-28">
        <motion.div
          variants={variants}
          className="mx-auto w-full max-w-5xl"
          initial="hidden"
          animate="show"
        >
          <motion.h4
            variants={item}
            className="mb-1 text-lg text-primary xs:mb-4 xs:text-xl md:mb-6"
          >
            👋 {t('hi')}
          </motion.h4>
          <motion.h1
            variants={item}
            className="text-4xl font-bold xs:text-5xl md:text-6xl lg:text-7xl"
          >
            Juan Camilo Quintero
          </motion.h1>
          <motion.h2
            variants={item}
            className="mt-1 text-4xl font-bold text-primary xs:text-5xl md:mt-3 md:text-6xl lg:text-7xl"
          >
            {t('iDo')}
          </motion.h2>
          <div className="space-y-1">
            <motion.p
              variants={item}
              className="mt-2 max-w-xl leading-6 text-base-content/60 xs:leading-7 md:mt-8"
            >
              {t('professionDescription.1')}
            </motion.p>
            <motion.p
              variants={item}
              className="max-w-xl leading-6 text-base-content/60 xs:leading-7 md:mt-2"
            >
              {t('professionDescription.2')}
            </motion.p>
          </div>
        </motion.div>
        <BsChevronCompactDown
          size={30}
          className="absolute left-1/2 bottom-3 -translate-x-1/2 cursor-pointer"
          onClick={() => {
            document
              .getElementById('about')
              ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }}
        />
      </div>
      {/* About me */}
      <motion.div
        className="mb-32 scroll-mt-60 px-4 transition-all duration-500 ease-in-out sm:mb-60 md:px-28"
        id="about"
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, bounce: 0 }}
      >
        <div className="mx-auto w-full max-w-4xl">
          <div className="grid grid-cols-[1fr_auto] lg:gap-16">
            <div className="mb-6 grid grid-cols-[auto_1fr] items-center gap-4">
              <h2 className="text-2xl font-bold ">
                <span className="mr-1 text-xl font-normal text-primary">
                  01.
                </span>{' '}
                {t('about-me.title')}
              </h2>
              <div className="h-[1px] w-full bg-base-content/60" />
            </div>
            <div className="w-0 lg:w-72"></div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="space-y-3 text-base-content/60">
              <p>{t('about-me.1')}</p>
              <p>
                <Trans ns="index-page" i18nKey="about-me.2">
                  I've always been fascinated by the internet and how it can
                  impact people's and businesses'. I've spent the past 6 years
                  working and developing different projects and companies, with
                  an emphasis on the best user experience and performance. I'm
                  currently the Co Founder and CTO at
                  <a
                    href="https://vibra.la/"
                    target="_blank"
                    className="link text-primary"
                  >
                    Vibra.la
                  </a>
                  , a real estate startup that hopes to change the way people
                  find, buy and sell homes by bringing the best tools to the
                  real estate industry.
                </Trans>
              </p>
              <p>{t('about-me.3')}</p>
              <p>{t('about-me.4')}</p>
              <p>
                <Trans ns="index-page" i18nKey="about-me.5">
                  If you have any questions or want to learn more about me, feel
                  free to contact me through my social media or by my{' '}
                  <Link href="/contact" className="link text-primary">
                    contact section
                  </Link>
                  . If you're interested in reading some articles please check
                  my{' '}
                  <Link href="/blog" className="link text-primary">
                    blog
                  </Link>
                  .
                </Trans>
              </p>
            </div>
            <div className="group relative row-start-1 mt-4 mb-4 h-80 w-full justify-self-center sm:h-72 sm:w-72 lg:row-auto lg:justify-self-auto">
              <Image
                src="/face.png"
                aria-label="Juan Camilo&lsquo;s Avatar"
                alt="Juan Camilo&lsquo;s Avatar"
                // height={176}
                // width={176}
                fill
                className="rounded-[var(--rounded-btn)] object-cover object-center ring ring-primary ring-offset-8 ring-offset-base-100 transition-all duration-500 ease-in-out group-hover:ring-offset-0 group-hover:ring-offset-base-200"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpklEQVQokT2SS0sbURzFB6H9AO2X0LWge7+Am7ZBBRcKipI0BhN8xImvZJJ5xISJRKPkYQSfqJCIMakKPlE3guDCLF200PoBxCT3lHMpXfyZO3Pnnv/vnPtXLi4uPpdKpT+FQgF7e3uN7e1tLC8vi9bWVrS0tKCnpwejo6Po7e1FR0cHmpub0dTUhLa2NhEIBODz+eoejwcjIyNVXdc/KuVy+fvh4SH29/ffNzc3sb6+LlZWVtDV1YVcLofz83NcXl6iXC7j4OAAbMi99vZ2TExMCK/XS7Ga0+mEx+P5ppydnf0gXSqVqpMslUohHA5jamoKNzc3uL+/x+PjI+7u7nB9fS3XJycn6Ovrg9vtJr1wu901l8vF97xye3v76+joCIFAgBaEaZqYmZnB2NgYNjY2+B1+vx+7u7uYm5vDwMAA5ufnMTQ0hPHxcczOzgpVVRuqqnL9pDw8PNRphxusWCwGVjAYRCQSgcPhQHd3N4rFIqanp9HZ2YnBwUFMTk5C0zToui6CwaBgk1AoVFOen5/rp6enpBKapgnbthGPx5FOp7GzsyNJSV2tVmWObJLP52FZlmxqmqY891/w5eXlJ4OnYCQSEYuLi2Ctrq7i+PhYim5tbUnCtbU1MB7aNwxDipqmyXMNimua9qS8vr5Wrq6uoKpq3TAMkUgkJB0pMpkMSqWSzJKkjIIXkkwmEY1GQTeWZQld12u0Hw6H88rb25uLt+f3+99pLZFICApxPChMWtKEQiFpkQcpRnH+u7CwwP0aozAM46sC4FOlUvnNwA3DaLBrNpsVtEjbFPL5fOjv78fw8LC8cdbS0pKMJxaL1f9Zr2YymQ+KZVlKMpl0MlRd199t2xbZbJbW5JNiJCMl55MDTJuMhHNr23aNxPF4/Es0GlX+ArFlQxVMtgyfAAAAAElFTkSuQmCC"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[var(--rounded-btn)] bg-primary/20 transition-all duration-500 ease-in-out group-hover:bg-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
      <WhereIveWorked />
      <SomeThingsIveBuilt />
      <ContactMe />
    </Container>
  );
}
