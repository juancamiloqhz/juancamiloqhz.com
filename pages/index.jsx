import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../components/Layout';
import { getAllPosts } from '../lib/blog-api';
import SEO from '../components/SEO';
import blurImage from '../lib/blur-images';
import Subscribe from '../components/Subscribe/Subscribe';

const variants = {
  hidden: { y: 90, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.3 },
  },
};

const firstItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export async function getStaticProps({ locale }) {
  const allPosts = getAllPosts(
    ['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'categories'],
    locale
  );

  const postWithBlurredImages = await Promise.all(
    allPosts.map(async (post) => {
      const { imgBase64 } = await blurImage(post.coverImage);
      return {
        ...post,
        blurDataURL: imgBase64,
      };
    })
  );

  // console.log({ posts: allPosts });
  return {
    props: {
      posts: postWithBlurredImages,
      ...(await serverSideTranslations(locale, [
        'home',
        'footer',
        'header',
        'index-page',
        'newsletter',
      ])),
    },
  };
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Home({ posts }) {
  const { t } = useTranslation(['home', 'index-page']);
  // console.table(posts);
  return (
    <>
      <SEO
        exclusiveTitle={t('index-page:metaTitle')}
        description={t('index-page:metaDescription')}
        schemaType="WebSite"
      />

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 pb-16">
          {posts
            .filter((p) => p.featured)
            .map((post, i) => {
              return (
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={i}>
                  <a className="group block relative">
                    {post.coverImage && (
                      <div className="image-wrapper relative h-52 md:h-72 shadow-2xl">
                        <Image
                          src={post.coverImage}
                          layout="fill"
                          alt={post.title}
                          objectFit="cover"
                          objectPosition="center"
                          placeholder="blur"
                          blurDataURL={post.blurDataURL}
                          className="rounded-lg z-0 group-hover:brightness-50 transition-all duration-100 ease-in-out"
                        />
                      </div>
                    )}

                    <div className="p-4 absolute top-0 bottom-0 left-0 right-0">
                      <div className="font-bold text-3xl mb-2 text-white font-serif group-hover:opacity-0 transition-all duration-500 ease-in-out">
                        {post.title}
                      </div>
                      <p className="p-4 absolute top-0 bottom-0 left-0 right-0 text-gray-100 text-xl opacity-0 mt-5 group-hover:opacity-100 group-hover:mt-0 transition-all duration-500 ease-in-out">
                        {post.excerpt}
                      </p>
                    </div>
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
      <div className="max-w-6xl w-full flex flex-col mx-auto px-4 md:px-6 lg:px-8 mt-10 mb-20">
        <Subscribe />
      </div>
    </>
  );
}
