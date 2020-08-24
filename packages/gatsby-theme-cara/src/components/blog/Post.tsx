/** @jsx jsx */
import { jsx, Styled, css, ThemeProvider } from "theme-ui";
import React from "react";
import date from "date-and-time";

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
const Post: React.FC<BlogProps> = (props) => {
  return (
    <Styled.root data-testid="theme-root">
      <div css={css``}>
        <div>
          <h3>{props.title}</h3>
          <p>{date.format(new Date(props.date), "D MMMM Y")}</p>
          <p>{props.author}</p>
        </div>
        <div>{props.content}</div>
      </div>
    </Styled.root>
  );
};

export default Post;
