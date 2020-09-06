/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import BlogPostShort, { BlogPostProps } from "./BlogPostShort";
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
    <div>
      {props.posts.map((post) => (
        <div
          key={post.date}
          css={css`
            margin-bottom: 75px;
          `}
        >
          <BlogPostShort {...post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
