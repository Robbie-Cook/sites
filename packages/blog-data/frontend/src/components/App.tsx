import React from "react";
import Quill from "quill";
import "../quill.snow.css";

function App() {
  React.useEffect(() => {
    const editor = new Quill("#editor", {
      modules: { toolbar: "#toolbar" },
      theme: "snow",
    });
  });
  return (
    <div className="App">
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

export default App;
