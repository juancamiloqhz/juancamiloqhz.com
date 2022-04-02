import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <div className="page-container">
      <h1>Work Page</h1>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <Layout pageTitle="My Work">{page}</Layout>;
};
