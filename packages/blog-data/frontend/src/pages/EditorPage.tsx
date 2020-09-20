/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Editor from "../components/Editor";
import { H1 } from "@robbie-cook/react-components";
import TurndownService from "turndown";

const turndownService = new TurndownService();

function EditorPage(props: { file: string }) {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <H1>{props.file}</H1>
      <Editor
        onChange={async (text) => {
          console.log(text);
          const res = await fetch(`http://localhost:8080/file/${props.file}`, {
            method: "POST",
            body: JSON.stringify({
              content: turndownService.turndown(text),
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        }}
      />
    </div>
  );
}

export default EditorPage;
