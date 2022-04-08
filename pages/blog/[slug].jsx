import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../../components/Layout';
import { getAllPosts, getPostBySlug } from '../../lib/blog-api';
import markdownToHtml from '../../lib/markdownToHtml';
import { PostBody, PostHeader } from '../../components/Post';

export async function getStaticProps({ params, locale }) {
  // console.log('getStaticProps', params, locale);
  const post = getPostBySlug(params.slug, locale, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'categories',
  ]);
  // console.log('post', post);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
      ...(await serverSideTranslations(locale, [
        'single-post',
        'footer',
        'header',
      ])),
    },
  };
}

export async function getStaticPaths({ locales, locale }) {
  const posts = getAllPosts(['slug'], locale);
  const paths = [];
  for (const locale of locales) {
    for (const post of posts) {
      // console.log(post.categories, locale);
      paths.push({
        params: {
          slug: post.slug,
          locale,
        },
      });
    }
  }
  return {
    paths,
    fallback: 'blocking',
  };
}

export default function SinglePost({ post }) {
  return (
    <article className="mb-32 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
      <Head>
        <title>{post.title} | JuanCamiloQHz</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
        categories={post.categories}
      />
      <PostBody content={post.content} />
    </article>
  );
}

SinglePost.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
