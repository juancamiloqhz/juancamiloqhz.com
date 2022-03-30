import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { posts } from '../scripts/getAllPosts';
import Image from 'next/image';

// console.table(posts);
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
export default function Home() {
  // console.dir(posts, { depth: null})
  return (
    <>
      <div className="hero flex items-center justify-center h-[55vh] md:h-[77vh] min-h-fit w-full">
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
            HELLO, MY NAME IS JUAN CAMILO
          </motion.h4>
          <motion.h1
            variants={item}
            className="text-5xl md:text-8xl font-serif"
          >
            I make websites.
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl md:text-3xl font-light mt-4"
          >
            I&lsquo;m a full-stack developer and co-founder of{' '}
            <a href="https://vibra.la" target="_blank" rel="noreferrer">
              Vibra
            </a>
            , a real estate startup in Latin America. I also write about tech,
            startups, and the future of the web on my{' '}
            <Link href="/blog">Blog</Link> and on{' '}
            <a href="https://twitter.com/juancamiloqhz">Twitter</a>.
          </motion.p>
        </motion.div>
      </div>
      <div className="max-w-6xl w-full flex flex-col mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-serif mb-6">Featured Posts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pb-16">
          {posts
            .filter((p) => p.module?.meta?.featured)
            .map((post, i) => {
              const {
                link,
                module: { meta },
              } = post;
              return (
                <Link href="/blog/[slug]" as={`/blog${link}`} key={i}>
                  <a className="group block relative">
                    {meta.image && (
                      <div className="image-wrapper relative h-52 md:h-72 shadow-2xl">
                        <Image
                          // loader={unsplashLoader}
                          src={meta.image}
                          layout="fill"
                          alt={meta.title}
                          objectFit="cover"
                          objectPosition="center"
                          className="rounded-lg z-0 group-hover:brightness-50 transition-all duration-100 ease-in-out"
                        />
                      </div>
                    )}

                    <div className="p-4 absolute top-0 bottom-0 left-0 right-0">
                      <div className="font-bold text-3xl mb-2 text-white font-serif">
                        {meta.title}
                      </div>
                      <p className="text-gray-200 text-xl opacity-0 mt-5 group-hover:opacity-100 group-hover:mt-0 transition-all duration-500 ease-in-out">
                        {meta.description}
                      </p>
                    </div>
                  </a>
                </Link>
              );
            })}
        </div>
        <Link href="/blog" passHref>
          <a className="block mb-20 self-end">See All Posts =></a>
        </Link>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
