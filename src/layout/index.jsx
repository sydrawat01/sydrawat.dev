import * as React from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../context/ThemeContext';
import config from '../../data/SiteConfig';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import '../styles/main.scss';

const Layout = ({ children }) => (
  <>
    <ThemeContext.Consumer>
      {theme => (
        <div
          className={theme.dark ? 'dark' : 'light'}
          style={{
            margin: `0 auto`,
            padding: `0px 0.1rem 0.1rem`,
            paddingTop: 0,
          }}
        >
          <Navigation menuLinks={config.menuLinks} />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      )}
    </ThemeContext.Consumer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
