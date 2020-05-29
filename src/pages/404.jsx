import React from 'react';

import Layout from '../layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <div className="text-center">
        <h1>404</h1>
      </div>
      <p>
        A fatal exception 0E has occurred at
        <span className="tania">0x74616e6961</span>
        in 404: page not found.
      </p>
      <div className="list">
        <p>
          <span className="bullet">*</span>
          Click on any link to terminate the current application.
        </p>
        <p>
          <span className="bullet">*</span>
          Press ALT + F4 again to restart your browser. You will lose any unsaved information in all
          tabs.
        </p>
      </div>
      <p className="text-right">
        Click any link to continue
        <span className="blink">&#9608;</span>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
