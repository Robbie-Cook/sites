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

            & img {
              margin: 50px 0;
              object-fit: cover;
              max-width: 100%;
              width: 400px;
            }

            & hr {
              margin-bottom: 45px;
              margin-top: 45px;
            }

            & p {
              margin-bottom: 30px;
            }

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
