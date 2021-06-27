/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ReactComponentsContext, {
  useTheme,
} from "../../theme/ReactComponentsContext";

/**
 * Interface for BlogSection props
 */
export interface BlogSectionProps {
  children?: any;
}

/**
 *  A BlogSection component.
 */
const BlogSection: React.FC<BlogSectionProps> = (props) => {
  return (
    <ReactComponentsContext.Consumer>
      {(theme) => (
        <div
          css={css`
            margin-top: 20px;
            line-height: 1.8rem;

            /* & * {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                "Helvetica Neue", Arial, "Noto Sans", sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                "Noto Color Emoji";
              font-size: 1.18rem;
              line-height: 2.4rem;
            } */

            ${theme.type === "dark"
              ? css`
                  color: white;
                `
              : ``}
          `}
        >
          <span>{props.children}</span>
        </div>
      )}
    </ReactComponentsContext.Consumer>
  );
};

export default BlogSection;
