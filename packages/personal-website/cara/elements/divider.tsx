/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "theme-ui";
import React from "react";

type DividerProps = {
  speed: number;
  offset: number;
  children?: any;
  bg?: string;
  fill?: string;
  clipPath?: string;
  className?: string;
  factor?: number;
};

const Divider = ({
  speed,
  offset,
  factor,
  bg,
  fill,
  clipPath,
  children,
  className,
}: DividerProps) => children;

export default Divider;
