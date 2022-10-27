import { GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import { allNewsletters, type Newsletter } from 'contentlayer/generated';
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

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  if (!params?.slug) return { notFound: true };
  const newsletter = allNewsletters.find(
    (newsletter) => newsletter.slug === params.slug
  );
  return {
    props: {
      newsletter,
      ...(await serverSideTranslations(locale ?? 'en', [
        'newsletter-page',
        'newsletter',
        'header',
        'footer'
      ]))
    }
  };
};

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
