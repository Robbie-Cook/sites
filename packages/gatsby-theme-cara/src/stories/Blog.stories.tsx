/* eslint-disable  */
import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Post, { BlogProps } from "../components/blog/Post";

// import { Button, ButtonProps } from "./Blog";

export default {
  title: "Blog/Post",
  component: Post,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BlogProps> = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'My Blog Post',
  author: 'Robbie Cook',
  date: Date.now(),
  content: "Hello"
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
