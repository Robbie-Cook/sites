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
      <H1>Blog</H1>
      <Blog
        // posts={[
        //   {
        //     title: "My Blog Post",
        //     author: "Robbie Cook",
        //     content: "hello!",
        //     date: Date.now(),
        //   },
        //   {
        //     title: "My Blog Post",
        //     author: "Robbie Cook",
        //     content: "hello!",
        //     date: Date.now(),
        //   },
        //   {
        //     title: "My Blog Post",
        //     author: "Robbie Cook",
        //     content: "hello!",
        //     date: Date.now(),
        //   },
        // ]}
        // posts={data?.markdownRemark.}
        posts={props.data?.allMarkdownRemark?.edges?.map((edge) => ({
          title: edge.node.frontmatter.title,
          date: edge.node.frontmatter.date,
          content: <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />,
          // date: number;
          author: edge.node.frontmatter.author,
          // content: string | JSX.Element;
          // /**
          //  * Whether this is a shortened post or a long
          //  */
          // short: boolean;
        }))}
      />
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
