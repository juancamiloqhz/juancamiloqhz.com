import { GetStaticProps } from 'next';
import Link from 'next/link';
import Container from '@/shared/Container';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'about-page',
        'header',
        'footer',
      ])),
    },
  };
};

export default function AboutPage() {
  const { t } = useTranslation('about-page');
  return (
    <Container
      title={`${t('pageTitle')}`}
      description={`${t('pageDescription')}`}
      schemaType="AboutPage"
    >
      <div className="px-4 transition-all duration-500 ease-in-out md:px-28">
        <div className="mx-auto mt-20 mb-16 flex w-full max-w-3xl flex-col items-start justify-center lg:mt-48">
          <h1 className="mb-8 w-full text-5xl font-bold tracking-tight md:mb-20 md:text-center md:text-7xl lg:text-8xl">
            {t('pageTitle')}
          </h1>

          {/* <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t('pageDescription')}
        </p> */}
          <div className="mb-8 w-full leading-6">
            <h2 className="mb-4 text-3xl font-bold">Links</h2>
            <ul className="ml-4 grid list-outside list-disc gap-2 pl-4">
              <li>
                GitHub:{' '}
                <a
                  className="link-primary link transition-all duration-300 ease-in-out hover:ml-2"
                  href="https://github.com/juancamiloqhz"
                >
                  @juancamiloqhz
                </a>
              </li>
              <li>
                Twitter:{' '}
                <a
                  className="link-primary link transition-all duration-300 ease-in-out hover:ml-2"
                  href="https://twitter.com/juancamiloqhz"
                >
                  @juancamiloqhz
                </a>
              </li>
              <li>
                Website:{' '}
                <Link
                  href="https://juancamiloqhz.com"
                  className="link-primary link transition-all duration-300 ease-in-out hover:ml-2"
                >
                  https://juancamiloqhz.com
                </Link>
              </li>
              <li>
                LinkedIn:{' '}
                <a
                  className="link-primary link transition-all duration-300 ease-in-out hover:ml-2"
                  href="https://www.linkedin.com/in/juancamiloqhz/"
                >
                  https://www.linkedin.com/in/juancamiloqhz
                </a>
              </li>
              <li>
                Codepen:{' '}
                <a
                  className="link-primary link transition-all duration-300 ease-in-out hover:ml-2"
                  href="https://codepen.io/juancamiloqhz/"
                >
                  https://codepen.io/juancamiloqhz
                </a>
              </li>
            </ul>
            <h2 className="my-8 text-3xl font-bold">Bio</h2>
            <h3 className="mb-4 text-xl font-bold">{t('jobTitle')}</h3>
            <p>
              {t('jobTitleDescription')}{' '}
              <a className="link-primary link" href="https://vibra.la">
                Vibra.la
              </a>
            </p>
            <h3 className="my-4 text-xl font-bold">
              {t('longThirdPersonTitle')}
            </h3>
            <p>
              {t('longThirdPerson1')}{' '}
              <a className="link-primary link" href="https://vibra.la">
                Vibra.la
              </a>
              {t('longThirdPerson2')}
            </p>
            <h3 className="my-4 text-xl font-bold">
              {t('longFirstPersonTitle')}
            </h3>
            <p>
              {t('longFirstPerson1')}{' '}
              <a className="link-primary link" href="https://vibra.la">
                Vibra.la
              </a>
              {t('longFirstPerson2')}
            </p>
            <h3 className="my-4 text-xl font-bold">
              {t('shortThirdPersonTitle')}
            </h3>
            <p>
              {t('shortThirdPerson1')}{' '}
              <a className="link-primary link" href="https://vibra.la">
                Vibra.la
              </a>
              {t('shortThirdPerson2')}
            </p>
            <h3 className="my-4 text-xl font-bold">
              {t('shortFirstPersonTitle')}
            </h3>
            <p>
              {t('shortFirstPerson1')}{' '}
              <a className="link-primary link" href="https://vibra.la">
                Vibra.la
              </a>
              {t('shortFirstPerson2')}
            </p>
            <h3 className="my-4 text-xl font-bold">{t('educationTitle')}</h3>
            <p>{t('educationDescription')}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
