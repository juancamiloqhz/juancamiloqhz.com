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
        'footer',
      ])),
    },
  };
};

export default function DevelopmentPage() {
  const { t } = useTranslation('development-page');
  return (
    <Container
      title={`${t('pageTitle')}`}
      description={`${t('pageDescription')}`}
    >
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          {t('pageTitle')}
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t('pageDescription')}
        </p>
      </div>
    </Container>
  );
}
