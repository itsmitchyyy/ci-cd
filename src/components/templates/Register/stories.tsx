import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Register } from '.';

storiesOf('templates/Register', module)
  .addDecorator(withKnobs)
  .add('Register', () => <Register />);
