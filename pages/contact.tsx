import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ContactMe } from '@/components/IndexPage';
// import PageTitle from '../components/shared/PageTitle';
import Container from '../components/Container';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', [
        'contact-page',
        'header',
        'footer',
      ])),
    },
  };
};

//Taken from https://greedytaker.in/nextjs/email-sending-contact-page-nextjs
export default function AboutPage() {
  const { t } = useTranslation('contact-page');

  return (
    <Container
      title={`${t('pageTitle')}`}
      description={`${t('pageDescription')}`}
      schemaType="ContactPage"
    >
      <div className="mx-auto mt-36 flex w-full max-w-3xl flex-col items-start justify-center">
        {/* <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          {t('pageTitle')}
        </h1>
        <p className="mb-10">{t('pageDescription')}</p> */}
        <ContactMe />
      </div>
    </Container>
  );
}
