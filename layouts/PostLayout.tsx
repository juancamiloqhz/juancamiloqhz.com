import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import { Blog } from 'contentlayer/generated';
import { useTranslation } from 'next-i18next';
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
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="mt-8 w-full">
          <Subscribe />
        </div>
      </article>
    </Container>
  );
}
