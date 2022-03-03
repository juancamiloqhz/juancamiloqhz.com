import Head from 'next/head';

export default function Meta({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content='Software Developer, Mechanical Engineer and Professional Pyrotechnician'
      />
    </Head>
  );
};


// let's set a default title
Meta.defaultProps = {
  title: 'JuanCamiloQhz - Personal Website',
};