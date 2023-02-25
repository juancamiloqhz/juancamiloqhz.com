import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import FeaturedPostCard from '@/components/Post/FeaturedPostCard';
import { BsChevronCompactDown } from 'react-icons/bs';
// import Subscribe from '@/components/Subscribe/Subscribe';
import Container from '@/components/Container';
import {
  ContactMe,
  SomeThingsIveBuilt,
  WhereIveWorked,
} from '@/components/IndexPage';

// import BlurImage from '@/components/BlurImage';

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
  // const { imgBase64 } = await blurImage('/avatar-bw.png');
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
  const { t } = useTranslation(['index-page']);
  return (
    <Container
      exclusiveTitle={`${t('index-page:metaTitle')}`}
      description={`${t('index-page:metaDescription')}`}
      schemaType="WebSite"
    >
      {/* Hero */}
      <div className="relative flex h-screen w-full items-center justify-center px-8 transition-all duration-500 ease-in-out md:px-28">
        <motion.div
          variants={variants}
          className="mx-auto w-full max-w-5xl"
          initial="hidden"
          animate="show"
        >
          <motion.h4
            variants={item}
            className="mb-4 text-lg text-primary md:mb-6"
          >
            👋 {t('hi')}
          </motion.h4>
          <motion.h1
            variants={item}
            className="text-5xl font-bold md:text-6xl lg:text-7xl"
          >
            Juan Camilo Quintero. <br />
          </motion.h1>
          <motion.h2
            variants={item}
            className="mt-1 text-5xl font-bold text-base-content/60 md:mt-3 md:text-6xl lg:text-7xl"
          >
            {t('iDo')}
          </motion.h2>
          {/* <motion.p variants={item} className="text-xl mt-1">
              {t('profession')}&nbsp;
              <a
                href="https://vibra.la"
                target="_blank"
                rel="noreferrer noopener"
                className="link link-primary"
              >
                <strong>Vibra.la</strong>
              </a>{' '}
            </motion.p> */}
          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-base-content/60 md:mt-8"
          >
            {t('professionDescription.1')}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-1 max-w-xl text-base-content/60 md:mt-2"
          >
            {t('professionDescription.2')}
          </motion.p>
          {/* <motion.p
              variants={item}
              className="text-2xl md:text-3xl font-light mt-4"
            >
              {t('home:first')}{' '}
              <a href="https://vibra.la" target="_blank" rel="noreferrer noopener">
                Vibra
              </a>{' '}
              {t('home:second')} <Link href="/blog">Blog</Link>{' '}
              {t('home:third')}{' '}
              <a href="https://twitter.com/juancamiloqhz">Twitter</a>.
            </motion.p> */}

          {/* <div className="w-[80px] sm:w-[176px] relative mb-4 sm:mb-0 mr-auto rounded-full bg-gradient-to-tr from-primary via-secondary to-accent">
            <Image
              src="/avatar-bw.png"
              aria-label="Juan Camilo&lsquo;s Avatar"
              alt="Juan Camilo&lsquo;s Avatar"
              height={176}
              width={176}
              className="rounded-full object-cover object-center p-1"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpklEQVQokT2SS0sbURzFB6H9AO2X0LWge7+Am7ZBBRcKipI0BhN8xImvZJJ5xISJRKPkYQSfqJCIMakKPlE3guDCLF200PoBxCT3lHMpXfyZO3Pnnv/vnPtXLi4uPpdKpT+FQgF7e3uN7e1tLC8vi9bWVrS0tKCnpwejo6Po7e1FR0cHmpub0dTUhLa2NhEIBODz+eoejwcjIyNVXdc/KuVy+fvh4SH29/ffNzc3sb6+LlZWVtDV1YVcLofz83NcXl6iXC7j4OAAbMi99vZ2TExMCK/XS7Ga0+mEx+P5ppydnf0gXSqVqpMslUohHA5jamoKNzc3uL+/x+PjI+7u7nB9fS3XJycn6Ovrg9vtJr1wu901l8vF97xye3v76+joCIFAgBaEaZqYmZnB2NgYNjY2+B1+vx+7u7uYm5vDwMAA5ufnMTQ0hPHxcczOzgpVVRuqqnL9pDw8PNRphxusWCwGVjAYRCQSgcPhQHd3N4rFIqanp9HZ2YnBwUFMTk5C0zToui6CwaBgk1AoVFOen5/rp6enpBKapgnbthGPx5FOp7GzsyNJSV2tVmWObJLP52FZlmxqmqY891/w5eXlJ4OnYCQSEYuLi2Ctrq7i+PhYim5tbUnCtbU1MB7aNwxDipqmyXMNimua9qS8vr5Wrq6uoKpq3TAMkUgkJB0pMpkMSqWSzJKkjIIXkkwmEY1GQTeWZQld12u0Hw6H88rb25uLt+f3+99pLZFICApxPChMWtKEQiFpkQcpRnH+u7CwwP0aozAM46sC4FOlUvnNwA3DaLBrNpsVtEjbFPL5fOjv78fw8LC8cdbS0pKMJxaL1f9Zr2YymQ+KZVlKMpl0MlRd199t2xbZbJbW5JNiJCMl55MDTJuMhHNr23aNxPF4/Es0GlX+ArFlQxVMtgyfAAAAAElFTkSuQmCC"
            />
          </div> */}
        </motion.div>
        <BsChevronCompactDown
          size={30}
          className="absolute left-1/2 bottom-5 -translate-x-1/2"
        />
      </div>
      {/* About me */}
      <motion.div
        className="mb-32 scroll-mt-60 px-8 transition-all duration-500 ease-in-out sm:mb-60 md:px-28"
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
                {t('aboutMe')}
              </h2>
              <div className="h-[1px] w-full bg-base-content/60" />
            </div>
            <div className="w-0 lg:w-72"></div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="text-base-content/60">
                Hello, my name is Juan Camilo Quintero. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Aspernatur repudiandae
                quibusdam doloremque pariatur dolorem exercitationem molestiae,
                ab a illum! Incidunt ipsam quod culpa, quae magnam harum quis
                ex. Consequuntur amet corporis mollitia quam molestias dolor.
                Iste, iure error, reprehenderit accusamus autem hic fugiat
                impedit, corrupti facilis velit exercitationem. Quas, voluptate.
              </p>
              <p className="my-3 text-base-content/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur repudiandae quibusdam doloremque pariatur dolorem
                exercitationem molestiae, ab a illum! Incidunt ipsam quod culpa,
                quae magnam harum quis ex. Consequuntur amet corporis mollitia
                quam molestias dolor.
              </p>
              <p className="text-base-content/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur repudiandae quibusdam doloremque pariatur dolorem
                exercitationem molestiae, Iste, iure error, reprehenderit
                accusamus autem hic fugiat impedit, corrupti facilis velit
                exercitationem. Quas, voluptate.
              </p>
            </div>
            <div className="group relative mt-4 h-72 w-72 justify-self-center lg:justify-self-auto">
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
              <div className="absolute top-0 bottom-0 left-0 right-0 rounded-[var(--rounded-btn)] bg-primary/40 transition-all duration-500 ease-in-out group-hover:bg-transparent" />
            </div>
          </div>
        </div>
      </motion.div>
      {/* Where I've Work */}
      <WhereIveWorked />
      {/* Some Things I’ve Built */}
      <SomeThingsIveBuilt />
      {/* Contact Me */}
      <ContactMe />

      {/* Featured Posts */}
      {/* <div className="max-w-3xl w-full flex flex-col mx-auto">
        <h2 className="mb-6 text-3xl font-semibold">
          {t('index-page:featuredPosts')}
        </h2>
        <div className="flex gap-6 flex-col md:flex-row mb-8">
          <FeaturedPostCard
            title={t('index-page:featured-one-title')}
            link="/blog/why-have-i-created-this-website"
            gradient="from-primary to-secondary"
            // gradient="from-primary via-secondary to-accent"
            // gradient="from-[#4158D0] via-[#C850C0] to-[#FFCC70]"
          />
          <FeaturedPostCard
            title={t('index-page:dev')}
            link="/development"
            gradient="from-secondary to-accent"
            // gradient="from-accent via-primary to-secondary"
            // gradient="from-[#00DBDE] to-[#FC00FF]"
          />
          <FeaturedPostCard
            title={t('index-page:dev')}
            link="/development"
            gradient="from-accent to-primary"
            // gradient="from-secondary via-accent to-primary"
            // gradient="from-[#FFE53B] to-[#FF2525]"
          />
        </div>
        <Link href="/blog" passHref className="flex mb-10 w-fit link">
          {t('index-page:seeAllPosts')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1 stroke-primary"
          >
            <path
              // stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </Link>
      </div> */}
      {/* Subscribe */}
      {/* <div className="max-w-3xl w-full flex flex-col mx-auto mt-10 mb-20">
        <Subscribe />
      </div> */}
    </Container>
  );
}
