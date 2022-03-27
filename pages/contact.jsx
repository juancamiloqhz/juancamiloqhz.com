import { Layout } from '../components';

export default function AboutPage() {
  return (
    <div className="page-container">
      <h1>C</h1>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <Layout pageTitle="Contact Me">{page}</Layout>;
};
