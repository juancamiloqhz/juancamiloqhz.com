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
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
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
            <p className="text-sm">
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
          <p className="text-sm">
            {post.readingTime.text}
            {/* {` • `} */}
            {/* <ViewCounter slug={post.slug} /> */}
          </p>
        </div>
        {post.mainImage && (
          <div className="relative h-96 w-full mb-8">
            <Image
              alt={post.title}
              src={post.mainImage}
              fill
              priority
              placeholder="blur"
              blurDataURL={post.mainImageBlurDataURL}
              className="rounded-lg"
            />
          </div>
        )}
        <div className="prose mb-20">{children}</div>
        <Subscribe />
      </article>
    </Container>
  );
}
