/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import BlogInfo from "./BlogInfo";
import BlogHeader from "./BlogHeader";

// @ts-ignore
import Link from "./link.svg";
import { Authors } from "../../types";

export interface BlogPostProps {
  children?: any;
  title: string;
  date: number;
  author: Authors;
  content: string | JSX.Element;
  link: string;
  tags?: Array<string>;
  authorImage?: string;
}

/**
 *  A BlogPost component.
 */
const BlogPostShort: React.FC<BlogPostProps> = (props) => {
  return (
    <div css={css``}>
      <div>
        <a
          href={props.link}
          css={css`
            color: var(--text-bright);
            text-decoration: none !important;
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
              width: 22px;
              height: 22px;

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
        <BlogInfo
          date={props.date}
          author={props.author.name}
          image={props.author.image}
        />
      </div>
    </div>
  );
};

export default BlogPostShort;
