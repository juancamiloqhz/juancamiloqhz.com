import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import PageTitle from '../../components/common/PageTitle';
import Layout from '../../components/Layout';
import { PostPreview } from '../../components/Post';
import SEO from '../../components/SEO';
import { getAllPosts } from '../../lib/blog-api';

export async function getStaticProps({ locale }) {
  const allPosts = getAllPosts(
    ['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'categories'],
    locale
  );

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
  const { locale } = useRouter();
  const { t } = useTranslation('blog-archive');
  return (
    <div>
      <SEO
        url={`https://juancamiloqhz.vercel.app/${
          locale === 'en' ? '' : `${locale}/`
        }blog`}
        openGraphType="website"
        schemaType="website"
        title={t('pageTitle')}
        description={t('pageDescription')}
      />
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
