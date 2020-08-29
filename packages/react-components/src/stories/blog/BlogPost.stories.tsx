import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import BlogPost, { BlogPostProps } from "../../blog/BlogPost";
import { Theme } from "../../theme/Theme";
import PlaceholderBlogText from "./PlaceholderBlogText";

export default {
  title: "Blog/BlogPost",
  component: BlogPost,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

import { ThemeProvider } from "emotion-theming";

const Template: Story<BlogPostProps & Theme> = (args) => (
  <ThemeProvider
    theme={{
      type: args.type,
    }}
  >
    <BlogPost {...args} />
  </ThemeProvider>
);

export const Dark = Template.bind({});
Dark.args = {
  title: "My blog post",
  author: "Robbie Cook",
  content: PlaceholderBlogText,
  date: Date.now(),
  short: false,

  type: "dark",
};

export const Short = Template.bind({});
Short.args = {
  title: "My blog post",
  author: "Robbie Cook",
  content: PlaceholderBlogText,
  date: Date.now(),
  short: true,

  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  title: "My blog post",
  author: "Robbie Cook",
  content: PlaceholderBlogText,
  date: Date.now(),
  short: false,

  type: "light",
};
