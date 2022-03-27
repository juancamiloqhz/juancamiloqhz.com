import { Layout } from '../components';

export default function AboutPage() {
  return (
    <div className="page-container">
      <h1>AboutPage</h1>
    </div>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return <Layout pageTitle="About Me">{page}</Layout>;
};
