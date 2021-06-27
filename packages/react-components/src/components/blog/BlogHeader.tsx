/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { H3 } from "../typography/Typography";

/**
 * Interface for BlogHeader props
 */
interface BlogHeaderProps {
  children?: any;
  className?: string;
}

/**
 *  A BlogHeader component.
 */
const BlogHeader: React.FC<BlogHeaderProps> = (props) => {
  return (
    <H3
      className={props.className}
      css={css`
        font-weight: normal;
      `}
    >
      {props.children}
    </H3>
  );
};

export default BlogHeader;
