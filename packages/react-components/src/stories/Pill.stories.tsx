import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Pill, { PillProps } from "../Pill";
import ReactComponentsContext from "../theme/ReactComponentsContext";
import { Theme } from "../theme/Theme";
export default {
  title: "Pill",
  component: Pill,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PillProps & Theme> = (args) => (
  <ReactComponentsContext.Provider
    value={{
      type: args.type,
    }}
  >
    <Pill>{args.children}</Pill>
  </ReactComponentsContext.Provider>
);

export const Dark = Template.bind({});
Dark.args = {
  children: "My Awesomer Pill!",
  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  children: "My Awesomer Pill!",
  type: "light",
};
