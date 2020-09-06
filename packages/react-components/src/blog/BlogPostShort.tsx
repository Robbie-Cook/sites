/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { H3, P } from "../typography/Typography";
import { Theme } from "../theme/Theme";
import BlogInfo from "./BlogInfo";
import BlogHeader from "./BlogHeader";
import BlogSection from "./BlogSection";
import { useTheme } from "../theme/ReactComponentsContext";

// @ts-ignore
import Link from "./link.svg";

export interface BlogPostProps {
  children?: any;
  title: string;
  date: number;
  author: string;
  content: string | JSX.Element;
  link: string;
}

/**
 *  A BlogPost component.
 */
const BlogPostShort: React.FC<BlogPostProps> = (props) => {
  const theme = useTheme();
  return (
    <div css={css``}>
      <div>
        <a
          href={props.link}
          css={css`
            color: #3899ef;
            display: flex;
            align-items: center;

            transition: 0.2s color;
            transition: 0.2s background-color;

            &:hover {
              & * {
                transition: 0.2s color;
                transition: 0.2s background-color;
                color: #3899ef !important;
              }

              &::after {
                transition: 0.2s color;
                transition: 0.2s background-color;
                background-color: #3899ef;
              }
            }

            &::after {
              transition: 0.2s color;
              transition: 0.2s background-color;

              content: "";
              display: flex;
              width: 30px;
              height: 30px;

              margin-left: 10px;

              mask: url(${Link}) no-repeat 0 0 / contain;
              background-image: unset;
              background-color: white;
              background-repeat: no-repeat;
              background-size: contain;
              will-change: mask;
            }
          `}
        >
          <BlogHeader>{props.title}</BlogHeader>
        </a>
        <BlogInfo date={props.date} author={props.author} />
      </div>
      <BlogSection>{props.content}</BlogSection>
    </div>
  );
};

export default BlogPostShort;
