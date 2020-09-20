/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Card } from "antd";

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
    <Card
      title={props.file}
      // extra={<a href="#">More</a>}
      css={css`
        cursor: pointer;
      `}
      style={{ width: 300 }}
      onClick={() => props.onFileClick(props.file)}
    ></Card>
  );
};

export default FileTile;
