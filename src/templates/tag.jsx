import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';

export default class TagTemplate extends Component {
  render() {
    const { pageContext, data } = this.props;
    const { tag } = pageContext;
    const postEdges = data.allMdx.edges;

    return (
      <Layout>
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <div className="container">
          <h1>
            Posts tagged as{' '}
            <u>
              <strong>{tag}</strong>
            </u>
          </h1>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            category
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`;
