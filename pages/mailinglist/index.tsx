import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type Newsletter, allNewsletters } from '@/contentlayer/generated';
import { pick } from 'contentlayer/client';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from '@/components/Container';
import Subscribe from '@/components/Subscribe/Subscribe';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const newsletters = allNewsletters.map((newsletter) =>
    pick(newsletter, ['slug', 'title', 'summary', 'publishedAt']),
  );
  return {
    props: {
      newsletters,
      ...(await serverSideTranslations(locale ?? 'en', [
        'mailinglist-page',
        'mailinglist',
        'header',
        'footer',
      ])),
    },
  };
};

export default function MailingListPage({
  newsletters,
}: {
  newsletters: Newsletter[];
}) {
  const { t } = useTranslation('mailinglist-page');
  return (
    <Container
      title={`${t('pageTitle')}`}
      description={`${t('pageDescription')}`}
    >
      <div className="px-8 transition-all duration-500 ease-in-out md:px-28">
        <div className="mx-auto mt-28 mb-16 flex w-full max-w-2xl flex-col items-start justify-center lg:mt-48">
          <h1 className="mb-8 w-full font-serif text-5xl font-bold tracking-tight md:mb-20 md:text-center md:text-7xl lg:text-8xl">
            {t('pageTitle')}
          </h1>
          <p className="mb-14 text-3xl font-light">
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
  publishedAt,
}: Pick<Newsletter, 'publishedAt' | 'slug'>) {
  const { locale } = useRouter();
  return (
    <li>
      <Link href={`/newsletter/${slug}`}>
        {format(parseISO(publishedAt), 'MMMM dd, yyyy', {
          locale: locale === 'es' ? es : undefined,
        })}
      </Link>
    </li>
  );
}
