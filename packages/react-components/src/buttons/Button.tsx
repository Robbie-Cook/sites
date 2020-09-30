/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import ReactComponentsContext from "../theme/ReactComponentsContext";

import { Button as AntButton } from 'antd';

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
        <AntButton
          css={css`
            color: ${value.type === "dark" ? "white" : "black"};
          `}
        >
          {props.children}
        </AntButton>
      )}
    </ReactComponentsContext.Consumer>
  );
};

export default Button;
