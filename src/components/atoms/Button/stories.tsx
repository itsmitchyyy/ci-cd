import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Primary Button', () => <Button type="primary">Primary</Button>)
  .add('Loading Button', () => (
    <Button type="primary" loading={true}>
      Loading...
    </Button>
  ));
