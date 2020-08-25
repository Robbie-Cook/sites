/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { BlogPost } from "@robbie-cook/react-components";

/**
 * Interface for Blog props
 */
interface BlogProps {
  children?: any;
}

/**
 *  A Blog component.
 */
const Blog: React.FC<BlogProps> = (props) => {
  return <BlogPost></BlogPost>;
};

export default Blog;
