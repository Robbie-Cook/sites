/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { P } from "../typography/Typography";
import date from "date-and-time";

/**
 * Interface for BlogInfo props
 */
export interface BlogInfoProps {
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
      {props.image && (
        <span
          css={css`
            margin: 0 15px 0 14px;
          `}
        >
          <picture
            css={css`
              * {
                width: 45px;
                height: 45px;
                border-radius: 100%;
                overflow: hidden;
              }
            `}
          >
            <source srcSet={props.image} media="(min-width: 800px)" />
            <img src={props.image} alt="author-image" />
          </picture>
        </span>
      )}
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
