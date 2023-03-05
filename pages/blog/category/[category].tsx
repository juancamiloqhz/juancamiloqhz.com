import { GetStaticProps } from 'next';
import { type Post, allPosts } from '@/contentlayer/generated';
import Container from '@/shared/Container';
import { pick } from 'contentlayer/client';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PostPreview } from '@/components/Post';
import PageTitle from '@/components/shared/PageTitle';

export async function getStaticPaths() {
  const allCategoriesSlugs = allPosts
    .map((post) => post.categories.map((category) => category.slug))
    .flat();

  // console.log(allCategoriesSlugs);
  const uniqueCategoriesSlugs = [...new Set(allCategoriesSlugs)];
  // console.log(uniqueCategoriesSlugs);

  return {
    paths: uniqueCategoriesSlugs.map((category) => ({
      params: {
        category,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  // console.log(params);
  const allPostsByCategory = allPosts
    .filter((post) =>
      post.categories.some((category) => category.slug === params?.category),
    )
    .filter((post) => post.locale === locale)
    .map((post) =>
      pick(post, [
        'slug',
        'title',
        'summary',
        'publishedAt',
        'mainImage',
        'mainImageBlurDataURL',
        'categories',
        'tags',
      ]),
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    );

  return {
    props: {
      category: { name: params?.category, slug: params?.category },
      posts: allPostsByCategory,
      ...(await serverSideTranslations(locale ?? 'en', [
        'footer',
        'header',
        'category-archive',
      ])),
    },
  };
};

export default function CategoryPostsPage({
  posts,
  category,
}: {
  posts: Post[];
  category: { name: string; slug: string };
}) {
  const { t } = useTranslation('category-archive');
  return (
    <Container
      title={`${t('pageTitle')}`}
      description={`${t('pageDescription')}`}
      openGraphType="website"
      schemaType="SearchResultsPage"
    >
      <PageTitle>{t('pageTitle')}</PageTitle>
      <div className="page-container post-container">
        {posts.map((post, i) => (
          <PostPreview key={i} post={post} />
        ))}
      </div>
    </Container>
  );
}
