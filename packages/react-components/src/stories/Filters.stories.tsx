import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Filters, { FiltersProps } from "../components/filters/Filters";
import ReactComponentsContext from "../theme/ReactComponentsContext";
import { Theme } from "../theme/Theme";
import { setTheme } from "bigiron.css";

export default {
  title: "Filters",
  component: Filters,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<FiltersProps & Theme> = (args) => (
  <ReactComponentsContext.Provider
    value={{
      type: args.type,
    }}
  >
    {setTheme(args.type)}
    <Filters {...args} />
  </ReactComponentsContext.Provider>
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
