import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Descriptions } from "antd";
import ReactComponentsContext, { ReactComponentsTheme } from "../theme/ReactComponentsContext";
import { Theme } from "../theme/Theme";
import { setTheme } from "bigiron.css";
import { DescriptionsProps } from "antd/lib/descriptions";

export default {
  title: "Descriptions",
  component: Descriptions,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<DescriptionsProps & Theme> = (args) => (
  <ReactComponentsTheme theme={args.type}>
    <Descriptions {...args} />
  </ReactComponentsTheme>
);

const props: DescriptionsProps = {
  children: (
    <React.Fragment>
      <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
      <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
      <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
      <Descriptions.Item label="Order time">
        2018-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item label="Usage Time" span={2}>
        2019-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
      <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
      <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
      <Descriptions.Item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1<br />
      </Descriptions.Item>
    </React.Fragment>
  ),
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
