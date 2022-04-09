import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import PageTitle from '../../components/common/PageTitle';
import Layout from '../../components/Layout';
import { PostPreview } from '../../components/Post';
import SEO from '../../components/SEO';
import { getAllPostsByTag, getAllTagSlugs } from '../../lib/blog-api';
import blurImage from '../../lib/blur-images';

export async function getStaticPaths({ locales }) {
  const tags = getAllTagSlugs(locales);
  const paths = [];
  for (const locale of locales) {
    for (const tag of tags) {
      paths.push({
        params: {
          tag,
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
        'tag-archive',
      ])),
    },
  };
}

export default function AuthorPostsPage({ posts }) {
  const { locale, query } = useRouter();
  const { t } = useTranslation('tag-archive');
  return (
    <div>
      <SEO
        url={`https://juancamiloqhz.vercel.app/${
          locale === 'en' ? '' : `${locale}/`
        }tag/${query.tag}`}
        openGraphType="website"
        schemaType="website"
        title={t('tag-archive:pageTitle')}
        description={t('tag-archive:pageDescription')}
      />
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
