/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for BlogPost props
 */
interface BlogPostProps {
  children?: any;
}

/**
 *  A BlogPost component.
 */
const BlogPost: React.FC<BlogPostProps> = (props) => {
  return <div css={css``}>BlogPost component</div>;
};

export default BlogPost;
