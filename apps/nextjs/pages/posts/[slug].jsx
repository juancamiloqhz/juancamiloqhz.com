import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getPostBySlug, uniquePostSlugs } from '../../lib/blog-api';
import markdownToHtml from '../../lib/markdownToHtml';
import { PostBody, PostHeader } from '../../components/Post';
import SEO from '../../components/SEO';
import { useRouter } from 'next/router';
import blurImage from '../../lib/blur-images';

export async function getStaticPaths({ locales }) {
  const uniqueSlugs = uniquePostSlugs();
  // console.log('uniqueSlugs', uniqueSlugs);
  const paths = [];
  for (const locale of locales) {
    for (const slug of uniqueSlugs) {
      // console.log(post.slug, locale);
      paths.push({
        params: {
          slug
        },
        locale
      });
    }
  }
  // console.log('paths', paths);
  return {
    paths,
    fallback: false
  };
}

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
    'categories'
  ]);
  // console.log('post', post.title);
  const content = await markdownToHtml(post.content || '');

  const { imgBase64 } = await blurImage(post.coverImage);

  return {
    props: {
      post: {
        ...post,
        content
      },
      blurDataURL: imgBase64,
      ...(await serverSideTranslations(locale, [
        'single-post',
        'footer',
        'header'
      ]))
    }
  };
}

export default function SinglePost({ post, blurDataURL }) {
  const { locale } = useRouter();
  return (
    <article className="mb-32 mx-auto max-w-3xl px-6 md:px-8">
      <SEO
        url={`https://juancamiloqhz.com/${
          locale === 'en' ? '' : `${locale}/`
        }blog/${post.slug}`}
        openGraphType="article"
        schemaType="Article"
        title={`${post.title}`}
        description={post.excerpt || ''}
        imageUrl={post.ogImage?.url || ''}
        authorUrl={`https://juancamiloqhz.com/${
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
        publishedAt={post.date}
        author={post.author}
        categories={post.categories}
        blurDataURL={blurDataURL}
      />
      <PostBody content={post.content} />
    </article>
  );
}
