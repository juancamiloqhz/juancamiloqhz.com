import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Meta />
      <Header pageTitle={pageTitle} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
