import { GetStaticProps } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

// import prisma from "@/lib/prisma"
import Guestbook from "@/components/Guestbook"
import Container from "@/components/shared/Container"

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // const entries = await prisma.guestbook.findMany({
  //   orderBy: {
  //     updated_at: "desc",
  //   },
  // })

  // const fallbackData = entries.map((entry: any) => ({
  //   id: entry.id.toString(),
  //   body: entry.body,
  //   created_by: entry.created_by.toString(),
  //   updated_at: entry.updated_at.toString(),
  // }))

  return {
    props: {
      fallbackData: [],
      ...(await serverSideTranslations(locale ?? "en", [
        "guestbook-page",
        "header",
        "footer",
      ])),
    },
    revalidate: 60,
  }
}

export default function GuestbookPage({
  fallbackData,
}: {
  fallbackData: any[]
}) {
  const { t } = useTranslation("guestbook-page")
  return (
    <Container
      title={`${t("metaTitle")}`}
      description={`${t("metaDescription")}`}
    >
      <div className="px-4 transition-all duration-500 ease-in-out md:px-28">
        <div className="mx-auto mt-20 mb-16 flex w-full max-w-3xl flex-col items-start justify-center lg:mt-48">
          <h1 className="mb-8 w-full text-5xl font-bold tracking-tight md:mb-20 md:text-center md:text-7xl">
            {t("metaTitle")}
          </h1>

          <p className="mb-6 text-lg text-base-content/60">
            {t("pageDescription")}
          </p>
          <Guestbook fallbackData={fallbackData} />
        </div>
      </div>
    </Container>
  )
}
