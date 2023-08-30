import { GetStaticProps } from "next"
import { allPosts, type Post } from "contentlayer/generated"
import PostLayout from "layouts/PostLayout"
import { useMDXComponent } from "next-contentlayer/hooks"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import components from "@/components/MDXComponents"

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({
      params: { slug: post.slug },
      locale: post.locale,
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const post = allPosts.find(
    (post) => post.slug === params?.slug && post.locale === locale
  )
  const otherPosts = allPosts
    .filter((p) => p.slug !== params?.slug && p.locale === locale)
    .slice(0, 10)
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
  return {
    props: {
      post,
      otherPosts,
      ...(await serverSideTranslations(locale ?? "en", [
        "single-post",
        "footer",
        "header",
        "mailinglist",
      ])),
    },
  }
}

export default function Post({
  post,
  otherPosts,
}: {
  post: Post
  otherPosts: Post[]
}) {
  const Component = useMDXComponent(post.body.code)
  return (
    <PostLayout post={post} otherPosts={otherPosts}>
      <Component components={components} />
    </PostLayout>
  )
}
