import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from 'components/Container';
import { allPosts, type Post } from 'contentlayer/generated';
import PageTitle from 'components/common/PageTitle';
import { PostPreview } from 'components/Post';
import { pick } from 'contentlayer/client';

export async function getStaticPaths() {
  const allCategoriesSlugs = allPosts
    .map((post) => post.categories.map((category) => category.slug))
    .flat();
  const uniqueCategoriesSlugs = [...new Set(allCategoriesSlugs)];
  // console.log(uniqueCategoriesSlugs);

  return {
    paths: uniqueCategoriesSlugs.map((category) => ({
      params: {
        category
      }
    })),
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  if (!params || !params.category) return { notFound: true };
  const allPostsByCategory = allPosts
    .filter(
      (post) =>
        post.locale === locale &&
        post.categories
          .map((category) => category.slug)
          .includes(params.category as string)
    )
    .map((post) =>
      pick(post, [
        'slug',
        'title',
        'summary',
        'publishedAt',
        'mainImage',
        'mainImageBlurDataURL',
        'categories',
        'tags'
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return {
    props: {
      category: { name: params.category, slug: params.category },
      posts: allPostsByCategory,
      ...(await serverSideTranslations(locale ?? 'en', [
        'footer',
        'header',
        'category-archive'
      ]))
    }
  };
};

export default function CategoryPostsPage({
  posts,
  category
}: {
  posts: Post[];
  category: { name: string; slug: string };
}) {
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
        {posts.map((post, i) => (
          <PostPreview key={i} post={post} />
        ))}
      </div>
    </Container>
  );
}
