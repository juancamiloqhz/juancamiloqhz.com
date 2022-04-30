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
      ...(await serverSideTranslations(locale, [
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
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {t('dashboard-page:metaTitle')}
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t('dashboard-page:pageDescription')}&nbsp;
            <Link href="/blog/fetching-data-with-swr">
              <a className="text-gray-900 dark:text-gray-100 underline">
                blog series.
              </a>
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
    </Container>
  );
}
