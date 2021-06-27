/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for Pill props
 */
export interface PillProps {
  children?: any;
  onClick?: () => void;
  active?: boolean;
}

/**
 * A Pill component.
 */
const Pill: React.FC<PillProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      css={css`
        border-radius: 24px;

        ${props.active ? `box-shadow: 0 0 0 2px var(--focus);` : ``}
      `}
    >
      {props.children}
    </button>
  );
};

export default Pill;
