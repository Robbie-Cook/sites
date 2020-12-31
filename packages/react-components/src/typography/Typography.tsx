/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import React, { useContext } from "react";
import ReactComponentsContext, {
  useTheme,
} from "../theme/ReactComponentsContext";

const headingBaseStyles = css`
  font-family: "Vollkorn", serif;
`;
/**
 *  A H1 component.
 */
const H1: React.FC<{ children?: any; className?: string }> = (props) => {
  return (
    <ReactComponentsContext.Consumer>
      {(value) => (
        <h1
          css={() =>
            css`
              color: ${value.type === "dark" ? `white` : `black`};
              margin: 1.2rem 0;
              ${headingBaseStyles};
            `
          }
          className={props.className}
        >
          {props.children}
        </h1>
      )}
    </ReactComponentsContext.Consumer>
  );
};
/**
 *  A H2 component.
 */
const H2: React.FC<{ children?: any; css?: SerializedStyles }> = (props) => {
  return (
    <ReactComponentsContext.Consumer>
      {(value) => (
        <h2
          css={css`
            color: ${value.type === "dark" ? `white` : `black`};
            margin: 1.2rem 0;
            ${headingBaseStyles};
          `}
        >
          {props.children}
        </h2>
      )}
    </ReactComponentsContext.Consumer>
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
  return (
    <ReactComponentsContext.Consumer>
      {(value) => (
        <h3
          css={() => {
            return css`
              /* color: ${value.type === "dark" ? `white` : `black`};
              margin: 1.2rem 0; */
            `;
          }}
          className={props.className}
        >
          {props.children}
        </h3>
      )}
    </ReactComponentsContext.Consumer>
  );
};

/**
 *  A p component.
 */
const P: React.FC<{
  children?: any;
  className?: string;
}> = (props) => {
  return (
    <ReactComponentsContext.Consumer>
      {(value) => (
        <p
          css={
            // css`

            // `,
            () =>
              css`
                color: ${value.type === "dark" ? `white` : `black`};
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
      )}
    </ReactComponentsContext.Consumer>
  );
};

export { H1, H2, H3, P };
