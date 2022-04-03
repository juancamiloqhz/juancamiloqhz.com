import Head from 'next/head';
import Layout from '../../components/Layout';
import { PostPreview } from '../../components/Post';
import { getAllPosts } from '../../lib/blog-api';

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'categories',
  ]);

  return {
    props: { posts: allPosts },
  };
}

export default function BlogArchivePage({ posts }) {
  // console.log(posts);
  return (
    <div>
      <Head>
        <title>All Articles | JuanCamiloQHz</title>
      </Head>
      <div className="page-container post-container">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

BlogArchivePage.getLayout = function getLayout(page) {
  return <Layout pageTitle="Articles">{page}</Layout>;
};
