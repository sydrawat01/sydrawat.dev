import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import config from '../../data/SiteConfig';
import favicon from '../images/favicon.png';
import '../styles/main.scss';

export default class MainLayout extends Component {
  static contextType = ThemeContext; // eslint-disable-line

  render() {
    const { dark, notFound } = this.context;
    const { children } = this.props;
    let themeClass = '';

    if (dark && !notFound) {
      themeClass = 'dark';
    } else if (notFound) {
      themeClass = 'not-found';
    }

    return (
      <>
        <Helmet
          bodyAttributes={{
            class: `theme ${themeClass}`,
          }}
        >
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Navigation menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </>
    );
  }
}
