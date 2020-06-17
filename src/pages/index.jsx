import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import sid from '../../content/images/sid1994.jpg';
import reactjs from '../../content/thumbnails/reactjs.svg';
import graphql from '../../content/thumbnails/graphql.png';
import javascript from '../../content/thumbnails/js.png';
import yarn from '../../content/thumbnails/yarn-kitten-circle.png';
import sass from '../../content/thumbnails/sass.png';
import python from '../../content/thumbnails/python.png';

const IndexPage = () => (
  <Layout>
    <Helmet title={`${config.siteTitle} – Front End Engineer`} />
    <SEO />
    <div className="container">
      <div className="lead">
        <div className="elevator">
          <h1>
            Hey, I&apos;m Sid
            <span className="wave" role="img" aria-label="wave">
              {' '}
              🖖🏻
            </span>
          </h1>
          <p>I&apos;m glad you&apos;re here!</p>
          <p>
            I&apos;m a Software Engineer from Bangalore, India. I love creating stuff on the web and
            occasionally <Link to="/blog">write</Link> about random stuff.
          </p>
          <h2>Tech</h2>
          <p>A few skills that I&apos;m still updating everyday</p>
          <div className="skills">
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <img src={reactjs} alt="react" title="ReactJS" />
            </a>
            <a href="https://graphql.org" target="_blank" rel="noopener noreferrer">
              <img src={graphql} alt="gql" title="GraphQL" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={javascript} alt="js" title="Javascript" />
            </a>
            <a href="https://yarnpkg.com" target="_blank" rel="noopener noreferrer">
              <img src={yarn} alt="yarn" title="Yarn Package Manager" />
            </a>
            <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
              <img src={sass} alt="sass" title="SASS" />
            </a>
            <a href="https://python.org" target="_blank" rel="noopener noreferrer">
              <img src={python} alt="py" title="Python" />
            </a>
          </div>
        </div>
        <div className="flashcard-section">
          <img src={sid} className="flashcard-avatar" alt="Sid" />
          <div>
            <h3>Sid</h3>
            <p>Attending business meetings since &apos;94.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
