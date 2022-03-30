import { motion } from 'framer-motion';
import { Layout, Meta, PostPreview } from '../../components';
import { posts } from '../../scripts/getAllPosts';

export default function BlogArchivePage() {
  return (
    <div>
      <Meta title="Blog" />
      <div className="page-container post-container">
        {posts
          .sort(
            (a, b) =>
              new Date(b.module.meta.date) - new Date(a.module.meta.date)
          )
          .map((post) => (
            <PostPreview key={post.link} post={post} />
          ))}
      </div>
    </div>
  );
}

BlogArchivePage.getLayout = function getLayout(page) {
  return <Layout pageTitle="Articles">{page}</Layout>;
};
