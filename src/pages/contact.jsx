import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import SEO from '../components/seo';
import config from '../../data/SiteConfig';

export default class Contact extends Component {
  static contextType = ThemeContext; //eslint-disable-line

  render() {
    return (
      <Layout>
        <Helmet title={`Contact – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h2>Contact Details</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aperiam voluptas
                dolorum expedita natus quibusdam quaerat adipisci magni molestias nesciunt. Ut porro
                magni at dicta accusantium neque veniam? Velit, molestiae.
              </p>
              <h3>Another Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore molestiae
                fugit modi perferendis obcaecati. Laudantium, totam ad. Magnam ullam est quibusdam
                quis alias eius nisi nihil iure nemo non.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}