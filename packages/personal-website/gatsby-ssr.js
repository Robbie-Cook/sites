/**
 * @jsx jsx
 */
import { jsx, css } from "@emotion/core";
import {
  Blog,
  Theme,
  ReactComponentsContext,
  H1,
  SEO,
} from "@robbie-cook/react-components";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ReactComponentsContext.Provider value={{ type: "dark" }}>
      {element}
    </ReactComponentsContext.Provider>
  );
};

export const wrapRootElement = ({ element }) => {
  return (
    <ReactComponentsContext.Provider value={{ type: "dark" }}>
      {element}
    </ReactComponentsContext.Provider>
  );
};
// element

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
