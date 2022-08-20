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
                I&apos;m Sid, in front-end developer working with{' '}
                <a href="https://reactjs.org">React</a>. I love tinkering with{' '}
                <a href="https://graphql.org">GraphQL</a> and{' '}
                <a href="https://mongodb.com">MongoDB</a> as backend technologies to eventually
                transition into a full-stack developer. I{' '}
                <span aria-label="heart" role="img">
                  ♥️
                </span>{' '}
                open-source!
              </p>
              <h3>Getting to know me</h3>
              <p>
                I&apos;m currently purusing my Master&apos;s degree in Information Systems from
                <a href="https://wwww.northeastern.edu/"> Northeastern University, Boston.</a>
              </p>
              <p>
                I graduated in 2017 with a Bachelor&apos;s in Computer Science from{' '}
                <a href="https://www.manipal.edu"> Manipal University, India </a>
                and later worked as a senior software developer at{' '}
                <a href="https://www.wipro.com/en-IN/">Wipro Technologies</a>.
              </p>
              <p>
                I have 3+ years of professional experience in Software Development. As I&apos;ve
                grown as a developer, worked in conjunction with senior designers and developers who
                have raised my standards for what is expected of any web application. Through these
                experiences, I&apos;ve had the opportunity to create memorable products that are not
                only delightful to use but are written in code that&apos;s efficient, highly
                scalable, easy to understand and particularly maintainable.
              </p>
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
