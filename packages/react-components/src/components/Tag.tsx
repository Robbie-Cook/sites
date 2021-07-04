/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for Tag props
 */
export interface TagProps {
  children?: any;
  onClick?: () => void;
  active?: boolean;
}

/**
 * A Tag component.
 */
const Tag: React.FC<TagProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      css={css`
        height: 34px;
        font-size: 13px;
        line-height: 13px;
        padding: 0 16px;
        /* border-radius: 0; */

        ${props.active ? `box-shadow: 0 0 0 2px var(--focus);` : ``}
      `}
    >
      {props.children}
    </button>
  );
};

export default Tag;
