import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Subscribe from 'components/Subscribe/Subscribe';
import Container from 'components/Container';
import FeaturedPostCard from 'components/Post/FeaturedPostCard';

const variants = {
  hidden: { y: 90, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.3 }
  }
};

const firstItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export async function getStaticProps({ locale }) {
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
      <div className="hero flex items-center justify-center h-[65vh] md:h-[77vh] min-h-[450px] w-full">
        <motion.div
          variants={variants}
          className="hero-inner max-w-6xl w-full mx-auto px-4 md:px-6 lg:px-8"
          initial="hidden"
          animate="show"
        >
          <motion.h4
            variants={firstItem}
            className="text-blue-600 dark:text-blue-500"
          >
            {t('hello')}
          </motion.h4>
          <motion.h1
            variants={item}
            className="text-5xl md:text-8xl font-serif"
          >
            {t('iDo')}
          </motion.h1>
          <motion.p
            variants={item}
            className="text-2xl md:text-3xl font-light mt-4"
          >
            {t('home:first')}{' '}
            <a href="https://vibra.la" target="_blank" rel="noreferrer">
              Vibra
            </a>{' '}
            {t('home:second')} <Link href="/blog">Blog</Link> {t('home:third')}{' '}
            <a href="https://twitter.com/juancamiloqhz">Twitter</a>.
          </motion.p>
        </motion.div>
      </div>
      <div className="max-w-6xl w-full flex flex-col mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-serif mb-6">{t('index-page:featuredPosts')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pb-16">
          <FeaturedPostCard
            title="Vibra: A new way to build your website"
            summary="Vibra is a new way to build your website. It is a simple, fast and powerful tool that allows you to create your website in minutes. It is a new way to build your website. It is a simple, fast and powerful tool that allows you to create your website in minutes. It is a new way to build your website. It is a simple, fast and powerful tool that allows you to create your website in minutes."
            slug="vibra-a-new-way-to-build-your-website"
            image="/assets/blog/dynamic-routing/maximalfocus-HakTxidk36I-unsplash-cover.jpg"
          />
          <FeaturedPostCard
            title="Vibra: A new way to build your website"
            summary="Vibra is a new way to build your website. It is a simple, fast and powerful tool that allows you to create your website in minutes. It is a new way to build your website. It is a simple, fast and powerful tool that allows you to create your website in minutes. It is a new way to build your website. It is a simple, fast and powerful tool that allows you to create your website in minutes."
            slug="vibra-a-new-way-to-build-your-website"
            image="/assets/blog/dynamic-routing/maximalfocus-HakTxidk36I-unsplash-cover.jpg"
          />
          <FeaturedPostCard
            title="Vibra: A new way to build your website"
            summary="Vibra is a new way to build your website. It is a simple, fast and powerful tool that allows you to create your website in minutes. It is a new way to build your website. It is a simple, fast and powerful tool that allows you to create your website in minutes. It is a new way to build your website. It is a simple, fast and powerful tool that allows you to create your website in minutes."
            slug="vibra-a-new-way-to-build-your-website"
            image="/assets/blog/dynamic-routing/maximalfocus-HakTxidk36I-unsplash-cover.jpg"
          />
        </div>
      </div>
      <div className="max-w-6xl w-full flex flex-col mx-auto px-4 md:px-6 lg:px-8 mt-10 mb-20">
        <Subscribe />
      </div>
    </Container>
  );
}
