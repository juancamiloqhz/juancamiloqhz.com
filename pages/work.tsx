import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageTitle from '../components/common/PageTitle';
import Container from '../components/Container';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['work', 'header', 'footer']))
    }
  };
}

export default function MyWorkPage() {
  const { t } = useTranslation('work');
  return (
    <Container title={t('pageTitle')} description={t('pageDescription')}>
      <PageTitle>{t('pageTitle')}</PageTitle>
    </Container>
  );
}
