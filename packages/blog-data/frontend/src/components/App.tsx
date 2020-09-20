import React from "react";
import Editor from "./Editor";
import { H1 } from "@robbie-cook/react-components";
import EditorPage from "../pages/EditorPage";
import FileTile from "./FileTile";
import FileTileWrapper from "./FileTileWrapper";

async function fetchFiles() {
  const files = await (await fetch("http://localhost:3001/files")).json();
  return files;
}

function App() {
  const [files, setFiles] = React.useState<Array<string> | null>(null);
  const [activeFile, setActiveFile] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetchFiles().then((files) => {
      setFiles(files);
    });
  }, []);

  return (
    <main>
      {files && !activeFile && (
        <FileTileWrapper
          files={files}
          onFileClick={(file) => setActiveFile(file)}
        />
      )}
      {activeFile && <EditorPage />}
    </main>
  );
}

export default App;
