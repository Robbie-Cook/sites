import React from "react";
import Editor from "../components/Editor";
import { H1 } from "@robbie-cook/react-components";

function EditorPage(props: { file: string }) {
  return (
    <main>
      <H1>{props.file}</H1>
      <Editor
        onChange={async (text) => {
          console.log(text);
          const res = await fetch(`http://localhost:3001/file/${props.file}`, {
            method: "POST",
            body: JSON.stringify({
              content: text,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        }}
      />
    </main>
  );
}

export default EditorPage;
