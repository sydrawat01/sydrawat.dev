import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import github from '../../content/thumbnails/github.svg';
import twitter from '../../content/images/twitter.svg';
import linkedin from '../../content/thumbnails/linkedin.svg';
import ig from '../../content/images/ig.svg';
import reddit from '../../content/thumbnails/reddit.svg';

export default class Contact extends Component {
  static contextType = ThemeContext; //eslint-disable-line

  render() {
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h2>Contact</h2>
              <p>
                The fastest way to reach me is through{' '}
                <a href="https://www.linkedin.com/in/siddharth-rawat"> LinkedIn</a>, or
                <a href="mailto:siddharth.rawat94@gmail.com"> e-mail</a>.
              </p>
              <p>
                Hit me up if you feel like getting in touch with me or want to contribute to any of
                my open-source projects!
              </p>
              <p>Want to collaborate on a project together? Count me in!</p>
              <h3>Social</h3>
              <p>Make sure you check me out elsewhere too! ;)</p>
              <div className="contact-container">
                <a href="https://reddit.com/u/sydrawat" target="_blank" rel="noopener noreferrer">
                  <img src={reddit} alt="Reddit" />
                </a>
                <a href="https://github.com/sydrawat01" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="Github" />
                </a>
                <a href="https://twitter.com/sydrawat" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Twitter" />
                </a>
                <a
                  href="https://linkedin.com/in/siddharth-rawat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/sydrawat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ig} alt="instagram" />
                </a>
              </div>
              <h4 style={{ fontWeight: 'lighter', fontSize: `${1.3}rem` }}>
                Found an issue on the site?{' '}
                <a
                  href="https://github.com/sydrawat01/sydrawat-issues/issues/new/choose"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let me know!
                </a>
              </h4>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
