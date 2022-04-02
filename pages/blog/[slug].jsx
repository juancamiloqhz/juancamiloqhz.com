import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import Layout from '../../components/Layout';
import { getAllPosts, getPostBySlug } from '../../lib/blog-api';
import markdownToHtml from '../../lib/markdownToHtml';
import { PostBody, PostHeader, PostTitle } from '../../components/Post';

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);
  // console.log(
  //   posts.map((post) => {
  //     return {
  //       params: {
  //         slug: post.slug,
  //       },
  //     };
  //   })
  // );
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
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
      <article className="mb-32">
        <Head>
          <title>{post.title} | JuanCamiloQHz</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
    </>
  );
}

SinglePost.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
