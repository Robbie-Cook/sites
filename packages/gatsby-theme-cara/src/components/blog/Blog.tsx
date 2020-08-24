/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for Blog props
 */
export interface BlogProps {
  children?: any;
  title: string;
  date: number;
  author: string;
  content: string;
}

/**
 *  A Blog component.
 */
const Blog: React.FC<BlogProps> = (props) => {
  return (
    <div css={css``}>
      <div>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.author}</p>
      </div>
      <div>{props.content}</div>
    </div>
  );
};

export default Blog;
