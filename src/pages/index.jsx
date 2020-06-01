import React from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'gatsby'

import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import sid from '../../content/images/sid1994.jpg';
import reactjs from '../../content/thumbnails/reactjs.svg';
import graphql from '../../content/thumbnails/graphql.png';
import javascript from '../../content/thumbnails/js.png';
import npm from '../../content/thumbnails/npm.png'
import sass from '../../content/thumbnails/sass.png'
import python from '../../content/thumbnails/python.png'

const IndexPage = () => (
  <Layout>
    <Helmet title={`${config.siteTitle} – Software Engineer`} />
    <SEO />
    <div className="container">
      <div className="lead">
        <div className="elevator">
          <h1>Hey, I&apos;m Sid 🖖🏻</h1>
          <p>
            I'm glad you're here!
          </p>
          <p>I'm a Software Engineer from Bangalore, India. I love creating stuff on the web and occasionally <Link to="/blog">write</Link> about random stuff.</p>
          <h2>Tech</h2>
          <p>
            A few skills that I'm still updating everyday
          </p>
          <div className="skills">
            <img src={reactjs} alt="react" title="ReactJS"/>
            <img src={graphql} alt="gql" title="GraphQL"/>
            <img src={javascript} alt="js"  title="Javascript"/>
            <img src={npm} alt="npm"  title="Node Package Manager"/>
            <img src={sass} alt="sass"  title="SASS"/>
            <img src={python} alt="py"  title="Python"/>
          </div>
        </div>
        <div className="flashcard-section">
          <img src={sid} className="flashcard-avatar" alt="Sid" />
          <div>
            <h3>Sid</h3>
            <p>
              Yep! That's me attending business meetings since '94.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
