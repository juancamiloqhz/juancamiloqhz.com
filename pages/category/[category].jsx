import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import PageTitle from '../../components/common/PageTitle';
import Layout from '../../components/Layout';
import { PostPreview } from '../../components/Post';
import SEO from '../../components/SEO';
import {
  getAllCategoriesSlugs,
  getAllPostsByCategory,
} from '../../lib/blog-api';
import blurImage from '../../lib/blur-images';

export async function getStaticPaths({ locales }) {
  const categories = getAllCategoriesSlugs(locales);
  // console.log(categories);
  const paths = [];
  for (const category of categories) {
    for (const locale of locales) {
      paths.push({
        params: {
          category,
        },
        locale,
      });
    }
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const posts = getAllPostsByCategory(params.category, locale, [
    'title',
    'date',
    'slug',
    'author',
    'ogImage',
    'coverImage',
    'categories',
  ]);
  const postWithBlurredImages = await Promise.all(
    posts.map(async (post) => {
      const { imgBase64 } = await blurImage(post.coverImage);
      return {
        ...post,
        blurDataURL: imgBase64,
      };
    })
  );

  return {
    props: {
      posts: postWithBlurredImages,
      ...(await serverSideTranslations(locale, [
        'footer',
        'header',
        'category-archive',
      ])),
    },
  };
}

export default function AllPostsByCategoryPage({ posts }) {
  const { query, locale } = useRouter();
  const { t } = useTranslation('category-archive');
  return (
    <div>
      <SEO
        url={`https://juancamiloqhz.com/${
          locale === 'en' ? '' : `${locale}/`
        }category/${query.category}`}
        openGraphType="website"
        schemaType="website"
        title={t('category-archive:pageTitle')}
        description={t('category-archive:pageDescription')}
      />
      <PageTitle>{t('category-archive:pageTitle')}</PageTitle>
      <div className="page-container post-container">
        {posts.map((post, i) => (
          <PostPreview key={i} post={post} />
        ))}
      </div>
    </div>
  );
}

AllPostsByCategoryPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
