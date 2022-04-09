import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../../components/Layout';
import { getPostBySlug, uniquePostSlugs } from '../../lib/blog-api';
import markdownToHtml from '../../lib/markdownToHtml';
import { PostBody, PostHeader } from '../../components/Post';
import SEO from '../../components/SEO';
import { useRouter } from 'next/router';

export async function getStaticProps({ params, locale }) {
  // console.log('getStaticProps', params, locale);
  const post = getPostBySlug(params.slug, locale, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'categories',
  ]);
  // console.log('post', post.title);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
      ...(await serverSideTranslations(locale, [
        'single-post',
        'footer',
        'header',
      ])),
    },
  };
}

export async function getStaticPaths({ locales }) {
  const uniqueSlugs = uniquePostSlugs();
  // console.log('uniqueSlugs', uniqueSlugs);
  const paths = [];
  for (const locale of locales) {
    for (const slug of uniqueSlugs) {
      // console.log(post.slug, locale);
      paths.push({
        params: {
          slug,
        },
        locale,
      });
    }
  }
  // console.log('paths', paths);
  return {
    paths,
    fallback: false,
  };
}

export default function SinglePost({ post }) {
  const { locale } = useRouter();
  return (
    <article className="mb-32 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
      <SEO
        url={`https://juancamiloqhz.vercel.app/${
          locale === 'en' ? '' : `${locale}/`
        }blog/${post.slug}`}
        openGraphType="article"
        schemaType="article"
        title={`${post.title}`}
        description={post.excerpt || ''}
        imageUrl={post.ogImage?.url || ''}
        authorUrl={`https://juancamiloqhz.vercel.app/${
          locale === 'en' ? '' : `${locale}/`
        }about`}
        name="JuanCamilo"
        lastName="QHz"
        username="juancamiloqhz"
        gender="male"
        createdAt={post.date}
      />
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
        categories={post.categories}
      />
      <PostBody content={post.content} />
    </article>
  );
}

SinglePost.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
