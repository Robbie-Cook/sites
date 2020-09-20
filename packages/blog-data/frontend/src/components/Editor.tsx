/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Quill from "quill";
import "../quill.snow.css";
import * as _ from "lodash";
import React from "react";

function Editor(props: { onChange: (text: string) => Promise<void> }) {
  React.useEffect(() => {
    const quill = new Quill("#editor", {
      modules: { toolbar: "#toolbar" },
      theme: "snow",
    });

    // On change handler
    quill.on(
      "text-change",
      _.debounce((delta, oldContents) => {
        const text = quill.root.innerHTML;
        props.onChange(text);
      }, 100)
    );
  });
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <div id="toolbar">
        <button className="ql-bold">Bold</button>
        <button className="ql-italic">Italic</button>
      </div>
      <div id="editor">
        <p>Hello World!</p>
        <p>
          Some initial <strong>bold</strong> text
        </p>
        <p></p>
      </div>{" "}
    </div>
  );
}

export default Editor;
