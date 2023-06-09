import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
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
        <Helmet title={`About Me | ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div>
            <div>
              <h2>whoami</h2>
              <p>
                Hi, I&apos;m Sid! I&apos;m a full-stack developer with a passion for creating
                efficient, scalable, and easy-to-maintain web applications. I specialize in{' '}
                <a href="https://react.dev/">React </a>
                and love to experiment with back-end technologies like{' '}
                <a href="https://expressjs.com/">ExpressJS</a> and{' '}
                <a href="https://www.postgresql.org/">Postgres</a>, while also tinkering with cloud
                technologies such as <a href="https://www.terraform.io/">Terraform</a>. As an
                open-source enthusiast, I believe in the power of collaboration and constantly seek
                ways to improve my skills by contributing to the community. I{' '}
                <span aria-label="heart" role="img">
                  ♥️
                </span>{' '}
                open-source!
              </p>
              <h3>Getting to know me</h3>
              <p>
                Currently, I&apos;m pursuing my Master&apos;s degree in Information Systems from
                <a href="https://wwww.northeastern.edu/"> Northeastern University in Boston</a>.
                Before that, I graduated with a Bachelor&apos;s degree in Computer Science from
                <a href="https://www.manipal.edu"> Manipal University, India </a>, and worked as a
                senior software developer at
                <a href="https://www.wipro.com/en-IN/">Wipro Technologies</a>.
              </p>
              <p>
                Over the past 3+ years, I&apos;ve gained extensive experience in software
                development, working closely with senior designers and developers to elevate my
                standards for web &apos;m proud to have contributed to creating memorable products
                that are delightful to use, highly scalable, and written with clean, maintainable
                code.
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
                Thank you for visiting my website! If you have any questions or would like to
                collaborate on a project, feel free to <Link to="/contact">reach out to me</Link>.
              </h4>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
