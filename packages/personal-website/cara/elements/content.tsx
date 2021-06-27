/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "theme-ui";

type ContentProps = {
  speed: number;
  offset: number;
  children?: React.ReactNode;
  className?: string;
  factor?: number;
};

const Content = ({
  speed,
  offset,
  children,
  className,
  factor,
}: ContentProps) => children;

export default Content;
