import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { PostPreview, PostTitle } from '../../components/Post';
import {
  getAllCategoriesSlugs,
  getAllPostsByCategory,
} from '../../lib/blog-api';

export async function getStaticPaths() {
  const categories = getAllCategoriesSlugs();
  // console.log(categories);

  return {
    paths: categories.map((category) => ({
      params: {
        category,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = getAllPostsByCategory(params.category, [
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

export default function AllPostsByCategoryPage({ posts }) {
  const router = useRouter();
  return router.isFallback ? (
    <PostTitle>Loading…</PostTitle>
  ) : (
    <div>
      <Head>
        <title>All Articles in Category | JuanCamiloQHz</title>
      </Head>
      <div className="page-container post-container">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

AllPostsByCategoryPage.getLayout = function getLayout(page) {
  return <Layout pageTitle="Articles in Category">{page}</Layout>;
};
