import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import Layout from '../../components/Layout';
import { getAllPosts, getPostBySlug } from '../../lib/blog-api';
import markdownToHtml from '../../lib/markdownToHtml';
import { PostBody, PostHeader, PostTitle } from '../../components/Post';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ params, locale }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'categories',
  ]);
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

export async function getStaticPaths({ locales }) {
  const posts = getAllPosts(['slug']);
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
    fallback: true,
  };
}

export default function SinglePost({ post }) {
  // console.log({ post });
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return router.isFallback ? (
    <PostTitle>Loading…</PostTitle>
  ) : (
    <>
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
    </>
  );
}

SinglePost.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
