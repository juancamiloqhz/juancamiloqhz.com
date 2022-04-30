import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import { Blog } from 'contentlayer/generated';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

export default function PostLayout({
  children,
  post
}: PropsWithChildren<{
  post: Blog;
}>) {
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
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
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
        <div className="w-full mt-4 prose dark:prose-dark mx-auto">
          {children}
        </div>
        <div className="mt-8 w-full">
          <Subscribe />
        </div>
      </article>
    </Container>
  );
}
