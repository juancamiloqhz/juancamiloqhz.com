import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from 'components/Container';
import PageTitle from '../../components/common/PageTitle';
import { PostPreview } from '../../components/Post';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';
import { pick } from 'contentlayer/client';

export async function getStaticPaths() {
  let uniqueTags = [];
  allBlogs
    .flatMap((blog) =>
      blog.tags.map((tag: { name: string; slug: string }) => ({
        slug: tag.slug,
        locale: blog.locale
      }))
    )
    .filter((t) => {
      const i = uniqueTags.findIndex(
        (u) => u.slug === t.slug && u.locale === t.locale
      );
      if (i === -1) {
        uniqueTags.push(t);
        return true;
      }
      return false;
    });
  // console.log(uniqueTags);
  return {
    paths: uniqueTags.map((t) => ({
      params: { tag: t.slug },
      locale: t.locale
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
      tag: { name: params.tag, slug: params.tag },
      posts,
      ...(await serverSideTranslations(locale, [
        'footer',
        'header',
        'tag-archive'
      ]))
    }
  };
}

export default function AuthorPostsPage({
  posts,
  tag
}: {
  posts: Blog[];
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
