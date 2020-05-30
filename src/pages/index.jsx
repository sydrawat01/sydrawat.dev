import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../layout';
import SEO from '../components/seo';
import config from '../../data/SiteConfig';
import sid from '../../content/images/sid1994.jpg';

const IndexPage = () => (
  <Layout>
    <Helmet title={`${config.siteTitle} – Software Engineer`} />
    <SEO />
    <div className="container">
      <div className="lead">
        <div className="elevator">
          <h1>Hey, I&apos;m Sid</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aperiam voluptas
            dolorum expedita natus quibusdam quaerat adipisci magni molestias nesciunt. Ut porro
            magni at dicta accusantium neque veniam? Velit, molestiae.
          </p>
          <h2>Another Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore molestiae fugit
            modi perferendis obcaecati. Laudantium, totam ad. Magnam ullam est quibusdam quis alias
            eius nisi nihil iure nemo non.
          </p>
        </div>
        <div className="flashcard-section">
          <img src={sid} className="flashcard-avatar" alt="Sid" />
          <div>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ut illum cumque
              consequuntur magnam similique fugit optio possimus necessitatibus id eum, soluta
              asperiores nemo numquam tenetur veritatis officia. Earum, amet.
            </p>
            <a className="button" href="https://open.spotify.com/user/sydrawat">
              Click
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
