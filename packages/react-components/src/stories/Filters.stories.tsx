import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Filters, { FiltersProps } from "../components/filters/Filters";
import { Theme } from "../theme/Theme";
import { ReactComponentsTheme } from "../theme";

export default {
  title: "Filters",
  component: Filters,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<FiltersProps & Theme> = (args) => (
  <ReactComponentsTheme theme={args.type}>
    <Filters {...args} />
  </ReactComponentsTheme>
);

export const Dark = Template.bind({});
Dark.args = {
  type: "dark",
  filters: [
    {
      text: "filter one",
    },
    {
      text: "filter two",
    },
    {
      text: "filter three",
    },
  ],
};

export const Light = Template.bind({});
Light.args = {
  type: "light",
  filters: [
    {
      text: "filter one",
    },
    {
      text: "filter two",
    },
    {
      text: "filter three",
    },
  ],
};
