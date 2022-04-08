import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import PageTitle from '../../components/common/PageTitle';
import Layout from '../../components/Layout';
import { PostPreview, PostTitle } from '../../components/Post';
import { getAllPostsByTag, getAllTagSlugs } from '../../lib/blog-api';

export async function getStaticPaths({ locales, locale }) {
  const tags = getAllTagSlugs(locale);
  const paths = [];
  for (const locale of locales) {
    for (const tag of tags) {
      paths.push({
        params: {
          tag,
          locale,
        },
      });
    }
  }

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params, locale }) {
  const posts = getAllPostsByTag(params.tag, locale, [
    'title',
    'date',
    'slug',
    'author',
    'ogImage',
    'coverImage',
    'categories',
    'tags',
  ]);

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, [
        'footer',
        'header',
        'tag-archive',
      ])),
    },
  };
}

export default function AuthorPostsPage({ posts }) {
  const { t } = useTranslation('tag-archive');
  return (
    <div>
      <Head>
        <title>{t('tag-archive:pageTitle')} | JuanCamiloQHz</title>
      </Head>
      <PageTitle>{t('tag-archive:pageTitle')}</PageTitle>
      <div className="page-container post-container">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

AuthorPostsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
