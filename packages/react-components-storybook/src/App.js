/** @jsx jsx */
import { jsx } from "theme-ui";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, ColorMode } from "theme-ui";
import { DefaultTheme, Button } from '@robbie-cook/react-components'
// import Button from "./Button";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={DefaultTheme}>
        <Button>Hi</Button>
      </ThemeProvider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
