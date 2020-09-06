/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

//@ts-ignore
import ArrowLeftSvg from "./arrow-left.svg";

/**
 * Interface for ArrowLeft props
 */
interface ArrowLeftProps {
  children?: any;
  link: string;
  className?: string;
}

/**
 *  A ArrowLeft component.
 */
const ArrowLeft: React.FC<ArrowLeftProps> = (props) => {
  return (
    <button
      className={props.className}
      type="button"
      onClick={() => {
        // @ts-ignore
        window.location = props.link;
      }}
      css={css`
        height: 80px;
        width: 80px;

        cursor: pointer;

        mask: url(${ArrowLeftSvg}) no-repeat 0 0 / contain;
        -webkit-mask: url(${ArrowLeftSvg}) no-repeat 0 0 / contain;
        background-image: unset;
        background-color: white;
        background-repeat: no-repeat;
        background-size: contain;
        will-change: mask;
        flex-shrink: 0;

        &:hover {
          background-color: #3899ef;
        }
      `}
    />
  );
};

export default ArrowLeft;

// height: 80px;
// width: 80px;

// &:hover {
//   background-color: #3899ef;
// }

// cursor: pointer;

// mask: url(${ArrowLeft}) no-repeat 0 0 / contain;
// -webkit-mask: url(${ArrowLeft}) no-repeat 0 0 / contain;
// background-image: unset;
// background-color: white;
// background-repeat: no-repeat;
// background-size: contain;
// will-change: mask;
// flex-shrink: 0;
