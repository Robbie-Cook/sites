/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import FileTile from "./FileTile";

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
    <div>
      {props.files.map((file) => {
        return (
          <FileTile
            onFileClick={(file) => props.onFileClick(file)}
            onRemoveFile={(file) => props.onRemoveFile(file)}
            file={file}
          />
        );
      })}
      <figure>
        <input
          type="text"
          value={fileName}
          onChange={(e) => newFileName(e.target.value)}
        ></input>
        <button
          onClick={() => {
            if (fileName !== null) {
              props.onAddFile(fileName);
            }
          }}
        >
          Add File
        </button>
      </figure>
    </div>
  );
};

export default FileTileWrapper;
