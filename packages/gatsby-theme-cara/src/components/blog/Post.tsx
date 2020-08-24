/** @jsx jsx */
import { Styled, ThemeProvider } from "theme-ui";
import Dot from "./CarbonDotMark.svg";
import React from "react";
import { css, jsx } from "@emotion/core";
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
            `}
          >
            <p
              css={css`
                margin-right: 20px;
                display: flex;

                &::after {
                  content: "";
                  display: fles;
                  width: 20px;
                  height: 20px;

                  mask: url(${Dot}) no-repeat 0 0 / contain;
                  -webkit-mask: url(${Dot}) no-repeat 0 0 / contain;
                  background-image: unset;
                  background-color: white;
                  background-repeat: no-repeat;
                  background-size: contain;
                  will-change: mask;
                  flex-shrink: 0;
                }
              `}
            >
              {date.format(new Date(props.date), "D MMMM Y")}
            </p>
            <p>{props.author}</p>
          </span>
        </div>
        <div>{props.content}</div>
      </div>
    </Styled.root>
  );
};

export default Post;
