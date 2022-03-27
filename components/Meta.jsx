import Head from 'next/head';

export default function Meta({ title, description }) {
  return (
    <Head>
      <title>{title || 'JuanCamiloQHz - Personal Website'}</title>
      <meta
        name="keywords"
        content="Software Developer, Mechanical Engineer, Professional Pyrotechnician"
      />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

// let's set a default title
Meta.defaultProps = {
  description:
    'Software Developer, Mechanical Engineer and Professional Pyrotechnician',
};
