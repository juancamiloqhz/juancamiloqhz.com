import { Meta, Post } from '../components';
import { posts } from '../scripts/getAllPosts';
import Layout from '../components/Layout';

export default function Home() {
  // console.dir(posts, { depth: null})
  return (
    <>
      <h2>All Posts</h2>
      <div className="">
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
