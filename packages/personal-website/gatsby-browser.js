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
    <ReactComponentsContext.Provider
      value={{
        type:
          window.localStorage &&
          window.localStorage.getItem("theme-ui-color-mode") === "light"
            ? "light"
            : "dark",
      }}
    >
      {element}
    </ReactComponentsContext.Provider>
  );
};

export const wrapRootElement = ({ element }) => {
  return (
    <ReactComponentsContext.Provider
      value={{
        type:
          window.localStorage &&
          window.localStorage.getItem("theme-ui-color-mode") === "light"
            ? "light"
            : "dark",
      }}
    >
      {element}
    </ReactComponentsContext.Provider>
  );
};
