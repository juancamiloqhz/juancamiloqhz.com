import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

export default function Layout({ children, meta, pageTitle }) {
  return (
    <>
      <Meta title={meta?.title} />
      <Header pageTitle={pageTitle} />

      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
