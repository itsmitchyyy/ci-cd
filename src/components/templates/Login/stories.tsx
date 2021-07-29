import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Login } from '.';

storiesOf('templates/Login', module)
  .addDecorator(withKnobs)
  .add('Login', () => <Login />);
