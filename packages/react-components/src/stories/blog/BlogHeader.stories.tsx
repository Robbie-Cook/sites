import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import BlogHeader, { BlogPostProps } from "../../components/blog/BlogHeader";
import { Theme } from "../../theme/Theme";
import PlaceholderBlogText from "./PlaceholderBlogText";
import { setTheme } from "bigiron.css";
import { ReactComponentsTheme } from "../../theme";

export default {
  title: "Blog/Blog Header",
  component: BlogHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BlogPostProps & Theme> = (args) => (
  <ReactComponentsTheme theme={args.type}>
    <BlogHeader {...args} />
  </ReactComponentsTheme>
);

export const Dark = Template.bind({});
Dark.args = {
  children: "Hello",
};

export const Light = Template.bind({});
Light.args = {
  children: "Hello",
};
