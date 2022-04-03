import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { PostPreview, PostTitle } from '../../components/Post';
import { getAllPostsByTag, getAllTagSlugs } from '../../lib/blog-api';

export async function getStaticPaths() {
  const tags = getAllTagSlugs();
  // console.log(tags);

  return {
    paths: tags.map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = getAllPostsByTag(params.tag, [
    'title',
    'date',
    'slug',
    'author',
    'ogImage',
    'coverImage',
    'categories',
  ]);

  return {
    props: {
      posts,
    },
  };
}

export default function AuthorPostsPage({ posts }) {
  const router = useRouter();
  return router.isFallback ? (
    <PostTitle>Loading…</PostTitle>
  ) : (
    <div>
      <Head>
        <title>All Articles in Tag | JuanCamiloQHz</title>
      </Head>
      <div className="page-container post-container">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

AuthorPostsPage.getLayout = function getLayout(page) {
  return <Layout pageTitle="Articles in Tag">{page}</Layout>;
};
