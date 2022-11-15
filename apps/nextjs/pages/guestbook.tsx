import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import prisma from 'lib/prisma';
import Container from 'components/Container';
import Guestbook from 'components/Guestbook';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc'
    }
  });

  const fallbackData = entries.map((entry: any) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString()
  }));

  return {
    props: {
      fallbackData,
      ...(await serverSideTranslations(locale ?? 'en', [
        'guestbook-page',
        'header',
        'footer'
      ]))
    },
    revalidate: 60
  };
};

export default function GuestbookPage({
  fallbackData
}: {
  fallbackData: any[];
}) {
  const { t } = useTranslation('guestbook-page');
  return (
    <Container title={t('metaTitle')} description={t('metaDescription')}>
      <div className="px-8 md:px-28 transition-all duration-500 ease-in-out">
        <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mt-28 lg:mt-48 mb-16 w-full">
          <h1 className="mb-8 md:mb-20 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-serif md:text-center w-full">
            {t('metaTitle')}
          </h1>

          <p className="text-base-content/60 mb-4 text-xl">
            {t('pageDescription')}
          </p>
          <Guestbook fallbackData={fallbackData} />
        </div>
      </div>
    </Container>
  );
}
