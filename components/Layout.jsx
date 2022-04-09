import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
