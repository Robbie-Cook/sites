/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { H3, P } from "../typography/Typography";
import { Theme } from "../theme/Theme";
import BlogInfo from "./BlogInfo";
import BlogHeader from "./BlogHeader";
import BlogSection from "./BlogSection";
import Context from "../theme/ReactComponentsContext";

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
  className?: string;
}

/**
 *  A BlogPost component.
 */
const BlogPost: React.FC<BlogPostProps> = (props) => {
  return (
    <div className={props.className} css={css``}>
      <div>
        <BlogHeader
          css={css`
            text-align: center;
            margin-top: 0;
          `}
        >
          {props.title}
        </BlogHeader>
        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 70px;
          `}
        >
          <BlogInfo date={props.date} author={props.author} />
        </div>
      </div>
      <BlogSection>{props.content}</BlogSection>
    </div>
  );
};

export default BlogPost;
