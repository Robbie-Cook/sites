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
}

/**
 *  A FileTileWrapper component.
 */
const FileTileWrapper: React.FC<FileTileWrapperProps> = (props) => {
  return (
    <div>
      {props.files.map((file) => {
        return (
          <FileTile
            onFileClick={(file) => props.onFileClick(file)}
            file={file}
          />
        );
      })}
    </div>
  );
};

export default FileTileWrapper;
