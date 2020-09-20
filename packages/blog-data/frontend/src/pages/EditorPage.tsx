import React from "react";
import Editor from "../components/Editor";
import { H1 } from "@robbie-cook/react-components";

function EditorPage() {
  return (
    <main>
      <H1>Editor</H1>
      <Editor
        onChange={async (text) => {
          console.log(text);
          const res = await fetch("http://localhost:3001/file/test-post.md", {
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
