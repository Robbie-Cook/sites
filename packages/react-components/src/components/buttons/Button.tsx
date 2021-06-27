/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ReactComponentsContext from "../../theme/ReactComponentsContext";

import { Button as AntButton } from "antd";

/**
 * Interface for Button props
 */
export interface ButtonProps {
  children?: any;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

/**
 *  A Button component.
 */
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ReactComponentsContext.Consumer>
      {(value) => (
        <AntButton
          className={props.className}
          css={css`
            color: ${value.type === "dark" ? "white" : "black"};
            background-color: transparent;
          `}
          onClick={props.onClick}
        >
          {props.children}
        </AntButton>
      )}
    </ReactComponentsContext.Consumer>
  );
};

export default Button;
