import Link from 'next/link';
// import Analytics from 'components/metrics/Analytics';
// import Newsletter from 'components/metrics/Newsletter';
import Container from 'components/Container';
import GitHub from 'components/Metrics/Github';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
// import Gumroad from 'components/metrics/Gumroad';
// import Unsplash from 'components/metrics/Unsplash';
// import YouTube from 'components/metrics/Youtube';
// import TopTracks from 'components/TopTracks';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'dashboard-page',
        'header',
        'footer'
      ]))
    },
    revalidate: 60
  };
};

export default function Dashboard() {
  const { t } = useTranslation(['dashboard-page']);
  return (
    <Container
      title={t('dashboard-page:metaTitle')}
      description={t('dashboard-page:metaDescription')}
    >
      <div className="px-8 md:px-28 transition-all duration-500 ease-in-out">
        <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mt-28 lg:mt-48 mb-16 w-full">
          <h1 className="mb-8 md:mb-10 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-serif md:text-center w-full">
            {t('dashboard-page:metaTitle')}
          </h1>

          <div className="mb-8">
            <p className="mb-4 text-base-content/60">
              {t('dashboard-page:pageDescription')}&nbsp;
              <Link
                href="/blog/fetching-data-with-swr"
                className="link link-primary"
              >
                blog series.
              </Link>
            </p>
          </div>
          {/* <div className="flex flex-col w-full">
          <Unsplash />
          <YouTube />
        </div> */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
            {/* <Analytics /> */}
            <GitHub />
          </div>
          {/* <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Gumroad />
          <Newsletter />
        </div> */}
          {/* <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I&apos;m currently jamming to? Here&apos;s my top tracks
          on Spotify updated daily.
        </p>
        <TopTracks /> */}
        </div>
      </div>
    </Container>
  );
}
