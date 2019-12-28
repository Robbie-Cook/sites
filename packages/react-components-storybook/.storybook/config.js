import { configure, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider, ColorMode } from "theme-ui";
import { DefaultTheme } from "@robbie-cook/react-components";
import React from "react";

addDecorator(withKnobs);

// Put in ThemeUI
const ThemeDecorator = storyFn => (
  <ThemeProvider theme={DefaultTheme}>{storyFn()}</ThemeProvider>
);
addDecorator(ThemeDecorator);

addParameters({
  options: {
    theme: themes.dark
  }
});

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
