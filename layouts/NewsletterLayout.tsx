import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import type { Newsletter } from 'contentlayer/generated';
import type { PropsWithChildren } from 'react';

export default function NewsletterLayout({
  children,
  newsletter
}: PropsWithChildren<{ newsletter: Newsletter }>) {
  return (
    <Container
      title={newsletter.title}
      description={newsletter.summary}
      createdAt={new Date(newsletter.publishedAt).toISOString()}
      openGraphType="article"
      schemaType="Article"
    >
      <article className="flex flex-col items-start justify-center max-w-3xl mx-auto mb-16 w-full">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {newsletter.title}
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
              {'JuanCamiloQHz / '}
              {format(parseISO(newsletter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-500 min-w-32 md:mt-0">
            {newsletter.readingTime.text}
          </p>
        </div>
        <div className="w-full prose dark:prose-dark mx-auto mt-4 mb-20">
          {children}
        </div>
        <Subscribe />
      </article>
    </Container>
  );
}
