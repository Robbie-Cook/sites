/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { graphql } from "gatsby";

/**
 * Interface for BlogPost props
 */
interface BlogPostProps {
  children?: any;
  data?: any;
}

const BlogPost: React.FC<BlogPostProps> = (props) => {
  const post = props.data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
export default BlogPost;
