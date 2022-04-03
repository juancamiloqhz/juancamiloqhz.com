import Head from 'next/head';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <div className="page-container">
      <Head>
        <title>About | JuanCamiloQHz</title>
      </Head>
      <h1>AboutPage</h1>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <Layout pageTitle="About Me">{page}</Layout>;
};
