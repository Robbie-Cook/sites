/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

/**
 * Interface for FileTile props
 */
interface FileTileProps {
  file: string;
  onFileClick: (file: string) => void;
}

/**
 *  A FileTile component.
 */
const FileTile: React.FC<FileTileProps> = (props) => {
  return (
    <div
      css={css`
        padding: 30px;
        cursor: pointer;
      `}
      onClick={() => props.onFileClick(props.file)}
    >
      {props.file}
    </div>
  );
};

export default FileTile;
