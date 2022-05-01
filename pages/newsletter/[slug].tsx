import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import { allNewsletters } from 'contentlayer/generated';
import type { Newsletter } from 'contentlayer/generated';
import NewsletterLayout from 'layouts/NewsletterLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticPaths() {
  return {
    paths: allNewsletters.map((newsletter) => ({
      params: { slug: newsletter.slug },
      locale: newsletter.locale
    })),
    fallback: false
  };
}

export async function getStaticProps({ params, locale }) {
  const newsletter = allNewsletters.find(
    (newsletter) => newsletter.slug === params.slug
  );
  // console.log(newsletter);
  return {
    props: {
      newsletter,
      ...(await serverSideTranslations(locale, [
        'newsletter-page',
        'newsletter',
        'header',
        'footer'
      ]))
    }
  };
}

export default function NewsletterPage({
  newsletter
}: {
  newsletter: Newsletter;
}) {
  const Component = useMDXComponent(newsletter.body.code);

  return (
    <NewsletterLayout newsletter={newsletter}>
      <Component components={{ ...components } as any} />
    </NewsletterLayout>
  );
}
