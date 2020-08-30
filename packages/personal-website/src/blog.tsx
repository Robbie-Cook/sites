/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Blog, Theme } from "@robbie-cook/react-components";
import { ThemeProvider, useTheme } from "emotion-theming";

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
  console.log("log", useTheme());
  return (
    <ThemeProvider theme={{ type: "dark" } as Theme}>
      <Blog
        posts={[
          {
            title: "My Blog Post",
            author: "Robbie Cook",
            content: "hello!",
            date: Date.now(),
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default MyBlog;
