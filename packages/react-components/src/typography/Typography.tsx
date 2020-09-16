/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import React, { useContext } from "react";
import ReactComponentsContext, {
  useTheme,
} from "../theme/ReactComponentsContext";

const headingBaseStyles = css`
  font-family: "Lexend Peta", sans-serif;
  font-family: "Vollkorn", serif;
`;
/**
 *  A H1 component.
 */
const H1: React.FC<{ children?: any; className?: string }> = (props) => {
  // const theme = useTheme();
  const theme = { type: "dark" };
  return (
    <h1
      css={() =>
        css`
          color: ${theme.type === "dark" ? `white` : `black`};
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
  // const theme = useTheme();
  const theme = { type: "dark" };
  return (
    <h2
      css={css`
        color: ${theme.type === "dark" ? `white` : `black`};
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
  // const theme = useTheme();
  const theme = { type: "dark" };
  return (
    <h3
      css={() => {
        return css`
          color: ${theme.type === "dark" ? `white` : `black`};
          margin: 1.2rem 0;
        `;
      }}
      className={props.className}
    >
      {props.children}
    </h3>
  );
};

/**
 *  A p component.
 */
const P: React.FC<{
  children?: any;
  className?: string;
}> = (props) => {
  // const theme = useTheme();
  const theme = { type: "dark" };
  return (
    <p
      css={
        // css`

        // `,
        () =>
          css`
            color: ${theme.type === "dark" ? `white` : `black`};
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
