import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Container from '../components/Container';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'development-page',
        'header',
        'footer'
      ]))
    }
  };
};

export default function DevelopmentPage() {
  const { t } = useTranslation('development-page');
  return (
    <Container title={t('pageTitle')} description={t('pageDescription')}>
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          {t('pageTitle')}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t('pageDescription')}
        </p>
      </div>
    </Container>
  );
}
