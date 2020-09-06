/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { P } from "../typography/Typography";
import date from "date-and-time";

/**
 * Interface for BlogInfo props
 */
interface BlogInfoProps {
  children?: any;
  date: number | string;
  author: string;
}

/**
 *  A BlogInfo component.
 */
const BlogInfo: React.FC<BlogInfoProps> = (props) => {
  return (
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
  );
};

export default BlogInfo;
