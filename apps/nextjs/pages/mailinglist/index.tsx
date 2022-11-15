import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from 'components/Container';

import { GetStaticProps } from 'next';
import Subscribe from 'components/Subscribe/Subscribe';
import { allNewsletters, type Newsletter } from 'contentlayer/generated';
import { pick } from 'contentlayer/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const newsletters = allNewsletters.map((newsletter) =>
    pick(newsletter, ['slug', 'title', 'summary', 'publishedAt'])
  );
  return {
    props: {
      newsletters,
      ...(await serverSideTranslations(locale ?? 'en', [
        'mailinglist-page',
        'mailinglist',
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
  const { t } = useTranslation('mailinglist-page');
  return (
    <Container title={t('pageTitle')} description={t('pageDescription')}>
      <div className="px-8 md:px-28 transition-all duration-500 ease-in-out">
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mt-28 lg:mt-48 mb-16 w-full">
          <h1 className="mb-8 md:mb-20 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-serif md:text-center w-full">
            {t('pageTitle')}
          </h1>
          <p className="text-3xl font-light mb-14">
            I run an email list for people interested in front-end development,
            static sites and the IndieWeb. Want to join?
          </p>
          <Subscribe />
          {/* <h3 className="mt-8 mb-4 text-2xl font-bold font-serif tracking-tight md:text-4xl">
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
          </div> */}
        </div>
      </div>
    </Container>
  );
}

function NewsletterLink({
  slug,
  publishedAt
}: Pick<Newsletter, 'publishedAt' | 'slug'>) {
  const { locale } = useRouter();
  return (
    <li>
      <Link href={`/newsletter/${slug}`}>
        {format(parseISO(publishedAt), 'MMMM dd, yyyy', {
          locale: locale === 'es' ? es : undefined
        })}
      </Link>
    </li>
  );
}
