/**
 * @jsx jsx
 */
import { window, document, exists } from 'browser-monads';
import { jsx, css } from "@emotion/core";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <React.Fragment>
      {element}
    </React.Fragment>
  );
};

export const wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      {element}
    </React.Fragment>
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
