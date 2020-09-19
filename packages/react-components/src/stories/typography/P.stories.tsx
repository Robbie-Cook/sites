import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { P, H2, H3 } from "../../typography/Typography";
import { Theme } from "../../theme/Theme";
import ReactComponentsContext from "../../theme/ReactComponentsContext";


export default {
  title: "Typography/P",
  component: P,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<any> = (args) => (
  <ReactComponentsContext.Provider
    value={{
      type: args.type,
    }}
  >
    <P>{args.children}</P>
  </ReactComponentsContext.Provider>
);

export const Dark = Template.bind({});
Dark.args = {
  children: "Hello",
  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  children: "Hello",
  type: "light",
};
