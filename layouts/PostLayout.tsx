import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import { Blog } from 'contentlayer/generated';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { es } from 'date-fns/locale';
import { useRouter } from 'next/router';

export default function PostLayout({
  children,
  post
}: PropsWithChildren<{
  post: Blog;
}>) {
  const { locale } = useRouter();
  return (
    <Container
      title={post.title}
      description={post.summary}
      imageUrl={post.image}
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
              height={30}
              width={30}
              src="/avatar.png"
              className="rounded-full"
              objectFit="cover"
              objectPosition="center"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <Link passHref href="/about">
                JuanCamiloQHz
              </Link>
              {' / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy', {
                locale: locale === 'es' && es
              })}
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {post.readingTime.text}
            {/* {` • `} */}
            {/* <ViewCounter slug={post.slug} /> */}
          </p>
        </div>
        {post.image && (
          <div className="relative h-80 w-full">
            <Image
              alt={post.title}
              src={post.image}
              // layout="fill"
              height={550}
              width={1200}
              priority
              placeholder="blur"
              blurDataURL={post.blurDataURL}
              className="rounded-lg h-[450px] md:h-[550px]"
            />
          </div>
        )}
        <div className="w-full mt-4 mb-20 prose dark:prose-dark mx-auto">
          {children}
        </div>

        <Subscribe />
      </article>
    </Container>
  );
}
