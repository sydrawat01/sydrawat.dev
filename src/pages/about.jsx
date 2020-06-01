import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'gatsby';
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
                I'm Sid, a freelance software developer mostly working in front-end development with <Link to="https://reactjs.org">React</Link>. I'm currently experimenting around with <Link to="https://graphql.org">GraphQL</Link> and <Link to="https://mongodb.com">MongoDB</Link> as backend technologies to eventually transition into a full-stack developer.
              </p>
              <h3>Getting to know me</h3>
              <p>
                I was born and raised in Dehradun before moving to Bangalore, India. I've done my engineering in Computer Science from <Link to="https://manipal.edu/mu.html">Manipal University</Link>.
              </p>
              <p>I graduated in 2017 and have been employed as a senior software developer at <Link to="https://www.wipro.com/en-IN/">Wipro</Link>. I also dedicate my free time to learning creating stuff and learning new things on the web.</p>
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
                  <Link to="https://app.netlify.com"> Netlify</Link>
                </li>
                <li>
                  Editor:
                  <Link to="https://code.visualstudio.com"> VSCode</Link>
                </li>
                <li>
                  Static Site Generator:
                  <Link to="https://gatsbyjs.org"> Gatsby</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{fontWeight: "lighter", fontSize: 1.3+'rem'}}>Special thanks to <Link to="https://taniarascia.com">Tania Rascia</Link> for the heavy inspiration for this site!</h4>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
