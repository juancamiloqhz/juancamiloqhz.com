import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { pick } from 'contentlayer/client';
import Container from 'components/Container';
import PageTitle from 'components/common/PageTitle';
import { PostPreview } from 'components/Post';
import { allPosts, type Post } from 'contentlayer/generated';

export async function getStaticPaths() {
  const allTagsSlugs = allPosts
    .map((post) => post.tags.map((tag) => tag.slug))
    .flat();
  const uniqueTagsSlugs = [...new Set(allTagsSlugs)];
  console.log(uniqueTagsSlugs);

  return {
    paths: uniqueTagsSlugs.map((tag) => ({
      params: {
        tag
      }
    })),
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  console.log(params, locale);
  if (!params || !params.tag) return { notFound: true };
  const allPostsByTag = allPosts
    .filter(
      (post) =>
        post.locale === locale &&
        post.tags.map((tag) => tag.slug).includes(params.tag as string)
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
        'tags',
        'locale'
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  console.log(allPostsByTag);

  return {
    props: {
      tag: { name: params.tag, slug: params.tag },
      posts: allPostsByTag,
      ...(await serverSideTranslations(locale ?? 'en', [
        'footer',
        'header',
        'tag-archive'
      ]))
    }
  };
};

export default function TagPostsPage({
  posts,
  tag
}: {
  posts: Post[];
  tag: { name: string; slug: string };
}) {
  const { t } = useTranslation('tag-archive');
  return (
    <Container
      openGraphType="website"
      schemaType="SearchResultsPage"
      title={t('tag-archive:pageTitle', { tag: tag.name })}
      description={t('tag-archive:pageDescription')}
    >
      <PageTitle>{t('tag-archive:pageTitle', { tag: tag.name })}</PageTitle>
      <div className="page-container post-container">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
