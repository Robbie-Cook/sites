/**
 * @jsx jsx
 */
import { window, document, exists } from 'browser-monads';
import { jsx, css } from "@emotion/core";


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
