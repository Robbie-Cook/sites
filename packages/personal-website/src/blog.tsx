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
import Helmet from "react-helmet";

// import TestPost from "./blog-posts/test-post.md";

console.log("post", TestPost);
/**
 * Interface for Blog props
 */
interface BlogProps {
  children?: any;
}

/**
 *  A Blog component.
 */
const MyBlog: React.FC<BlogProps> = (props) => {
  return (
    <ReactComponentsContext.Provider value={{ type: "dark" }}>
      <H1>Blog</H1>
      <Blog
        posts={[
          {
            title: "My Blog Post",
            author: "Robbie Cook",
            content: "hello!",
            date: Date.now(),
          },
          {
            title: "My Blog Post",
            author: "Robbie Cook",
            content: "hello!",
            date: Date.now(),
          },
          {
            title: "My Blog Post",
            author: "Robbie Cook",
            content: "hello!",
            date: Date.now(),
          },
        ]}
      />
    </ReactComponentsContext.Provider>
  );
};

export default MyBlog;
