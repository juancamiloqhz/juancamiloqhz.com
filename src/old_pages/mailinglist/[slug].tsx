import { GetStaticProps } from "next"
import MailingListLayout from "@/layouts/MailingListLayout"
// import { allNewsletters, type Newsletter } from "contentlayer/generated"
import { Newsletter } from "@/types"
import { useMDXComponent } from "next-contentlayer/hooks"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import components from "@/components/MDXComponents"

const allNewsletters: Newsletter[] = []

export async function getStaticPaths() {
  return {
    paths: allNewsletters.map((newsletter) => ({
      params: { slug: newsletter.slug },
      locale: newsletter.locale,
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  if (!params?.slug) return { notFound: true }
  const newsletter = allNewsletters.find(
    (newsletter) => newsletter.slug === params.slug
  )
  return {
    props: {
      newsletter,
      ...(await serverSideTranslations(locale ?? "en", [
        "mailinglist-page",
        "mailinglist",
        "header",
        "footer",
      ])),
    },
  }
}

export default function MailingListSinglePage({
  newsletter,
}: {
  newsletter: Newsletter
}) {
  const Component = useMDXComponent(newsletter.body.code)

  return (
    <MailingListLayout newsletter={newsletter}>
      <Component components={{ ...components } as any} />
    </MailingListLayout>
  )
}
