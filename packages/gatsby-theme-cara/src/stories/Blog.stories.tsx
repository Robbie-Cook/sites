import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Blog from "../components/blog/Blog";

// import { Button, ButtonProps } from "./Blog";

export default {
  title: "Blog/Blog",
  component: Blog,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<unknown> = (args) => <Blog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Blog",
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
