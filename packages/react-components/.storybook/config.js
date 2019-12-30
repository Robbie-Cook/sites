/** @jsx jsx */
import { jsx } from 'theme-ui'
import { configure, addDecorator } from '@storybook/react';

import { ThemeProvider } from 'theme-ui';
import theme from '../src/theme/default';

const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
addDecorator(ThemeDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.tsx$/), module);
