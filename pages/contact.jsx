import Head from 'next/head';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <div className="page-container">
      <Head>
        <title>Contact | JuanCamiloQHz</title>
      </Head>
      <h1>C</h1>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <Layout pageTitle="Contact Me">{page}</Layout>;
};
