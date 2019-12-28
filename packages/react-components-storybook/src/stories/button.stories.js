import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@robbie-cook/react-components';
import { text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: 'Button',
};

export const normal = () => <Button label={text('Label', 'My Button')} onClick={action('clicked')}></Button>;
