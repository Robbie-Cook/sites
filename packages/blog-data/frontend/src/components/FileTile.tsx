/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Button } from "antd";

/**
 * Interface for FileTile props
 */
interface FileTileProps {
  file: string;
  onFileClick: (file: string) => void;
  onRemoveFile: (file: string) => void;
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
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        border: 1px solid gray;
        max-width: 300px;
      `}
      onClick={() => props.onFileClick(props.file)}
    >
      <span
        css={css`
          padding: 0 30px;
        `}
      >
        {props.file}
      </span>
      <Button
        danger
        onClick={(e) => {
          e.stopPropagation();
          props.onRemoveFile(props.file);
        }}
      >
        Remove File
      </Button>
    </div>
  );
};

export default FileTile;
