import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from '../components/Container';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'work',
        'header',
        'footer'
      ]))
    }
  };
};

export default function MyWorkPage() {
  const { t } = useTranslation('work');
  return (
    <Container title={t('pageTitle')} description={t('pageDescription')}>
      <div className="px-8 md:px-28 transition-all duration-500 ease-in-out">
        <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mt-28 lg:mt-48 mb-16 w-full">
          <h1 className="mb-8 md:mb-20 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-serif md:text-center w-full">
            {t('pageTitle')}
          </h1>
        </div>
      </div>
    </Container>
  );
}
