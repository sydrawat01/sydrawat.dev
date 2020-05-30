import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import SEO from '../components/seo';
import config from '../../data/SiteConfig';

export default class Blog extends Component {
  static contextType = ThemeContext; //eslint-disable-line

  render() {
    return (
      <Layout>
        <Helmet title={`Articles – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h2>Articles</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aperiam voluptas
                dolorum expedita natus quibusdam quaerat adipisci magni molestias nesciunt. Ut porro
                magni at dicta accusantium neque veniam? Velit, molestiae.
              </p>
              <Link to="/test">
                <h4>This is a test blog!</h4>
              </Link>
              <h3>Article titles</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque culpa quaerat nobis
                est quos maiores voluptatibus cum deserunt dolor optio inventore beatae eveniet eum
                doloremque dicta modi, dolore adipisci a?
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
