import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Text } from "../../components/typography/Typography";
import ReactComponentsContext from "../../theme/ReactComponentsContext";
import { Theme } from "../../theme/Theme";
import { setTheme } from "bigiron.css";

export default {
  title: "Typography/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<Theme> = (args) => (
  <ReactComponentsContext.Provider
    value={{
      type: args.type,
    }}
  >
    {setTheme(args.type)}
    <Text {...args} />
  </ReactComponentsContext.Provider>
);

const children = `My Awesomer Text! \n Sint aliqua duis pariatur velit ipsum exercitation culpa ea excepteur laborum commodo quis. Voluptate occaecat ullamco ut minim cillum laboris dolor sit aute aliquip fugiat veniam dolore. Magna cillum sit proident et irure exercitation tempor aute reprehenderit magna ea pariatur ipsum. Magna excepteur ea exercitation voluptate aliquip aliquip anim cillum.

Velit consequat id Lorem ut commodo in veniam mollit culpa minim. Laboris nisi excepteur minim sint in ipsum pariatur reprehenderit duis. Proident eiusmod ad aliqua do aute ipsum laboris voluptate consequat duis dolor. Irure nulla nisi incididunt duis tempor commodo exercitation magna Lorem. Esse incididunt magna sint nostrud aliquip ut magna ut est eu esse reprehenderit cupidatat incididunt.

Eiusmod exercitation officia labore labore irure ea nostrud consectetur nisi esse cupidatat in deserunt qui. Aliquip veniam eu mollit sint nulla elit nulla laborum mollit. Proident adipisicing laborum voluptate reprehenderit aliqua velit dolore cupidatat deserunt. Consectetur qui ut ad laborum qui commodo. Magna ullamco duis reprehenderit adipisicing quis consectetur sit. Ullamco ipsum sit qui cupidatat velit magna ipsum ut adipisicing consequat sunt esse sint sit.

Fugiat aliquip do ex aliquip. Elit ipsum aute aliquip adipisicing id elit nulla non cupidatat dolore. Adipisicing nostrud laborum sint excepteur sit ut nulla quis esse quis. Proident laborum sit consectetur dolor reprehenderit irure. Lorem officia laborum fugiat nulla officia magna et cillum.`;

export const Dark = Template.bind({});
Dark.args = {
  children,
  type: "dark",
};

export const Light = Template.bind({});
Light.args = {
  children,
  type: "light",
};
