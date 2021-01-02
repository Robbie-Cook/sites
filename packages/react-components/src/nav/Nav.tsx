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
    active?: boolean;
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
            ${page.active
              ? "border-bottom: 2px solid var(--links);"
              : `color: var(--text-muted);`}
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
