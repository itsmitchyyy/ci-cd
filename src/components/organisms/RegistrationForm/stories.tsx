import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { RegistrationForm } from '.';

storiesOf('organisms/Form', module)
  .addDecorator(withKnobs)
  .add('Registration Form', () => <RegistrationForm layout="vertical" />);
