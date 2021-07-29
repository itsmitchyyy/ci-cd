import React from 'react';
import { StyledTitle } from './elements';

type Props = {
  value?: string;
  level?: 1 | 2 | 3 | 4 | 5;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Title({ level, value }: Props) {
  return <StyledTitle level={level}>{value}</StyledTitle>;
}
