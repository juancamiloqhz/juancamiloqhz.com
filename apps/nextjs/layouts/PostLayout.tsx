import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import { type Post } from 'contentlayer/generated';
import { DateFormatter } from 'components/Post';
import { FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

export default function PostLayout({
  children,
  post,
  otherPosts
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
      imageUrl={post.mainImage}
      openGraphType="article"
      schemaType="Article"
      createdAt={new Date(post.publishedAt).toISOString()}
    >
      <div className="px-8 md:px-28 transition-all duration-500 ease-in-out">
        <article className="mt-28 lg:mt-48 mb-24 w-full">
          <div className="max-w-screen-2xl mx-auto w-full mb-8 md:mb-20 md:text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight font-serif">
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
                      className="uppercase font-serif link text-base-content/60 md:text-xl"
                    >
                      {c.name}
                    </Link>
                  );
                }
                return (
                  <Link
                    href={`/blog/category/${c.slug}`}
                    key={index}
                    className="mr-1 uppercase font-serif link text-base-content/60 md:text-xl"
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
            <div className="relative h-72 md:h-96 lg:h-[28rem] mb-8 md:mb-16 max-w-3xl mx-auto w-full">
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

          <div className="max-w-2xl mx-auto w-full border-b border-base-content/30 pb-24">
            <div className="prose prose-lg prose-headings:font-serif prose-headings:font-semibold">
              {children}
            </div>
            <div className="lg:flex items-center justify-between mt-24">
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
                          className="lowercase font-serif link"
                        >
                          {c.name}
                        </Link>
                      );
                    }
                    return (
                      <Link
                        href={`/blog/category/${c.slug}`}
                        key={index}
                        className="mr-1 lowercase font-serif link"
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
                  href={`https://github.com/juancamiloqhz/juancamiloqhz.com/tree/main/apps/nextjs/data/blog/${post.slug}.${locale}.mdx`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary italic"
                >
                  {t('edit-this-post')}
                </a>
              </div>
              <a
                href="https://twitter.com/juancamiloqhz"
                className="btn btn-primary normal-case gap-2 mt-6 lg:mt-0"
              >
                <FaTwitter size={17} />
                {t('follow')} @juancamiloqhz
              </a>
            </div>
          </div>
        </article>
        <div className="max-w-2xl mx-auto w-full">
          <h3 className="font-bold uppercase">
            {t('other-things-ive-written')}
          </h3>
          <ul className="flex flex-col gap-4 mt-6">
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
                  <span className="text-base-content/60 text-lg md:text-2xl group-hover:ml-3 group-hover:text-primary transition-all duration-300 ease-in-out tracking-tight">
                    {p.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-3xl mx-auto w-full my-24">
          <Subscribe />
        </div>
      </div>
    </Container>
  );
}
