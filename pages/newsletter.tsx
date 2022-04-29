import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageTitle from '../components/common/PageTitle';
import Container from '../components/Container';

import Subscribe from '../components/Subscribe/Subscribe';

export default function MailingListPage() {
  const { t } = useTranslation('newsletter-page');
  return (
    <Container title={t('pageTitle')} description={t('pageDescription')}>
      <PageTitle>{t('pageTitle')}</PageTitle>
      <Subscribe />
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'newsletter-page',
        'newsletter',
        'header',
        'footer'
      ]))
    }
  };
}
