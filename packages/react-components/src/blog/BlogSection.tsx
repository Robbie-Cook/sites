/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for BlogSection props
 */
interface BlogSectionProps {
  children?: any;
}

/**
 *  A BlogSection component.
 */
const BlogSection: React.FC<BlogSectionProps> = (props) => {
  return (
    <div
      css={css`
        margin-top: 20px;
        line-height: 1.8rem;

        & * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
          font-size: 1.4rem;
        }
      `}
    >
      {props.children}
    </div>
  );
};

export default BlogSection;
