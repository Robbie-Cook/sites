/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import date from "date-and-time";
import { H3, P } from "../typography/Typography";
import { Theme } from "../theme/Theme";

// import Dot from "./Dot.svg";

/**
 * Interface for Blog props
 */
export interface BlogProps {
  children?: any;
  title: string;
  date: number;
  author: string;
  content: any;
  /**
   * Whether this is a shortened post or a long
   */
  short: boolean;
}

/**
 *  A Blog component.
 */
const BlogPost: React.FC<BlogProps> = (props) => {
  return (
    <div css={css``}>
      <div>
        <H3
          css={css`
            font-size: 3rem;
          `}
        >
          {props.title}
        </H3>
        <span
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <P
            css={css`
              margin: 0;
            `}
          >
            {date.format(new Date(props.date), "D MMMM Y")}
          </P>
          <span
            css={css`
              display: flex;
              width: 10px;
              height: 10px;
              margin: 0 10px;

              background-image: unset;
              background-color: white;
              background-repeat: no-repeat;
              background-size: contain;
              will-change: mask;
              flex-shrink: 0;
            `}
          ></span>
          <P
            css={css`
              margin: 0;
            `}
          >
            {props.author}
          </P>
        </span>
      </div>
      <div
        css={(theme: Theme) => css`
          margin-top: 20px;
          line-height: 1.8rem;
          ${theme.type === "dark"
            ? "color: white; font-family: sans-serif;"
            : ""};
        `}
      >
        {props.short ? (
          <div
            css={css`
              max-height: 100px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            `}
          >
            {props.content}
          </div>
        ) : (
          props.content
        )}
      </div>
    </div>
  );
};

export default BlogPost;
