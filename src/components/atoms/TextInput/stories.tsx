import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { TextInput } from '.';

storiesOf('atoms/TextInput', module)
  .addDecorator(withKnobs)
  .add('Primary Input', () => <TextInput type="text" value="Primary Input" />);
