import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import PageTitle from '../components/common/PageTitle';
import Layout from '../components/Layout';

export default function AboutPage() {
  const { t } = useTranslation('about-page');
  return (
    <div className="page-container">
      <Head>
        <title>{t('pageTitle')} | JuanCamiloQHz</title>
      </Head>
      <PageTitle>{t('pageTitle')}</PageTitle>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'about-page',
        'header',
        'footer',
      ])),
    },
  };
}
