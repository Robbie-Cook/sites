/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import FileTile from "./FileTile";
import { Button, Input } from "antd";

/**
 * Interface for FileTileWrapper props
 */
interface FileTileWrapperProps {
  files: Array<string>;
  onFileClick: (file: string) => void;
  onAddFile: (file: string) => void;
  onRemoveFile: (file: string) => void;
}

/**
 *  A FileTileWrapper component.
 */
const FileTileWrapper: React.FC<FileTileWrapperProps> = (props) => {
  const [fileName, newFileName] = React.useState<string>("New File");

  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        flex-grow: 0;
      `}
    >
      {props.files.map((file) => {
        return (
          <div
            css={css`
              margin-bottom: 30px;
            `}
          >
            <FileTile
              onFileClick={(file) => props.onFileClick(file)}
              onRemoveFile={(file) => props.onRemoveFile(file)}
              file={file}
            />
          </div>
        );
      })}
      <figure
        css={css`
          display: flex;
          max-width: 300px;
          padding: 30px;
        `}
      >
        <Input value={fileName} onChange={(e) => newFileName(e.target.value)} />
        <Button
          onClick={() => {
            if (fileName !== null) {
              props.onAddFile(fileName);
            }
          }}
        >
          Add File
        </Button>
      </figure>
    </div>
  );
};

export default FileTileWrapper;
