import React from 'react';

import Globe from '../components/Globe';

export default {
  title: 'Globe',
  component: Globe,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Globe {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Globe',
};
