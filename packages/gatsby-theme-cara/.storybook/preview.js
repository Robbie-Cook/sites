// .storybook/preview.js

import React from "react";
import theme from "../src/gatsby-plugin-theme-ui/index";
import { ThemeProvider } from "theme-ui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
