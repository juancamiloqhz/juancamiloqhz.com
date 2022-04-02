import Layout from '../../components/Layout';
import Meta from '../../components/Meta';
import { PostPreview } from '../../components/Post';
import { getAllPosts } from '../../lib/blog-api';
// import { posts as allPosts } from '../../scripts/getAllPosts';

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
      <Meta title="Blog" />
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
