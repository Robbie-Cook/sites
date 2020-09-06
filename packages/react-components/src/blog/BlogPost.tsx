/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { H3, P } from "../typography/Typography";
import { Theme } from "../theme/Theme";
import BlogInfo from "./BlogInfo";
import BlogHeader from "./BlogHeader";
import BlogSection from "./BlogSection";

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
      <BlogSection>{props.content}</BlogSection>
    </div>
  );
};

export default BlogPost;
