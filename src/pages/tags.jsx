import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash.kebabcase';
import Layout from '../layout';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

export default class TagsPage extends Component {
  render() {
    const { data } = this.props;
    const { group } = data.allMdx;

    return (
      <Layout>
        <SEO />
        <Helmet title={`Tags | ${config.siteTitle}`} />
        <div className="container">
          <h1>Tags</h1>
          <div className="tag-container">
            {group.map(tag => (
              <Link to={`/tags/${kebabCase(tag.fieldValue)}`} key={tag.fieldValue}>
                <span>
                  {tag.fieldValue} <strong className="count">{tag.totalCount}</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagsQuery {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
