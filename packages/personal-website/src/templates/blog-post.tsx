/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { graphql } from "gatsby";
import {
  BlogPost,
  ReactComponentsContext,
} from "@robbie-cook/react-components";
import ArrowLeft from "../ArrowLeft";
import facepaint from "facepaint";

const mq = facepaint(["@media(min-width: 700px)", "@media(min-width: 1120px)"]);

/**
 * Interface for BlogPost props
 */
interface BlogPostTemplateProps {
  children?: any;
  data?: any;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = (props) => {
  const post = props.data.markdownRemark;
  return (
    <ReactComponentsContext.Provider value={{ type: "dark" }}>
      <div
        css={[
          mq({
            padding: ["30px 20px", "30px 150px"],
          }),
        ]}
      >
        <ArrowLeft
          link="/blog"
          css={css`
            position: relative;
            z-index: 2;
          `}
        />

        <BlogPost
          css={css`
            transform: translate(0, -73px);
          `}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
          content={<div dangerouslySetInnerHTML={{ __html: post.html }} />}
        />
      </div>
    </ReactComponentsContext.Provider>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        author
      }
    }
  }
`;
export default BlogPostTemplate;
