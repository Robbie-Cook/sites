import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";

const DATA_DIR = "../data";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * Get all files from data
 */
app.get("/files", (req, res) => {
  const files = fs.readdirSync("../data");
  res.send(files);
});

/**
 * Update a file. This is probably a dangerous function, and it needs to
 * be protected.
 */
app.post("/file/:fileName", (req, res) => {
  const filePath = path.resolve(DATA_DIR, req.params.fileName);
  console.log(
    `Received request to ${filePath} with body ${JSON.stringify(req.body)}`
  );
  if ((req.params.fileName && req.body.content) || req.body.content === "") {
    console.log(`Setting file ${filePath} to content ${req.body.content}`);
    fs.writeFileSync(filePath, req.body.content);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

/**
 * Delete a file. This is probably the most dangerous function, and it needs to
 * be protected.
 */
app.get("/delete-file/:fileName", (req, res) => {
  const filePath = path.resolve(DATA_DIR, req.params.fileName);
  console.log(`Received request to delete ${filePath}`);
  if (req.params.fileName) {
    console.log(`Deleting file ${filePath}`);
    fs.unlinkSync(filePath);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

/**
 * Get a file
 */
app.get("/file/:fileName", (req, res) => {
  if (req.params.fileName) {
    const filePath = path.resolve(DATA_DIR, req.params.fileName);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath);
      res.status(200);
      res.send(data);
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
