/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ReactComponentsContext from "../theme/ReactComponentsContext";

/**
 * Interface for Button props
 */
export interface ButtonProps {
  children?: any;
}

/**
 *  A Button component.
 */
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ReactComponentsContext.Consumer>
      {(value) => (
        <button
          css={css`
            color: ${value.type === "dark" ? "white" : "black"};
          `}
        >
          {props.children}
        </button>
      )}
    </ReactComponentsContext.Consumer>
  );
};

export default Button;
