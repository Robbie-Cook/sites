/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { graphql } from "gatsby";
import {
  BlogPost,
  ReactComponentsContext,
  SEO,
} from "@robbie-cook/react-components";
import ArrowLeft from "../ArrowLeft";
import facepaint from "facepaint";

const mq = facepaint([
  "@media(min-width: 700px)",
  "@media(min-width: 1120px)",
  "@media(min-width: 1300px)",
]);

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
    <ReactComponentsContext.Provider
      value={{
        type:
          localStorage.getItem("theme-ui-color-mode") === "light"
            ? "light"
            : "dark",
      }}
    >
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

        <SEO site={props.data.site.siteMetadata} />
        <div
          css={css(
            mq({
              transform: ["", "", "translate(0, -73px)"],
            })
          )}
        >
          <BlogPost
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            author={post.frontmatter.author}
            content={<div dangerouslySetInnerHTML={{ __html: post.html }} />}
          />
        </div>
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
    site {
      siteMetadata {
        siteTitle
        siteTitleAlt
        siteHeadline
        siteUrl
        siteDescription
        siteLanguage
        siteImage
        author
      }
    }
  }
`;
export default BlogPostTemplate;
