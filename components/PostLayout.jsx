import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

export default function PostLayout({ children, meta }) {
  return (
    <>
      <Meta title={meta?.title} />
      <Header />
      <main>
        <h1 className="text-center text-6xl font-serif mt-10 mb-20">
          {meta.title}
        </h1>
        <div className="prose dark:prose-invert prose-sm md:prose-base prose-a:decoration-blue-600 mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
