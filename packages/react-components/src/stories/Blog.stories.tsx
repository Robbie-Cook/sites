import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import BlogPost, { BlogProps } from "../blog/BlogPost";

export default {
  title: "Blog/BlogPost",
  component: BlogPost,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

interface Theme {
  type: "light" | "dark";
}

import { ThemeProvider } from "emotion-theming";

const Template: Story<BlogProps & Theme> = (args) => (
  <ThemeProvider
    theme={{
      type: args.type,
    }}
  >
    <BlogPost {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "My blog post",
  author: "Robbie Cook",
  content: "This is some test content",
  date: Date.now(),

  type: "dark",
};
