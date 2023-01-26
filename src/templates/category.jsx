import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

export default class CategoryTemplate extends Component {
  render() {
    const { pageContext, data } = this.props;
    const { category } = pageContext;
    const postEdges = data.allMdx.edges;

    return (
      <Layout>
        <Helmet title={`${category} | ${config.siteTitle}`} />
        <div className="container">
          <h1>{category}</h1>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      filter: { frontmatter: { category: { in: [$category] } } }
      sort: { fields: [fields___date], order: DESC }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          frontmatter {
            title
            tags
            category
            date
            template
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
