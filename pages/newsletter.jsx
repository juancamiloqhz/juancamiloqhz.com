import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageTitle from '../components/common/PageTitle';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Subscribe from '../components/Subscribe/Subscribe';

export default function MailingListPage() {
  const { t } = useTranslation('newsletter-page');
  return (
    <div className="max-w-2xl mx-auto py-2 md:py-4 mb-12">
      <SEO title={t('pageTitle')} description={t('pageDescription')} />
      <PageTitle>{t('pageTitle')}</PageTitle>
      <Subscribe />
    </div>
  );
}

MailingListPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'newsletter-page',
        'newsletter',
        'header',
        'footer',
      ])),
    },
  };
}
