import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Container from 'components/Container';

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
      <div className="px-8 md:px-28 transition-all duration-500 ease-in-out">
        <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mt-28 lg:mt-48 mb-16 w-full">
          <h1 className="mb-8 md:mb-20 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-serif md:text-center w-full">
            {t('pageTitle')}
          </h1>

          {/* <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t('pageDescription')}
        </p> */}
          <div className="mb-8 leading-6 w-full">
            <h2 className="text-3xl font-bold mb-4">Links</h2>
            <ul className="list-disc list-outside pl-4 ml-4 gap-2 grid">
              <li>
                GitHub:{' '}
                <a
                  className="link link-primary hover:ml-2 transition-all duration-300 ease-in-out"
                  href="https://github.com/juancamiloqhz"
                >
                  @juancamiloqhz
                </a>
              </li>
              <li>
                Twitter:{' '}
                <a
                  className="link link-primary hover:ml-2 transition-all duration-300 ease-in-out"
                  href="https://twitter.com/juancamiloqhz"
                >
                  @juancamiloqhz
                </a>
              </li>
              <li>
                Website:{' '}
                <Link
                  href="https://juancamiloqhz.com"
                  className="link link-primary hover:ml-2 transition-all duration-300 ease-in-out"
                >
                  https://juancamiloqhz.com
                </Link>
              </li>
              <li>
                LinkedIn:{' '}
                <a
                  className="link link-primary hover:ml-2 transition-all duration-300 ease-in-out"
                  href="https://www.linkedin.com/in/juancamiloqhz/"
                >
                  https://www.linkedin.com/in/juancamiloqhz
                </a>
              </li>
              <li>
                Codepen:{' '}
                <a
                  className="link link-primary hover:ml-2 transition-all duration-300 ease-in-out"
                  href="https://codepen.io/juancamiloqhz/"
                >
                  https://codepen.io/juancamiloqhz
                </a>
              </li>
            </ul>
            <h2 className="text-3xl font-bold my-8">Bio</h2>
            <h3 className="text-xl font-bold mb-4">{t('jobTitle')}</h3>
            <p>
              {t('jobTitleDescription')}{' '}
              <a className="link link-primary" href="https://vibra.la">
                Vibra.la
              </a>
            </p>
            <h3 className="text-xl font-bold my-4">
              {t('longThirdPersonTitle')}
            </h3>
            <p>
              {t('longThirdPerson1')}{' '}
              <a className="link link-primary" href="https://vibra.la">
                Vibra.la
              </a>
              {t('longThirdPerson2')}
            </p>
            <h3 className="text-xl font-bold my-4">
              {t('longFirstPersonTitle')}
            </h3>
            <p>
              {t('longFirstPerson1')}{' '}
              <a className="link link-primary" href="https://vibra.la">
                Vibra.la
              </a>
              {t('longFirstPerson2')}
            </p>
            <h3 className="text-xl font-bold my-4">
              {t('shortThirdPersonTitle')}
            </h3>
            <p>
              {t('shortThirdPerson1')}{' '}
              <a className="link link-primary" href="https://vibra.la">
                Vibra.la
              </a>
              {t('shortThirdPerson2')}
            </p>
            <h3 className="text-xl font-bold my-4">
              {t('shortFirstPersonTitle')}
            </h3>
            <p>
              {t('shortFirstPerson1')}{' '}
              <a className="link link-primary" href="https://vibra.la">
                Vibra.la
              </a>
              {t('shortFirstPerson2')}
            </p>
            <h3 className="text-xl font-bold my-4">{t('educationTitle')}</h3>
            <p>{t('educationDescription')}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
