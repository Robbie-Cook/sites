/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import React, { useContext } from "react";

/**
 *  A H1 component.
 */
const H1: React.FC<{ children?: any; className?: string }> = (props) => {
  return <h1 {...props}>{props.children}</h1>;
};
/**
 *  A H2 component.
 */
const H2: React.FC<{ children?: any; css?: SerializedStyles }> = (props) => {
  return <h2 {...props}>{props.children}</h2>;
};

/**
 *  A H3 component.
 */
const H3: React.FC<{
  children?: any;
  className?: string;
}> = (props) => {
  return <h3 {...props}>{props.children}</h3>;
};

/**
 *  A p component.
 */
const Text: React.FC<{
  children?: any;
  className?: string;
}> = (props) => {
  return <p>{props.children}</p>;
};

const Heading: React.FC<{ level: 1 | 2 | 3; children: any }> = ({
  level,
  children,
  ...props
}) => {
  switch (level) {
    case 1:
      return <H1 {...props}>{children}</H1>;
    case 2:
      return <H2 {...props}>{children}</H2>;
    case 3:
      return <H3 {...props}>{children}</H3>;
    default:
      return <H1 {...props}>{children}</H1>;
  }
};
export { Heading, Text };
