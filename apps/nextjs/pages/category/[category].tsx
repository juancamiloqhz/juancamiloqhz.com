import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from 'components/Container';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';

import PageTitle from '../../components/common/PageTitle';
import { PostPreview } from '../../components/Post';
import { pick } from 'contentlayer/client';

export async function getStaticPaths() {
  let uniqueCategories = [];
  allBlogs
    .flatMap((blog) =>
      blog.categories.map((category: { name: string; slug: string }) => ({
        slug: category.slug,
        locale: blog.locale
      }))
    )
    .filter((c) => {
      const i = uniqueCategories.findIndex(
        (u) => u.slug === c.slug && u.locale === c.locale
      );
      if (i === -1) {
        uniqueCategories.push(c);
        return true;
      }
      return false;
    });
  // console.log(uniqueCategories);
  return {
    paths: uniqueCategories.map((c) => ({
      params: { category: c.slug },
      locale: c.locale
    })),
    fallback: false
  };
}

export async function getStaticProps({ params, locale }) {
  const posts = allBlogs
    .filter((blog) => blog.locale === locale)
    .map((post) =>
      pick(post, [
        'slug',
        'title',
        'summary',
        'publishedAt',
        'image',
        'blurDataURL',
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
      posts,
      ...(await serverSideTranslations(locale, [
        'footer',
        'header',
        'category-archive'
      ]))
    }
  };
}

export default function AllPostsByCategoryPage({
  posts,
  category
}: {
  posts: Blog[];
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
