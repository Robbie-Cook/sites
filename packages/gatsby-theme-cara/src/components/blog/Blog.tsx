/** @jsx jsx */
import { jsx, Styled, css, ThemeProvider } from "theme-ui";
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
    <Styled.root data-testid="theme-root">
      <div css={css``}>
        <div>
          <h3>{props.title}</h3>
          <p>{props.date}</p>
          <p>{props.author}</p>
        </div>
        <div>{props.content}</div>
      </div>
    </Styled.root>
  );
};

export default Blog;
