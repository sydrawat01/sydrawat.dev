import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

export default class Me extends Component {
  static contextType = ThemeContext; //eslint-disable-line

  render() {
    return (
      <Layout>
        <Helmet title={`About Me – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div>
            <div>
              <h2>whoami</h2>
              <p>
                I'm Sid, a freelance software developer mostly working in front-end development with <a href="https://reactjs.org">React</a>. I'm currently experimenting around with <a href="https://graphql.org">GraphQL</a> and <a href="https://mongodb.com">MongoDB</a> as backend technologies to eventually transition into a full-stack developer.
              </p>
              <h3>Getting to know me</h3>
              <p>
                I was born and raised in Dehradun before moving to Bangalore, India. I've done my engineering in Computer Science from <a href="https://manipal.edu/mu.html">Manipal University</a>.
              </p>
              <p>I graduated in 2017 and have been employed as a senior software developer at <a href="https://www.wipro.com/en-IN/">Wipro</a>. I also dedicate my free time to learning creating stuff and learning new things on the web.</p>
              <p>
                I also like doodling in my free time. I guess I'll post some here as well!
              </p>
              <h3>Currently Using</h3>
              <ul>
                <li>
                  Computer: 13" MacBook Pro
                </li>
                <li>
                  Host:
                  <a href="https://app.netlify.com"> Netlify</a>
                </li>
                <li>
                  Editor:
                  <a href="https://code.visualstudio.com"> VSCode</a>
                </li>
                <li>
                  Static Site Generator:
                  <a href="https://gatsbyjs.org"> Gatsby</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{fontWeight: "lighter", fontSize: 1.3+'rem'}}>Special thanks to <a href="https://taniarascia.com">Tania Rascia</a> for the heavy inspiration for this site!</h4>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
