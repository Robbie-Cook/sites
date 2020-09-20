/** @jsx jsx */
import React from "react";
import Editor from "./Editor";
import { H1, H3 } from "@robbie-cook/react-components";
import EditorPage from "../pages/EditorPage";
import FileTile from "./FileTile";
import FileTileWrapper from "./FileTileWrapper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import slugify from "slugify";
import { css, jsx } from "@emotion/core";

async function fetchFiles() {
  const files = await (await fetch("http://localhost:8080/files")).json();
  return files;
}

function App() {
  const [files, setFiles] = React.useState<Array<string> | null>(null);

  React.useEffect(() => {
    fetchFiles().then((files) => {
      setFiles(files);
    });
  }, []);

  return (
    <main
      css={css`
        padding: 30px 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      `}
    >
      <Router>
        <Switch>
          <Route path="/" exact>
            <H1>Fox</H1>
            <H3>Select a file to edit</H3>
            {files && (
              <FileTileWrapper
                files={files}
                onFileClick={(file) => {
                  (window as any).location = `/${file}`;
                }}
                onRemoveFile={(file) => {
                  // TODO: move to helper
                  fetch(`http://localhost:8080/delete-file/${file}`).then(
                    () => {
                      fetchFiles().then((files) => {
                        setFiles(files);
                      });
                    }
                  );
                }}
                onAddFile={(file) => {
                  const newFiles = [...files];
                  const fileSlug = `${slugify(file)}.md`;
                  newFiles.push(fileSlug);

                  // TODO: move to helper
                  fetch(`http://localhost:8080/file/${fileSlug}`, {
                    method: "POST",
                    body: JSON.stringify({
                      content: "",
                    }),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8",
                    },
                  }).then(() => {
                    setFiles(newFiles);
                  });
                }}
              />
            )}
          </Route>
          {files &&
            files.map((file) => (
              <Route path={`/${encodeURIComponent(file)}`}>
                <EditorPage file={file} />
              </Route>
            ))}
        </Switch>
      </Router>
    </main>
  );
}

export default App;
