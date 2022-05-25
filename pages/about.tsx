import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import Container from '../components/Container';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
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
                <a>https://juancamiloqhz.com</a>
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
          <h3>Long, 3rd Person</h3>
          <p>
            Juan Camilo Quintero is a software engineer, entrepreneur, and
            entrepreneur-in-residence. He is a co-founder and director of{' '}
            <a href="https://vibra.la">Vibra.la</a>, a startup that provides a
            platform for the creation of content and services for the digital
            age.
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I&apos;m Juan Camilo Quintero, a software engineer,
            entrepreneur, and entrepreneur-in-residence. I&apos;m a co-founder
            and director of <a href="https://vibra.la">Vibra.la</a>, a startup
            that provides a platform for the creation of content and services
            for the digital age.
          </p>
          <h3>Short, 3rd Person</h3>
          <p>
            Juan Camilo Quintero is the Director of Technology at{' '}
            <a href="https://vibra.la">Vibra.la</a>, a startup that provides a
            platform for the creation ...
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I&apos;m Juan Camilo Quintero, the Director of Technology at{' '}
            <a href="https://vibra.la">Vibra.la</a>, a startup that provides a
            platform for the creation ...
          </p>
          <h3>Education</h3>
          <p>
            Juan Camilo Quintero graduated from the EAFIT University with a
            Bachelor&apos;s degree in Mechanical Engineering and a MBA.
            Currently with 6 years of experience in Software Engineering.
          </p>
        </div>
      </div>
    </Container>
  );
}
