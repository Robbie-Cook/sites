/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for Pill props
 */
export interface PillProps {
  children?: any;
}

/**
 * A Pill component.
 */
const Pill: React.FC<PillProps> = (props) => {
  return <div css={css``}>{props.children}</div>;
};

export default Pill;
