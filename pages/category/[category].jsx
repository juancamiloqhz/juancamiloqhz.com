import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from 'components/Container';

import PageTitle from '../../components/common/PageTitle';
import { PostPreview } from '../../components/Post';
import {
  getAllCategoriesSlugs,
  getAllPostsByCategory
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
          category
        },
        locale
      });
    }
  }
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params, locale }) {
  const { category, posts } = getAllPostsByCategory(params.category, locale, [
    'title',
    'date',
    'slug',
    'author',
    'ogImage',
    'coverImage',
    'categories'
  ]);
  const postWithBlurredImages = await Promise.all(
    posts.map(async (post) => {
      const { imgBase64 } = await blurImage(post.coverImage);
      return {
        ...post,
        blurDataURL: imgBase64
      };
    })
  );

  return {
    props: {
      category,
      posts: postWithBlurredImages,
      ...(await serverSideTranslations(locale, [
        'footer',
        'header',
        'category-archive'
      ]))
    }
  };
}

export default function AllPostsByCategoryPage({ posts, category }) {
  const { t } = useTranslation('category-archive');
  return (
    <Container
      title={t('category-archive:pageTitle', { category: category.name })}
      description={t('category-archive:pageDescription', {
        category: category.name
      })}
      openGraphType="website"
      schemaType="SearchResultsPage"
    >
      <PageTitle>
        {t('category-archive:pageTitle', { category: category.name })}
      </PageTitle>
      <div className="page-container post-container">
        {/* {posts.map((post, i) => (
          <PostPreview key={i} post={post} />
        ))} */}
      </div>
    </Container>
  );
}
