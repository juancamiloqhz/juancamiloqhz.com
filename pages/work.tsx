import { GetStaticProps } from 'next';
import Container from '@/shared/Container';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'work',
        'header',
        'footer',
      ])),
    },
  };
};

export default function MyWorkPage() {
  const { t } = useTranslation('work');
  return (
    <Container
      title={`${t('pageTitle')}`}
      description={`${t('pageDescription')}`}
    >
      <div className="px-8 transition-all duration-500 ease-in-out md:px-28">
        <div className="mx-auto mt-20 mb-16 flex w-full max-w-3xl flex-col items-start justify-center lg:mt-48">
          <h1 className="mb-8 w-full font-serif text-5xl font-bold tracking-tight md:mb-20 md:text-center md:text-7xl ">
            {t('pageTitle')}
          </h1>
        </div>
      </div>
    </Container>
  );
}
