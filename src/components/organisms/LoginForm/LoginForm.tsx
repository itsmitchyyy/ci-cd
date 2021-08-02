import React from 'react';
import { Button } from '../../atoms/Button';
import { TextInput } from '../../atoms/TextInput';
import { ButtonWrapper, StyledForm } from './elements';

type Props = {
  layout?: 'horizontal' | 'vertical' | 'inline';
  formData?: Record<string, string>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function LoginForm({ layout, formData }: Props) {
  return (
    <StyledForm layout={layout}>
      <StyledForm.Item label="Username">
        <TextInput
          type="text"
          value={formData?.username}
          placeholder="Username"
        />
      </StyledForm.Item>
      <StyledForm.Item label="Password">
        <TextInput
          type="password"
          value={formData?.password}
          placeholder="Password"
        />
      </StyledForm.Item>

      <ButtonWrapper>
        <Button type="primary">Login</Button>
      </ButtonWrapper>
    </StyledForm>
  );
}
