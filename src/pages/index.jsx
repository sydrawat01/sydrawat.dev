import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import sid from '../../content/images/disp.jpeg';
import reactjs from '../../content/thumbnails/reactjs.svg';
import graphql from '../../content/thumbnails/graphql.png';
import javascript from '../../content/thumbnails/js.png';
import yarn from '../../content/thumbnails/yarn-kitten-circle.png';
import sass from '../../content/thumbnails/sass.png';
import java from '../../content/thumbnails/java.svg';

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
          <p>
            Beep boop!{' '}
            <span role="img" aria-label="robot">
              🤖
            </span>
          </p>
          <p>
            I&apos;m an international masters student at{' '}
            <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">
              Northeastern University, Boston
            </a>
            . I love creating stuff on the web and occasionally write about stuff in my{' '}
            <Link to="/blog">blog.</Link>
          </p>
          <h2>Tech</h2>
          <p>Here are a few skills that I possess in my bag of tricks!</p>
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
            <a href="https://dev.java/" target="_blank" rel="noopener noreferrer">
              <img src={java} alt="java" title="Java" />
            </a>
          </div>
        </div>
        <div className="flashcard-section">
          <img src={sid} className="flashcard-avatar" alt="Sid" />
          <div>
            <h3>Siddharth Rawat</h3>
            <h3>Northeastern &apos;23</h3>
            <p>
              <span role="img" aria-label="ramen">
                🍜
              </span>
              {'   '}
              <span role="img" aria-label="web" width="100px">
                🕸
              </span>
              {'   '}
              <span role="img" aria-label="student">
                👨‍🎓
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
