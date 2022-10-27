import React from 'react';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import Link from 'next/link';
import { es } from 'date-fns/locale';
import { useRouter } from 'next/router';
import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import { type Post } from 'contentlayer/generated';

export default function PostLayout({
  children,
  post
}: React.PropsWithChildren<{
  post: Post;
}>) {
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
      <article className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold font-serif tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-2">
            <Image
              alt="JuanCamiloQHz"
              height={40}
              width={40}
              src="/avatar.png"
              className="rounded-full object-cover object-center"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <Link passHref href="/about">
                JuanCamiloQHz
              </Link>
              {' / '}
              <time>
                {format(parseISO(post.publishedAt), 'MMMM dd, yyyy', {
                  locale: locale === 'es' ? es : undefined
                })}
              </time>
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {post.readingTime.text}
            {/* {` • `} */}
            {/* <ViewCounter slug={post.slug} /> */}
          </p>
        </div>
        {post.mainImage && (
          <div className="relative h-80 w-full mb-8">
            <Image
              alt={post.title}
              src={post.mainImage}
              // layout="fill"
              height={550}
              width={1200}
              priority
              placeholder="blur"
              blurDataURL={post.mainImageBlurDataURL}
              className="rounded-lg h-[450px] md:h-[550px]"
            />
          </div>
        )}
        <div className="prose dark:prose-dark mb-20">{children}</div>
        <Subscribe />
      </article>
    </Container>
  );
}
