/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { useTheme } from "../theme/ReactComponentsContext";
import facepaint from 'facepaint'

const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
])

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
  // const theme = useTheme();
  const theme = { type: "dark" };
  return (
    <div
      css={css`
        margin-top: 20px;
        line-height: 1.8rem;

        & * {
          a {
            color: #329cfa;
            &:visited {
              color: #96a3ff;
            }
          }

          p {
            margin-bottom: 40px;

            ${mq}
            @media only screen and (max-width: 600px) {
              body {
                background-color: lightblue;
              }
            }
          }

          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
          font-size: 1.18rem;
          line-height: 2.4rem;
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
  );
};

export default BlogSection;
