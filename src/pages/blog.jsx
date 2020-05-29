import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import SEO from '../components/seo';
import config from '../../data/SiteConfig';

export default class Blog extends Component {
  static contextType = ThemeContext; //eslint-disable-line

  render() {
    return (
      <Layout>
        <Helmet title={`Blog – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h2>Blogs</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aperiam voluptas
                dolorum expedita natus quibusdam quaerat adipisci magni molestias nesciunt. Ut porro
                magni at dicta accusantium neque veniam? Velit, molestiae.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
