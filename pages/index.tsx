import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Subscribe from 'components/Subscribe/Subscribe';
import Container from 'components/Container';
import FeaturedPostCard from 'components/Post/FeaturedPostCard';

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
      <div className="hero flex items-center justify-center mt-12 mb-24 w-full">
        <motion.div
          variants={variants}
          className="hero-inner w-full mx-auto max-w-3xl flex flex-col-reverse sm:flex-row items-start"
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col pr-8">
            <motion.h1
              variants={item}
              className="text-3xl md:text-5xl font-serif"
            >
              JuanCamiloQHz
            </motion.h1>
            <motion.p variants={item} className="md:text-lg">
              {t('profession')}&nbsp;
              <a href="https://vibra.la" target="_blank" rel="noreferrer">
                <strong>Vibra</strong>
              </a>{' '}
            </motion.p>
            <motion.p
              variants={item}
              className="md:text-lg font-light text-gray-400 mt-2"
            >
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
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              src="/avatar.png"
              aria-label="Juan Camilo&lsquo;s Avatar"
              alt="Juan Camilo&lsquo;s Avatar"
              height={176}
              width={176}
              objectFit="cover"
              objectPosition="center"
              className="rounded-full filter grayscale"
            />
          </div>
        </motion.div>
      </div>
      <div className="max-w-3xl w-full flex flex-col mx-auto">
        <h2 className="mb-6 text-3xl font-semibold">
          {t('index-page:featuredPosts')}
        </h2>
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
      <div className="max-w-3xl w-full flex flex-col mx-auto mt-10 mb-20">
        <Subscribe />
      </div>
    </Container>
  );
}
