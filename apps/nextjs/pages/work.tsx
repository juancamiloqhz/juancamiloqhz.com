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
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          {t('pageTitle')}
        </h1>
      </div>
    </Container>
  );
}
