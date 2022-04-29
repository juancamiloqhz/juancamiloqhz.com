import { useMDXComponent } from 'next-contentlayer/hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import components from '../../components/MDXComponents';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';
import PostLayout from 'layouts/PostLayout';
// import { getTweets } from 'lib/twitter';
// import Tweet from 'components/Tweet';

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
  return {
    props: {
      post,
      //   tweets
      ...(await serverSideTranslations(locale, [
        'single-post',
        'footer',
        'header',
        'newsletter'
      ]))
    }
  };
}

export default function Post({ post, tweets }: { post: Blog; tweets?: any[] }) {
  const Component = useMDXComponent(post.body.code);
  //   const StaticTweet = ({ id }) => {
  //     const tweet = tweets.find((tweet) => tweet.id === id);
  //     return <Tweet {...tweet} />;
  //   };

  return (
    <PostLayout post={post}>
      <Component
        components={
          {
            ...components
            // StaticTweet
          } as any
        }
      />
    </PostLayout>
  );
}
