/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import BlogPost, { BlogPostProps } from "./BlogPost";
import { useTheme } from 'emotion-theming';

export interface BlogProps {
  posts: Array<Omit<BlogPostProps, "short">>;
}

/**
 *  A Blog component.
 */
const Blog: React.FC<BlogProps> = (props) => {

  console.log('Blog theme', useTheme())
  return (
    <div>
      {props.posts.map((post) => (
        <div
          css={css`
            margin-bottom: 75px;
          `}
        >
          <BlogPost {...post} short={true} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
