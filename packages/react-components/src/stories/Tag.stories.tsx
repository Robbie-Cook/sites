import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Tag, { TagProps } from "../components/Tag";
import { Theme } from "../theme/Theme";
import { ReactComponentsTheme } from "../theme";

export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TagProps & Theme> = (args) => (
  <ReactComponentsTheme theme={args.type}>
    <Tag>{args.children}</Tag>
  </ReactComponentsTheme>
);

export const Dark = Template.bind({});
Dark.args = {
  children: "My Awesomer Tag!",
  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  children: "My Awesomer Tag!",
  type: "light",
};
