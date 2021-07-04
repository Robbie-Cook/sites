import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Nav, { NavProps } from "../components/nav/Nav";
import ReactComponentsContext, { ReactComponentsTheme } from "../theme/ReactComponentsContext";
import { Theme } from "../theme/Theme";
import { setTheme } from "bigiron.css";

export default {
  title: "Nav",
  component: Nav,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<NavProps & Theme> = (args) => (
  <ReactComponentsTheme theme={args.type}>
    <Nav {...args} />
  </ReactComponentsTheme>
);

const props: NavProps = {
  pages: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
    {
      name: "Y",
      href: "/",
    },
    {
      name: "Why",
      href: "/",
    },
    {
      name: "wayo",
      href: "/",
    },
  ],
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
