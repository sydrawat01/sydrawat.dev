import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import {Link} from 'gatsby';
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
              <div className="sup">
                <img src={github} alt="Github" title="Github"/>
                <img src={twitter} alt="Twitter" title="Twitter"/>
                <img src={kofi} alt="Ko-Fi" title="Ko-Fi"/>
                <img src={patreon} alt="Patreon" title="Patreon"/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
