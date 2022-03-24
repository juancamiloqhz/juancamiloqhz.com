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
        <div className="prose dark:prose-invert prose-sm md:prose-base prose-a:decoration-blue-600  max-w-none">
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
