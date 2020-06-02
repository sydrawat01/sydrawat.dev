import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import github from '../../content/images/github.png';
import kofi from '../../content/images/ko-fi-user.png';
import twitter from '../../content/images/twitter.svg';
import patreon from '../../content/images/patreon-user.jpg'

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
              <h2>Contact</h2>
              <p>
                You can email me at <a href="mailto:sydrawat@gmail.com"><strong>sydrawat@gmail.com</strong></a> if you feel like chatting me up.
              </p>
              <h3>Social</h3>
              <p>
                Hit me up wherever you feel like.
              </p>
              <div>
                <ul>
                  <li>
                    <a href="https://github.com/sydrawat" target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="https://ko-fi.com/sydrawat" target="_blank" rel="noopener noreferrer">
                      Ko-Fi
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/siddharth-rawat" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <h4 style={{fontWeight: "lighter", fontSize: 1.3+'rem'}}>
                Found an issue on the site? <a href="https://github.com/sydrawat/sydrawat-issues/issues/new/choose" target="_blank" rel="noopener noreferrer">Let me know!</a>
              </h4>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
