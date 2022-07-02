import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Subscribe from 'components/Subscribe/Subscribe';
import Container from 'components/Container';
import FeaturedPostCard from 'components/Post/FeaturedPostCard';
import BlurImage from 'components/BlurImage';

const variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.5 }
  }
};

const firstItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
};

export async function getStaticProps({ locale }) {
  // const { imgBase64 } = await blurImage('/avatar-bw.png');
  // console.log(imgBase64);
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'home',
        'footer',
        'header',
        'index-page',
        'newsletter'
      ]))
    }
  };
}

export default function Home({ posts }) {
  const { t } = useTranslation(['home', 'index-page']);
  // console.table(posts);
  return (
    <Container
      exclusiveTitle={t('index-page:metaTitle')}
      description={t('index-page:metaDescription')}
      schemaType="WebSite"
    >
      <div className="hero flex items-center justify-center mt-8 md:mt-12 mb-20 md:mb-24 w-full">
        <motion.div
          variants={variants}
          className="hero-inner w-full mx-auto max-w-3xl flex flex-col-reverse sm:flex-row items-start"
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col pr-8">
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-semibold"
            >
              JuanCamiloQHz
            </motion.h1>
            <motion.p variants={item} className="text-xl mt-1">
              {t('profession')}&nbsp;
              <a href="https://vibra.la" target="_blank" rel="noreferrer">
                <strong>Vibra.la</strong>
              </a>{' '}
            </motion.p>
            <motion.p variants={item} className="text-gray-400 mt-2 text-lg">
              {t('professionDescription')}
            </motion.p>
            {/* <motion.p
              variants={item}
              className="text-2xl md:text-3xl font-light mt-4"
            >
              {t('home:first')}{' '}
              <a href="https://vibra.la" target="_blank" rel="noreferrer">
                Vibra
              </a>{' '}
              {t('home:second')} <Link href="/blog">Blog</Link>{' '}
              {t('home:third')}{' '}
              <a href="https://twitter.com/juancamiloqhz">Twitter</a>.
            </motion.p> */}
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-4 sm:mb-0 mr-auto">
            <Image
              src="/avatar-bw.png"
              aria-label="Juan Camilo&lsquo;s Avatar"
              alt="Juan Camilo&lsquo;s Avatar"
              height={176}
              width={176}
              objectFit="cover"
              objectPosition="center"
              className="rounded-full"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpklEQVQokT2SS0sbURzFB6H9AO2X0LWge7+Am7ZBBRcKipI0BhN8xImvZJJ5xISJRKPkYQSfqJCIMakKPlE3guDCLF200PoBxCT3lHMpXfyZO3Pnnv/vnPtXLi4uPpdKpT+FQgF7e3uN7e1tLC8vi9bWVrS0tKCnpwejo6Po7e1FR0cHmpub0dTUhLa2NhEIBODz+eoejwcjIyNVXdc/KuVy+fvh4SH29/ffNzc3sb6+LlZWVtDV1YVcLofz83NcXl6iXC7j4OAAbMi99vZ2TExMCK/XS7Ga0+mEx+P5ppydnf0gXSqVqpMslUohHA5jamoKNzc3uL+/x+PjI+7u7nB9fS3XJycn6Ovrg9vtJr1wu901l8vF97xye3v76+joCIFAgBaEaZqYmZnB2NgYNjY2+B1+vx+7u7uYm5vDwMAA5ufnMTQ0hPHxcczOzgpVVRuqqnL9pDw8PNRphxusWCwGVjAYRCQSgcPhQHd3N4rFIqanp9HZ2YnBwUFMTk5C0zToui6CwaBgk1AoVFOen5/rp6enpBKapgnbthGPx5FOp7GzsyNJSV2tVmWObJLP52FZlmxqmqY891/w5eXlJ4OnYCQSEYuLi2Ctrq7i+PhYim5tbUnCtbU1MB7aNwxDipqmyXMNimua9qS8vr5Wrq6uoKpq3TAMkUgkJB0pMpkMSqWSzJKkjIIXkkwmEY1GQTeWZQld12u0Hw6H88rb25uLt+f3+99pLZFICApxPChMWtKEQiFpkQcpRnH+u7CwwP0aozAM46sC4FOlUvnNwA3DaLBrNpsVtEjbFPL5fOjv78fw8LC8cdbS0pKMJxaL1f9Zr2YymQ+KZVlKMpl0MlRd199t2xbZbJbW5JNiJCMl55MDTJuMhHNr23aNxPF4/Es0GlX+ArFlQxVMtgyfAAAAAElFTkSuQmCC"
            />
            {/*
            <BlurImage src="/avatar-bw.png" height={176} width={176} />
            */}
          </div>
        </motion.div>
      </div>
      <div className="max-w-3xl w-full flex flex-col mx-auto">
        <h2 className="mb-6 text-3xl font-semibold">
          {t('index-page:featuredPosts')}
        </h2>
        <div className="flex gap-6 flex-col md:flex-row mb-8">
          <FeaturedPostCard
            title={t('index-page:featured-one-title')}
            link="/blog/why-have-i-created-this-website"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <FeaturedPostCard
            title={t('index-page:dev')}
            link="/development"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <FeaturedPostCard
            title={t('index-page:dev')}
            link="/development"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>
        <Link href="/blog" passHref>
          <a className="flex mb-10">
            {t('index-page:seeAllPosts')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
      <div className="max-w-3xl w-full flex flex-col mx-auto mt-10 mb-20">
        <Subscribe />
      </div>
    </Container>
  );
}
