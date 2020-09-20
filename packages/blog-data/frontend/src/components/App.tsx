import React from "react";
import Editor from "./Editor";
import { H1 } from "@robbie-cook/react-components";

function App() {
  return (
    <main>
      <H1>Editor</H1>
      <Editor
        onChange={(text) => {
          console.log(text);
          fetch("http://localhost:3001/file/test-post.md", {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            method: "POST",
            body: JSON.stringify({
              content: text,
            }),
          }).then((res) => {
            console.log(res);
          });
        }}
      />
    </main>
  );
}

export default App;
