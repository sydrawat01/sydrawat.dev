import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ThemeContext from '../context/ThemeContext';
import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import apple from '../../content/thumbnails/apple.svg';
import vscode from '../../content/thumbnails/vscode.svg';
import mx2x from '../../content/thumbnails/mouse.svg';
import screen from '../../content/thumbnails/screen.svg';
import keyboard from '../../content/thumbnails/keyboard.svg';

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
                I&apos;m Sid, a freelance software developer mostly working in front-end development
                with <a href="https://reactjs.org">React</a>. I&apos;m currently experimenting
                around with <a href="https://graphql.org">GraphQL</a> and{' '}
                <a href="https://mongodb.com">MongoDB</a> as backend technologies to eventually
                transition into a full-stack developer.
              </p>
              <h3>Getting to know me</h3>
              <p>
                I was born and raised in Dehradun before moving to Bangalore, India. I&apos;ve done
                my engineering in Computer Science from{' '}
                <a href="https://manipal.edu/mu.html">Manipal University</a>.
              </p>
              <p>
                I graduated in 2017 and have been employed as a senior software developer at{' '}
                <a href="https://www.wipro.com/en-IN/">Wipro</a>. I also dedicate my free time to
                learning creating stuff and learning new things on the web.
              </p>
              <p>I also like doodling in my free time. I guess I&apos;ll post some here as well!</p>
              <h3>Tech Setup</h3>
              <div className="setup-container">
                <a
                  href="https://support.apple.com/kb/SP754?locale=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={apple} alt="Apple" />
                </a>
                <a
                  href="https://www.logitech.com/en-ph/product/mx-master-2s-flow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mx2x} alt="Logitech MX Master 2S" />
                </a>
                <a href="https://code.visualstudio.com">
                  <img src={vscode} alt="VSCode" />
                </a>
                <a
                  href="https://www.samsung.com/in/monitors/curved-cf390/LC27F390FHWXXL/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={screen} alt='Samsung 27" Curved Monitor' />
                </a>
                <a
                  href="https://www.lofree.co/products/dot-mechanical-keyboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={keyboard} alt="Lofree DOT" />
                </a>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 'lighter', fontSize: `${1.3}rem` }}>
                Special thanks to <a href="https://taniarascia.com">Tania Rascia</a> for the heavy
                inspiration for this site!
              </h4>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
