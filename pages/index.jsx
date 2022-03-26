import Layout from '../components/Layout';

export default function Home() {
  // console.dir(posts, { depth: null})
  return (
    <>
      <h1 className="text-7xl">Home</h1>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
