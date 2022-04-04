import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import PageTitle from '../../components/common/PageTitle';
// import PageTitle from '../../components/common/PageTitle';
import Layout from '../../components/Layout';
import { PostPreview } from '../../components/Post';
import { getAllPosts } from '../../lib/blog-api';

export async function getStaticProps({ locale }) {
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
    props: {
      posts: allPosts,
      ...(await serverSideTranslations(locale, [
        'single-post',
        'footer',
        'header',
        'blog-archive',
      ])),
    },
  };
}

export default function BlogArchivePage({ posts }) {
  // console.log(posts);
  const { t } = useTranslation('blog-archive');
  return (
    <div>
      <Head>
        <title>{t('pageTitle')} | JuanCamiloQHz</title>
      </Head>
      <PageTitle>{t('pageTitle')}</PageTitle>
      <div className="page-container post-container">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

BlogArchivePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
