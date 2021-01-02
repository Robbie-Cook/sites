import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import BlogInfo, { BlogInfoProps } from "../../components/blog/BlogInfo";
import { Theme } from "../../theme/Theme";
import ReactComponentsContext from "../../theme/ReactComponentsContext";
import { setTheme } from "bigiron.css";
import md5 from "md5";

export default {
  title: "Blog/BlogInfo",
  component: BlogInfo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BlogInfoProps & Theme> = (args) => (
  <ReactComponentsContext.Provider
    value={{
      type: args.type,
    }}
  >
    {setTheme(args.type)}
    <BlogInfo {...args} />
  </ReactComponentsContext.Provider>
);

const props: BlogInfoProps = {
  author: "Robbie Cook",
  date: new Date().toISOString(),
  image: `https://www.gravatar.com/avatar/${md5("robbieck7@gmail.com")}`,
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
