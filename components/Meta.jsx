import Head from 'next/head';

export default function Meta({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content='Software Developer, Mechanical Engineer, Professional Pyrotechnician'
      />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};


// let's set a default title
Meta.defaultProps = {
  title: 'JuanCamiloQhz - Personal Website',
  description: 'Software Developer, Mechanical Engineer and Professional Pyrotechnician'
};