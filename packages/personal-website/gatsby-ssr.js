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
  <ThemeProvider theme={{ type: "dark" }}>{element}</ThemeProvider>
  // element
);

const HeadComponents = [
  <link
    href="https://fonts.googleapis.com/css2?family=Lexend+Peta&family=Vollkorn:ital,wght@0,600;0,700;0,800;0,900;1,700&display=swap"
    rel="stylesheet"
  ></link>,
];

export const onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  // setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents);
  // setBodyAttributes(BodyAttributes)
};
