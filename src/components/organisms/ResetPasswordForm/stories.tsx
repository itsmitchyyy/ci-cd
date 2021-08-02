import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ResetPasswordForm } from '.';

storiesOf('organisms/Form', module)
  .addDecorator(withKnobs)
  .add('Rest Password Form', () => <ResetPasswordForm />);
