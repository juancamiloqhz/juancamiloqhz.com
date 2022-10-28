import { GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import components from 'components/MDXComponents';
import { allPosts, type Post } from 'contentlayer/generated';
import PostLayout from 'layouts/PostLayout';

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({
      params: { slug: p.slug }
      // locale: p.locale
    })),
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post = allPosts.find(
    (post) => post.slug === params?.slug && post.locale === locale
  );
  return {
    props: {
      post,
      ...(await serverSideTranslations(locale ?? 'en', [
        'single-post',
        'footer',
        'header',
        'newsletter'
      ]))
    }
  };
};

export default function Post({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code);
  return (
    <PostLayout post={post}>
      <Component components={components} />
    </PostLayout>
  );
}
