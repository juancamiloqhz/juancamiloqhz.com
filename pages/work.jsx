import { Layout } from '../components';

export default function AboutPage() {
  return <h1>Work Page</h1>;
}

AboutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
