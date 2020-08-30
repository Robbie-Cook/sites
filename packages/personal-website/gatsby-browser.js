/**
 * @jsx jsx
 */
import { ThemeProvider } from "emotion-theming";
import { jsx, css } from "@emotion/core";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <ThemeProvider theme={{ type: "dark" }}>{element}</ThemeProvider>;
};

export const wrapRootElement = ({ element }) => (
  // <ThemeProvider theme={{ type: "dark" }}>{element}</ThemeProvider>
  element
);
