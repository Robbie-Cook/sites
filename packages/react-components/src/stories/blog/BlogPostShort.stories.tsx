import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import BlogPostShort, {
  BlogPostProps,
} from "../../components/blog/BlogPostShort";
import { Theme } from "../../theme/Theme";
import PlaceholderBlogText from "./PlaceholderBlogText";
import { ReactComponentsTheme } from '../../theme';

export default {
  title: "Blog/Blog Post Short",
  component: BlogPostShort,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BlogPostProps & Theme> = (args) => (
  <ReactComponentsTheme theme={args.type}>
    <BlogPostShort {...args} />
  </ReactComponentsTheme>
);

export const Dark = Template.bind({});
Dark.args = {
  title: "My blog post",
  author: "Robbie Cook",
  content: PlaceholderBlogText,
  date: Date.now(),
  link: "#",

  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  title: "My blog post",
  author: "Robbie Cook",
  content: PlaceholderBlogText,
  date: Date.now(),
  link: "#",

  type: "light",
};
