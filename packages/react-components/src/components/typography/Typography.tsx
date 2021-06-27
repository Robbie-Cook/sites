/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import React, { useContext } from "react";

const headingBaseStyles = css`
  font-family: "Vollkorn", serif;
`;
/**
 *  A H1 component.
 */
const H1: React.FC<{ children?: any; className?: string }> = (props) => {
  return (
    <h1
      css={() =>
        css`
          margin: 1.2rem 0;
          ${headingBaseStyles};
        `
      }
      className={props.className}
    >
      {props.children}
    </h1>
  );
};
/**
 *  A H2 component.
 */
const H2: React.FC<{ children?: any; css?: SerializedStyles }> = (props) => {
  return (
    <h2
      css={css`
        margin: 1.2rem 0;
        ${headingBaseStyles};
      `}
    >
      {props.children}
    </h2>
  );
};

/**
 *  A H3 component.
 */
const H3: React.FC<{
  children?: any;
  className?: string;
}> = (props) => {
  console.log(props);
  return <h3 className={props.className}>{props.children}</h3>;
};

/**
 *  A p component.
 */
const P: React.FC<{
  children?: any;
  className?: string;
}> = (props) => {
  return (
    <p
      css={() =>
        css`
          margin: 1.2rem 0;
          font-family: sans-serif;
          font-size: 1.05rem;
          ${headingBaseStyles};
        `
      }
      className={props.className}
    >
      {props.children}
    </p>
  );
};

export { H1, H2, H3, P };
