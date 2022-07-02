import { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import { pick } from 'contentlayer/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { PostPreview } from '../../components/Post';
import { allBlogs } from 'contentlayer/generated';
import Container from 'components/Container';
// import FeaturedPostCard from 'components/Post/FeaturedPostCard';
// import Container from 'components/Container';

export async function getStaticProps({ locale }) {
  const posts = allBlogs
    .filter((post) => post.locale === locale)
    .map((post) =>
      pick(post, [
        'slug',
        'title',
        'summary',
        'publishedAt',
        'image',
        'blurDataURL',
        'categories',
        'tags'
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, [
        'single-post',
        'footer',
        'header',
        'blog-archive'
      ]))
    }
  };
}

export default function BlogArchivePage({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation('blog-archive');
  const [searchValue, setSearchValue] = useState('');
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  // console.log(posts);

  return (
    <Container
      title={t('pageTitle')}
      description={t('pageDescription')}
      schemaType="Blog"
    >
      <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mb-16 w-full">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl ">
          Blog
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {t('blogDescription', { count: posts.length })}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label={t('search')}
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={t('search')}
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {/* {!searchValue && (
          <div className="mb-10 w-full">
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight md:text-4xl">
              Most Popular
            </h3>
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
        )} */}
        {!searchValue && (
          <h3 className="my-8 text-2xl font-bold tracking-tight md:text-4xl">
            {t('pageTitle')}
          </h3>
        )}
        {!filteredPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredPosts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
