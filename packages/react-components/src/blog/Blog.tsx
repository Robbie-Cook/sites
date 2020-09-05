/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import BlogPost, { BlogPostProps } from "./BlogPost";
import ReactComponentsContext from "../theme/ReactComponentsContext";
import { ThemeProvider } from "emotion-theming";

export interface BlogProps {
  posts: Array<Omit<BlogPostProps, "short">>;
}

/**
 *  A Blog component.
 */
const Blog: React.FC<BlogProps> = (props) => {
  return (
    <ReactComponentsContext.Consumer>
      {(value) => {
        console.log(`Setting theme ${JSON.stringify(value)}`);
        return (
          <ThemeProvider theme={value}>
            <div>
              {props.posts.map((post) => (
                <div
                  key={post.date}
                  css={css`
                    margin-bottom: 75px;
                  `}
                >
                  <BlogPost {...post} short={true} />
                </div>
              ))}
            </div>
          </ThemeProvider>
        );
      }}
    </ReactComponentsContext.Consumer>
  );
};

export default Blog;
