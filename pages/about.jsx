import { Layout } from '../components';

export default function AboutPage() {
  return <div>AboutPage</div>;
}

AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
