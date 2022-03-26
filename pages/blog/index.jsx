import { motion } from 'framer-motion';
import { Layout, Meta, Post } from '../../components';
import { posts } from '../../scripts/getAllPosts';

export default function BlogArchivePage() {
  return (
    <div>
      <Meta title="Blog" />
      <div className="">
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </div>
  );
}

BlogArchivePage.getLayout = function getLayout(page) {
  return <Layout pageTitle="All Articles">{page}</Layout>;
};
