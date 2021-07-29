import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Title } from '.';

storiesOf('atoms/Title', module)
  .addDecorator(withKnobs)
  .add('H1', () => <Title value="H1 Title" level={1} />);
