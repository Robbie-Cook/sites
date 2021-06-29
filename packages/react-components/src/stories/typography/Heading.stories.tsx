import React, { AllHTMLAttributes } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Heading } from "../../components/typography/Typography";
import ReactComponentsContext from "../../theme/ReactComponentsContext";
import { setTheme } from "bigiron.css";

export default {
  title: "Typography/Heading",
  component: Heading,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const All = (args) => {
  return (
    <ReactComponentsContext.Provider
      value={{
        type: args.type,
      }}
    >
      {setTheme(args.type)}
      <>
        <Heading level={1}>Level 1 Heading!</Heading>
        <Heading level={2}>Level 2 Heading!</Heading>
        <Heading level={3}>Level 3 Heading!</Heading>
      </>
    </ReactComponentsContext.Provider>
  );
};

export const Dark = All.bind({});
Dark.args = {
  children: "Level 1 Heading!",
  type: "dark",
  level: 1,
};

export const Light = All.bind({});
Light.args = {
  children: "Level 1 Heading!",
  type: "light",
  level: 1,
};
