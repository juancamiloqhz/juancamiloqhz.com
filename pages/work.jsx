import Head from 'next/head';
import Layout from '../components/Layout';

export default function MyWorkPage() {
  return (
    <div className="page-container">
      <Head>
        <title>My Work | JuanCamiloQHz</title>
      </Head>
      <h1>Work Page</h1>
    </div>
  );
}

MyWorkPage.getLayout = function getLayout(page) {
  return <Layout pageTitle="My Work">{page}</Layout>;
};
