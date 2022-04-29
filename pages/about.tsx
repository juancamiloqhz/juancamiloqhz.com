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
      <PageTitle>{t('pageTitle')}</PageTitle>
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
