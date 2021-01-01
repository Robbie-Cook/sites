import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Blog, { BlogProps } from "../../blog/Blog";
import { Theme } from "../../theme/Theme";
import PlaceholderBlogText from "./PlaceholderBlogText";
import ReactComponentsContext from "../../theme/ReactComponentsContext";
import { setTheme } from "bigiron.css";

// @ts-ignore
import TestPost from "./TestPost.md";
import { setCssVariables } from '../helpers';

export default {
  title: "Blog/Blog",
  component: Blog,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BlogProps & Theme> = (args) => (
  <ReactComponentsContext.Provider
    value={{
      type: args.type,
    }}
  >
    {setTheme(args.type)}
    <Blog posts={args.posts} />
  </ReactComponentsContext.Provider>
);

export const Dark = Template.bind({});
Dark.args = {
  posts: [
    {
      title: "My blog post",
      author: "Robbie Cook",
      content: <div dangerouslySetInnerHTML={{ __html: TestPost }} />,
      date: Date.now(),
      link: "#",
    },
    {
      title: "My blog post",
      author: "Robbie Cook",
      content: PlaceholderBlogText,
      date: Date.now(),
      link: "#",
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
      link: "#",
    },
    {
      title: "My blog post",
      author: "Robbie Cook",
      content: PlaceholderBlogText,
      date: Date.now(),
      link: "#",
    },
  ],
  type: "light",
};
