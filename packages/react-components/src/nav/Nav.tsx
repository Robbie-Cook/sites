/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for Navigation props
 */
export interface NavProps {
  pages: {
    name: string;
    href: string;
  }[];
}

/**
 *  A Nav component.
 */
const Nav: React.FC<NavProps> = (props) => {
  return (
    <nav css={css``}>
      {props.pages?.map((page) => (
        <a
          css={css`
            margin-right: 20px;
          `}
          href={page.href}
        >
          {page.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
