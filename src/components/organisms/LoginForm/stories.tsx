import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { LoginForm } from '.';

storiesOf('organisms/Form', module)
  .addDecorator(withKnobs)
  .add('Login Form', () => <LoginForm layout="vertical" />);
