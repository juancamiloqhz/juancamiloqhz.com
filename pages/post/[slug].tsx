import { useMDXComponent } from 'next-contentlayer/hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
// import { getTweets } from 'lib/twitter';
import components from '../../components/MDXComponents';
import blurImage from '../../lib/blur-images';
// import Tweet from 'components/Tweet';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';

export default function Post({
  post,
  blurDataURL,
  tweets
}: {
  post: Blog;
  blurDataURL: string;
  tweets?: any[];
}) {
  const Component = useMDXComponent(post.body.code);
  //   const StaticTweet = ({ id }) => {
  //     const tweet = tweets.find((tweet) => tweet.id === id);
  //     return <Tweet {...tweet} />;
  //   };

  return (
    <Layout
      pageTitle={post.title}
      // post={post}
    >
      <Component
        blurDataURL={blurDataURL}
        components={
          {
            ...components
            // StaticTweet
          } as any
        }
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({
      params: { slug: p.slug },
      locale: p.locale
    })),
    fallback: false
  };
}

export async function getStaticProps({ params, locale }) {
  const post = allBlogs.find(
    (post) => post.slug === params.slug && post.locale === locale
  );
  //   const tweets = await getTweets(post.tweetIds);
  const { imgBase64 } = await blurImage(post.image);
  return {
    props: {
      post,
      //   tweets
      blurDataURL: imgBase64,
      ...(await serverSideTranslations(locale, [
        'single-post',
        'footer',
        'header'
      ]))
    }
  };
}
