/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for Pill props
 */
export interface PillProps {
  children?: any;
  onClick?: () => void;
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
      `}
    >
      {props.children}
    </button>
  );
};

export default Pill;
