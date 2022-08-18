import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from '../components/Container';

import { GetStaticProps } from 'next';
import Subscribe from '../components/Subscribe/Subscribe';
import { allNewsletters, Newsletter } from 'contentlayer/generated';
import { pick } from 'contentlayer/client';
import NewsletterLink from 'components/NewsletterLink';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const newsletters = allNewsletters.map((newsletter) =>
    pick(newsletter, ['slug', 'title', 'summary', 'publishedAt'])
  );
  return {
    props: {
      newsletters,
      ...(await serverSideTranslations(locale, [
        'newsletter-page',
        'newsletter',
        'header',
        'footer'
      ]))
    }
  };
};

export default function MailingListPage({
  newsletters
}: {
  newsletters: Newsletter[];
}) {
  const { t } = useTranslation('newsletter-page');
  return (
    <Container title={t('pageTitle')} description={t('pageDescription')}>
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          {t('pageTitle')}
        </h1>
        <Subscribe />
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight md:text-4xl">
          {t('archive')}
        </h3>
        <div className="prose dark:prose-dark">
          <ul>
            {newsletters
              .sort(
                (a, b) =>
                  Number(new Date(b.publishedAt)) -
                  Number(new Date(a.publishedAt))
              )
              .map((newsletter) => (
                <NewsletterLink key={newsletter.title} {...newsletter} />
              ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
