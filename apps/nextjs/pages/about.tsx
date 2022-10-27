import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import Container from '../components/Container';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'about-page',
        'header',
        'footer'
      ]))
    }
  };
};

export default function AboutPage() {
  const { t } = useTranslation('about-page');
  return (
    <Container
      title={t('pageTitle')}
      description={t('pageDescription')}
      schemaType="AboutPage"
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-16">
          {t('pageTitle')}
        </h1>
        {/* <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t('pageDescription')}
        </p> */}
        <div className="mb-8 prose dark:prose-dark leading-6 w-full">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter:{' '}
              <a href="https://twitter.com/juancamiloqhz">@juancamiloqhz</a>
            </li>
            <li>
              GitHub:{' '}
              <a href="https://github.com/juancamiloqhz">@juancamiloqhz</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://juancamiloqhz.com">
                https://juancamiloqhz.com
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/juancamiloqhz/">
                https://www.linkedin.com/in/juancamiloqhz
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>{t('jobTitle')}</h3>
          <p>
            {t('jobTitleDescription')} <a href="https://vibra.la">Vibra.la</a>
          </p>
          <h3>{t('longThirdPersonTitle')}</h3>
          <p>
            {t('longThirdPerson1')} <a href="https://vibra.la">Vibra.la</a>
            {t('longThirdPerson2')}
          </p>
          <h3>{t('longFirstPersonTitle')}</h3>
          <p>
            {t('longFirstPerson1')} <a href="https://vibra.la">Vibra.la</a>
            {t('longFirstPerson2')}{' '}
          </p>
          <h3>{t('shortThirdPersonTitle')}</h3>
          <p>
            {t('shortThirdPerson1')} <a href="https://vibra.la">Vibra.la</a>
            {t('shortThirdPerson2')}
          </p>
          <h3>{t('shortFirstPersonTitle')}</h3>
          <p>
            {t('shortFirstPerson1')} <a href="https://vibra.la">Vibra.la</a>
            {t('shortFirstPerson2')}
          </p>
          <h3>{t('educationTitle')}</h3>
          <p>{t('educationDescription')}</p>
        </div>
      </div>
    </Container>
  );
}
