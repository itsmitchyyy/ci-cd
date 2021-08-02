import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ResetPassword } from '.';

storiesOf('templates/ResetPassword', module)
  .addDecorator(withKnobs)
  .add('ResetPassword', () => <ResetPassword />);
