import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { type Post } from '@/contentlayer/generated';
import Container from '@/shared/Container';
import Subscribe from '@/shared/Subscribe';
import { useTranslation } from 'next-i18next';
import { FaTwitter } from 'react-icons/fa';
import { DateFormatter } from '@/components/Post';

export default function PostLayout({
  children,
  post,
  otherPosts,
}: React.PropsWithChildren<{
  post: Post;
  otherPosts: Post[];
}>) {
  const { t } = useTranslation('single-post');
  const { locale } = useRouter();
  return (
    <Container
      title={post.title}
      description={post.summary}
      // imageUrl={post.mainImage}
      // imageUrl={`http://localhost:3000/api/og/post?title=${post.title}`}
      imageUrl={`https://juancamiloqhz.com/api/og/post?title=${post.title}`}
      openGraphType="article"
      schemaType="Article"
      createdAt={new Date(post.publishedAt).toISOString()}
    >
      <div className="px-4 transition-all duration-500 ease-in-out md:px-28">
        <article className="mt-20 mb-24 w-full lg:mt-48">
          <div className="mx-auto mb-8 w-full max-w-screen-lg md:mb-20 md:text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <div className="my-4">
              <DateFormatter
                dateString={new Date(post.publishedAt).toISOString()}
              />
              {' ⋅ '}
              {post.categories?.map((c, index) => {
                if (index === post.categories.length - 1) {
                  return (
                    <Link
                      href={`/blog/category/${c.slug}`}
                      key={index}
                      className="link font-serif uppercase text-base-content/60 md:text-xl"
                    >
                      {c.name}
                    </Link>
                  );
                }
                return (
                  <Link
                    href={`/blog/category/${c.slug}`}
                    key={index}
                    className="link mr-1 font-serif uppercase text-base-content/60 md:text-xl"
                  >
                    {`${c.name},`}
                  </Link>
                );
              })}
            </div>
            <p className="text-base-content/60">
              {post.readingTime.text}
              {/* {` • `} */}
              {/* <ViewCounter slug={post.slug} /> */}
            </p>
          </div>

          {post.mainImage && (
            <div className="relative mx-auto mb-8 h-72 w-full max-w-3xl md:mb-16 md:h-96 lg:h-[28rem]">
              <Image
                alt={post.title}
                src={post.mainImage}
                fill
                priority
                placeholder="blur"
                blurDataURL={post.mainImageBlurDataURL}
                className="rounded-[var(--rounded-btn)] object-cover object-center shadow-xl"
              />
            </div>
          )}

          <div className="mx-auto w-full max-w-2xl border-b border-base-content/30 pb-24">
            <div className="prose-lg prose prose-headings:font-semibold">
              {children}
            </div>
            <div className="mt-24 items-center justify-between lg:flex">
              <div>
                <p className="italic text-base-content/60">
                  {t('published-on')}
                  {' ['}
                  {post.categories?.map((c, index) => {
                    if (index === post.categories.length - 1) {
                      return (
                        <Link
                          href={`/blog/category/${c.slug}`}
                          key={index}
                          className="link font-serif lowercase"
                        >
                          {c.name}
                        </Link>
                      );
                    }
                    return (
                      <Link
                        href={`/blog/category/${c.slug}`}
                        key={index}
                        className="link mr-1 font-serif lowercase"
                      >
                        {`${c.name},`}
                      </Link>
                    );
                  })}
                  {'] ⋅ '}
                  <DateFormatter
                    dateString={new Date(post.publishedAt).toISOString()}
                    normalSize
                  />
                </p>
                <a
                  href={`https://github.com/juancamiloqhz/juancamiloqhz.com/tree/main/data/blog/${post.slug}.${locale}.mdx`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary link italic"
                >
                  {t('edit-this-post')}
                </a>
              </div>
              <a
                href="https://twitter.com/juancamiloqhz"
                className="btn-primary btn mt-6 gap-2 text-base normal-case lg:mt-0"
              >
                <FaTwitter size={17} />
                {t('follow')} @juancamiloqhz
              </a>
            </div>
          </div>
        </article>
        <div className="mx-auto w-full max-w-2xl">
          <h3 className="font-bold uppercase">
            {t('other-things-ive-written')}
          </h3>
          <ul className="mt-6 flex flex-col gap-4">
            {otherPosts.map((p) => (
              <li key={p.slug} className="group">
                <Link
                  href={`/blog/${p.slug}`}
                  className="flex items-center gap-3"
                >
                  <span className="w-28 whitespace-nowrap">
                    <DateFormatter
                      dateString={new Date(p.publishedAt).toISOString()}
                    />
                  </span>
                  <span className="text-lg tracking-tight text-base-content/60 transition-all duration-300 ease-in-out group-hover:ml-3 group-hover:text-primary md:text-2xl">
                    {p.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto my-24 w-full max-w-3xl">
          <Subscribe />
        </div>
      </div>
    </Container>
  );
}
