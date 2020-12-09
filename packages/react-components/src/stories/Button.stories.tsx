import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { ButtonProps } from "../buttons/Button";
import ReactComponentsContext from "../theme/ReactComponentsContext";
import { Theme } from "../theme/Theme";
import { setTheme } from "bigiron.css";


export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps & Theme> = (args) => (
  <ReactComponentsContext.Provider
    value={{
      type: args.type,
    }}
  >
    {setTheme(args.type)}
    <Button>{args.children}</Button>
  </ReactComponentsContext.Provider>
);

export const Dark = Template.bind({});
Dark.args = {
  children: "My Awesomer Button!",
  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  children: "My Awesomer Button!",
  type: "light",
};
