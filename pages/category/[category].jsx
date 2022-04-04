import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PageTitle from '../../components/common/PageTitle';
import Layout from '../../components/Layout';
import { PostPreview, PostTitle } from '../../components/Post';
import {
  getAllCategoriesSlugs,
  getAllPostsByCategory,
} from '../../lib/blog-api';

export async function getStaticPaths({ locales }) {
  const categories = getAllCategoriesSlugs();
  const paths = [];
  for (const category of categories) {
    for (const locale of locales) {
      paths.push({
        params: {
          category,
          locale,
        },
      });
    }
  }
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params, locale }) {
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
      ...(await serverSideTranslations(locale, [
        'footer',
        'header',
        'category-archive',
      ])),
    },
  };
}

export default function AllPostsByCategoryPage({ posts }) {
  const { t } = useTranslation('category-archive');
  const router = useRouter();
  return router.isFallback ? (
    <PostTitle>Loading…</PostTitle>
  ) : (
    <div>
      <Head>
        <title>{t('category-archive:pageTitle')} | JuanCamiloQHz</title>
      </Head>
      <PageTitle>{t('category-archive:pageTitle')}</PageTitle>
      <div className="page-container post-container">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

AllPostsByCategoryPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
