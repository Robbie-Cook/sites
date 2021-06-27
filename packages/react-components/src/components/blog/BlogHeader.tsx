/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Heading } from "../typography/Typography";

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
    <Heading
      level={3}
      className={props.className}
      css={css`
        margin: 0;
      `}
    >
      {props.children}
    </Heading>
  );
};

export default BlogHeader;
