/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import BlogInfo from "./BlogInfo";
import BlogHeader from "./BlogHeader";
import BlogSection from "./BlogSection";
import { Authors } from "../../types";
import { Heading } from "../typography/Typography";

// import Dot from "./Dot.svg";

/**
 * Interface for Blog props
 */
export interface BlogPostProps {
  children?: any;
  title: string;
  date?: number;
  author?: string;
  authorImage?: string;
  content: string | JSX.Element;
  className?: string;
  tags?: Array<string>;
}

/**
 *  A BlogPost component.
 */
const BlogPost: React.FC<BlogPostProps> = (props) => {
  return (
    <div {...props} css={css``}>
      <div>
        <Heading
          level={1}
          css={css`
            text-align: center;
            margin-top: 0;
          `}
        >
          {props.title}
        </Heading>
        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 35px;
          `}
        >
          <BlogInfo
            date={props.date || 0}
            author={props.author ?? ""}
            image={props.authorImage}
          />
        </div>
      </div>
      <BlogSection>{props.content}</BlogSection>
    </div>
  );
};

export default BlogPost;
