import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import sid from '../../content/images/disp.jpeg';
import reactjs from '../../content/thumbnails/reactjs.svg';
import graphql from '../../content/thumbnails/graphql.png';
import javascript from '../../content/thumbnails/js.png';
// import yarn from '../../content/thumbnails/yarn-kitten-circle.png';
// import sass from '../../content/thumbnails/sass.png';
import aws from '../../content/thumbnails/aws.svg';
import k8s from '../../content/thumbnails/kubernetes.svg';
import docker from '../../content/thumbnails/docker.svg';
import tf from '../../content/thumbnails/terraform.svg';
import tux from '../../content/thumbnails/linux.svg';

const IndexPage = () => (
  <Layout>
    <Helmet title={`${config.siteTitle} | SRE | DevOps | Cloud`} />
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
          {/* <p>
            Beep boop!{' '}
            <span role="img" aria-label="robot">
              🤖
            </span>
          </p> */}
          <p>
            I&apos;m a seasoned DevOps and Site Reliability Engineer with over 3 years of hands-on
            experience in crafting robust solutions for distributed systems.
          </p>{' '}
          <p>
            My passion lies in optimizing system scalability, ensuring reliability, enhancing
            availability, and driving efficiency within complex technological landscapes.
          </p>
          <p>
            {' '}
            Currently pursuing a Master&apos;s degree in Information Systems from{' '}
            <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">
              Northeastern University, Boston.
            </a>
            Let&apos;s work together to build better reliable systems!
          </p>
          <h2>Tech</h2>
          <p>Below are some of the skills I possess in my toolkit</p>
        </div>
        <div className="flashcard-section">
          <div className="card-content">
            <img src={sid} className="flashcard-avatar" alt="Sid" />
            <div className="avatar-data">
              <h3>Siddharth Rawat</h3>
              <h3>Northeastern &apos;24</h3>
              <p>
                <span role="img" aria-label="ramen">
                  🍜
                </span>
                {'   '}
                <span role="img" aria-label="kubernetes">
                  ⎈
                </span>
                {'   '}
                <span role="img" aria-label="web" width="100px">
                  ☁️
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
      <div className="skills">
        <a href="https://aws/" target="_blank" rel="noopener noreferrer">
          <img src={aws} alt="aws" title="AWS" />
        </a>
        <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
          <img src={docker} alt="docker" title="Docker" />
        </a>
        <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer">
          <img src={k8s} alt="k8s" title="Kubernetes" />
        </a>
        <a href="https://www.terraform.io/" target="_blank" rel="noopener noreferrer">
          <img src={tf} alt="k8s" title="Hashicorp Terraform" />
        </a>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
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
        <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">
          <img src={tux} alt="tux" title="Linux" />
        </a>
        {/* <a href="https://yarnpkg.com" target="_blank" rel="noopener noreferrer">
              <img src={yarn} alt="yarn" title="Yarn Package Manager" />
            </a>
            <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
              <img src={sass} alt="sass" title="SASS" />
            </a> */}
      </div>
    </div>
  </Layout>
);

export default IndexPage;
