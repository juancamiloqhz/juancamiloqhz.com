import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PageTitle from '../components/common/PageTitle';
import Container from '../components/Container';

export default function AboutPage() {
  const { t } = useTranslation('about-page');
  return (
    <Container
      title={t('pageTitle')}
      description={t('pageDescription')}
      schemaType="AboutPage"
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <PageTitle>{t('pageTitle')}</PageTitle>
      </div>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'about-page',
        'header',
        'footer'
      ]))
    }
  };
}
