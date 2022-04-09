import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageTitle from '../components/common/PageTitle';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function MailingListPage() {
  const { t } = useTranslation('mailing-list-page');
  return (
    <div className="page-container">
      <SEO title={t('pageTitle')} description={t('pageDescription')} />
      <PageTitle>{t('pageTitle')}</PageTitle>
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
        'mailing-list-page',
        'header',
        'footer',
      ])),
    },
  };
}
