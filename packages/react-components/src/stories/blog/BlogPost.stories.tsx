import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import BlogPost, { BlogPostProps } from "../../components/blog/BlogPost";
import { Theme } from "../../theme/Theme";
import PlaceholderBlogText from "./PlaceholderBlogText";
import { ReactComponentsTheme } from '../../theme';

export default {
  title: "Blog/BlogPost",
  component: BlogPost,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BlogPostProps & Theme> = (args) => (
  <ReactComponentsTheme theme={args.type}>
    <BlogPost {...args} />
  </ReactComponentsTheme>
);

export const Dark = Template.bind({});
Dark.args = {
  title: "My blog post",
  author: "Robbie Cook",
  content: <p>{PlaceholderBlogText}</p>,
  date: Date.now(),

  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  title: "My blog post",
  author: "Robbie Cook",
  content: <p>{PlaceholderBlogText}</p>,
  date: Date.now(),

  type: "light",
};
