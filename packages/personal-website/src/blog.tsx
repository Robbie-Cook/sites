/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import {
  Blog,
  Theme,
  ReactComponentsContext,
  H1,
} from "@robbie-cook/react-components";
import { ThemeProvider, useTheme } from "emotion-theming";
import { graphql } from "gatsby";
import ArrowLeft from "./ArrowLeft";

// @ts-ignore

/**
 * Interface for Blog props
 */
interface BlogProps {
  children?: any;
  data?: any;
}

/**
 *  A Blog component.
 */
const MyBlog: React.FC<BlogProps> = (props) => {
  console.log("data", props.data);

  const posts = [];
  props.data?.allMarkdownRemark?.edges?.forEach((edge) => {
    if (edge.node.frontmatter.publish) {
      posts.push({
        title: edge.node.frontmatter.title,
        date: edge.node.frontmatter.date,
        content: (
          <div
            dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
          />
        ),
        author: edge.node.frontmatter.author,
        link: `/blog/posts${edge.node.fields.slug}`,
      });
    }
  })
  return (
    <ReactComponentsContext.Provider value={{ type: "dark" }}>
      <div
        css={css`
          padding: 30px 150px;
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <ArrowLeft link="/" />
          <H1
            css={css`
              font-size: 4rem;
              text-align: center;
              margin-bottom: 90px !important;
              margin-top: 0 !important;
              margin-right: auto !important;
              margin-left: auto !important;
              /* transform: translate(-30px, 0); */
            `}
          >
            Blog
          </H1>
        </div>
        <Blog
          posts={posts}
        />
      </div>
    </ReactComponentsContext.Provider>
  );
};

export const pageQuery = graphql`
  query {
    allSitePage {
      edges {
        node {
          id
          context {
            slug
          }
        }
      }
    }

    allMarkdownRemark {
      edges {
        node {
          excerpt
          id
          html
          headings(depth: h1) {
            id
          }
          fileAbsolutePath
          rawMarkdownBody
          tableOfContents
          timeToRead
          frontmatter {
            title
            author
            date
            publish
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default MyBlog;
