import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Avatar } from "antd";
import { Theme } from "../theme/Theme";
import { AvatarProps } from "antd/lib/avatar";
import { ReactComponentsTheme } from '../theme';

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<AvatarProps & Theme> = (args) => (
  <ReactComponentsTheme theme={args.type}>
    <Avatar {...args} />
  </ReactComponentsTheme>
);

const props: AvatarProps = {
  children: "My Awesomer Avatar!",
  src: "https://picsum.photos/200/300",
  size: "large",
};

export const Dark = Template.bind({});
Dark.args = {
  ...props,
  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  ...props,
  type: "light",
};
