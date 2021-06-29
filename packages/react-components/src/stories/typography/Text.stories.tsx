import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text } from "../../components/typography/Typography";
import ReactComponentsContext from "../../theme/ReactComponentsContext";
import { Theme } from "../../theme/Theme";
import { setTheme } from "bigiron.css";

export default {
  title: "Typography/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<Theme> = (args) => (
  <ReactComponentsContext.Provider
    value={{
      type: args.type,
    }}
  >
    {setTheme(args.type)}
    <Text {...args} />
  </ReactComponentsContext.Provider>
);

const props: TextProps = {};

export const Dark = Template.bind({});
Dark.args = {
  children: "My Awesomer Text!",
  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  children: "My Awesomer Text!",
  type: "light",
};
