/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import BlogPost, { BlogPostProps } from "./BlogPost";
import ReactComponentsContext from "../theme/ReactComponentsContext";

export interface BlogProps {
  posts: Array<Omit<BlogPostProps, "short">>;
}

/**
 *  A Blog component.
 */
const Blog: React.FC<BlogProps> = (props) => {
  return (
    <ReactComponentsContext.Consumer>
      {(value) => (
        <div>
          {JSON.stringify(value)}
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
      )}
    </ReactComponentsContext.Consumer>
  );
};

export default Blog;
