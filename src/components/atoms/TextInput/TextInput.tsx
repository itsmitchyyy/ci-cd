import React from 'react';
import { StyledInput } from './elements';

type Props = {
  type: 'email' | 'text' | 'password';
  value?: string;
  placeholder?: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function TextInput({
  type,
  value,
  placeholder,
  ...extra
}: Props) {
  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      {...extra}
    />
  );
}
