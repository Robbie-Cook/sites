/** @jsx jsx */
import { jsx } from 'theme-ui'
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
};

export const me = () => (
    <Button onClick={action('clicked')}>
      Hi
    </Button>
);
