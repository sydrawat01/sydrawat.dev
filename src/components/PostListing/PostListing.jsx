import React from "react";
import { Link } from "gatsby";
import Img from 'gatsby-image';
import {formatDate} from '../../utils/global'

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        thumbnail: postEdge.node.frontmatter.thumbnail,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const { simple } = this.props;
    const postList = this.getPostList();

    return (
      <section className={`posts`}>
        {postList.map(post => {
          let thumbnail;
          if (post.thumbnail) {
            thumbnail = post.thumbnail.childImageSharp.fixed;
          }

          // const popular = post.categories.includes('Popular');
          const date = formatDate(post.date);
          // const date = post.date;
          // const newest = moment(post.date) > moment().subtract(1, 'months');

          return (
            <Link to={post.path} key={post.title}>
              <div className="each">
                {thumbnail ? <Img fixed={thumbnail} /> : <div />}
                <div className="each-list-item">
                  <h2>{post.title}</h2>
                  {!simple && <div className="datetime">{date}</div>}
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    );
  }
}

export default PostListing;
