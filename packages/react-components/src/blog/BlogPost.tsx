/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import date from "date-and-time";
// import Dot from "./Dot.svg";

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
const BlogPost: React.FC<BlogProps> = (props) => {
  return (
    <div css={css``}>
      <div>
        <h3
          css={css`
            font-size: 2rem;
            margin-bottom: 15px;
          `}
        >
          {props.title}
        </h3>
        <span
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <p
            css={css`
              margin: 0;
            `}
          >
            {date.format(new Date(props.date), "D MMMM Y")}
          </p>
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
          <p
            css={css`
              margin: 0;
            `}
          >
            {props.author}
          </p>
        </span>
      </div>
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        {props.content}
      </div>
    </div>
  );
};

export default BlogPost;
