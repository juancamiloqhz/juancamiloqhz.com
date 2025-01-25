import type { PropsWithChildren } from "react"
import Image from "next/image"
// import type { Newsletter } from "contentlayer/generated"
import { Newsletter } from "@/types"
import { format, parseISO } from "date-fns"

import Container from "@/components/shared/Container"
import Subscribe from "@/components/shared/Subscribe"

export default function MailingListLayout({
  children,
  newsletter,
}: PropsWithChildren<{ newsletter: Newsletter }>) {
  return (
    <Container
      title={newsletter.title}
      description={newsletter.summary}
      createdAt={new Date(newsletter.publishedAt).toISOString()}
      openGraphType="article"
      schemaType="Article"
    >
      <article className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {newsletter.title}
        </h1>
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              alt="JuanCamiloQHz"
              height={40}
              width={40}
              src="/avatar.png"
              className="rounded-full object-cover object-center"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {"JuanCamiloQHz / "}
              {format(parseISO(newsletter.publishedAt), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="min-w-32 mt-2 text-sm text-gray-500 md:mt-0">
            {newsletter.readingTime.text}
          </p>
        </div>
        <div className="dark:prose-dark prose mx-auto mt-4 mb-20 w-full">
          {children}
        </div>
        <Subscribe />
      </article>
    </Container>
  )
}
