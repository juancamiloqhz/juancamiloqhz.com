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
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          {t('metaTitle')}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t('pageDescription')}
        </p>
        <Guestbook fallbackData={fallbackData} />
      </div>
    </Container>
  );
}
