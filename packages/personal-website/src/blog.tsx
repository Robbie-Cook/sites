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
  return (
    <ReactComponentsContext.Provider value={{ type: "dark" }}>
      <div
        css={css`
          padding: 30px 150px;
        `}
      >
        <H1
          css={css`
            font-size: 4rem;
            text-align: center;
            margin-bottom: 90px!important;
          `}
        >
          Blog
        </H1>
        <Blog
          posts={props.data?.allMarkdownRemark?.edges?.map((edge) => ({
            title: edge.node.frontmatter.title,
            date: edge.node.frontmatter.date,
            content: (
              <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            ),
            author: edge.node.frontmatter.author,
          }))}
        />
      </div>
    </ReactComponentsContext.Provider>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
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
          }
        }
      }
    }
  }
`;

export default MyBlog;
