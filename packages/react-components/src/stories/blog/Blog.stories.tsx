import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Blog, { BlogProps } from "../../blog/Blog";
import { Theme } from "../../theme/Theme";
import PlaceholderBlogText from "./PlaceholderBlogText";

import TestPost from "./TestPost.md";

export default {
  title: "Blog/Blog",
  component: Blog,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

import { ThemeProvider } from "emotion-theming";

const Template: Story<BlogProps & Theme> = (args) => (
  <ThemeProvider
    theme={{
      type: args.type,
    }}
  >
    <Blog {...args} />
  </ThemeProvider>
);

export const Dark = Template.bind({});
Dark.args = {
  posts: [
    {
      title: "My blog post",
      author: "Robbie Cook",
      content: <div dangerouslySetInnerHTML={{ __html: TestPost }} />,
      date: Date.now(),
    },
    {
      title: "My blog post",
      author: "Robbie Cook",
      content: PlaceholderBlogText,
      date: Date.now(),
    },
  ],
  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  posts: [
    {
      title: "My blog post",
      author: "Robbie Cook",
      content: PlaceholderBlogText,
      date: Date.now(),
    },
    {
      title: "My blog post",
      author: "Robbie Cook",
      content: PlaceholderBlogText,
      date: Date.now(),
    },
  ],
  type: "light",
};
