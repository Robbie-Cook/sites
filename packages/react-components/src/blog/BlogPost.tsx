/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { H3, P } from "../typography/Typography";
import { Theme } from "../theme/Theme";
import BlogInfo from "./BlogInfo";
import BlogHeader from "./BlogHeader";

// import Dot from "./Dot.svg";

/**
 * Interface for Blog props
 */
export interface BlogPostProps {
  children?: any;
  title: string;
  date: number;
  author: string;
  content: string | JSX.Element;
  /**
   * Whether this is a shortened post or a long
   */
  short: boolean;
}

/**
 *  A Blog component.
 */
const BlogPost: React.FC<BlogPostProps> = (props) => {
  return (
    <div css={css``}>
      <div>
        <BlogHeader>{props.title}</BlogHeader>
        <BlogInfo date={props.date} author={props.author} />
      </div>
      <div
        css={(theme) => {
          return css`
            margin-top: 20px;
            line-height: 1.8rem;

            & * {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                "Noto Color Emoji";
              font-size: 1.4rem;
            }

            ${theme.type === "light" ? "" : "color: white;"};
          `;
        }}
      >
        {props.content}
      </div>
    </div>
  );
};

export default BlogPost;
