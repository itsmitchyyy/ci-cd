import React from 'react';
import { Button } from '../../atoms/Button';
import { Title } from '../../atoms/Title';
import { LoginForm } from '../../organisms/LoginForm';
import {
  ForgotPasswordContainer,
  FormContainer,
  HeaderContainer,
  FormWrapper,
} from './elements';

type Props = {
  formData?: { username: string; password: string };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Login({ formData }: Props) {
  return (
    <FormWrapper>
      <FormContainer>
        <HeaderContainer>
          <Title level={3} value="Sign in to your account" />
        </HeaderContainer>

        <LoginForm layout="vertical" formData={formData} />
        <Button type="primary">Login</Button>
        <ForgotPasswordContainer>
          <span>
            Forgot your password? <a href="#">Reset Password</a>
          </span>
        </ForgotPasswordContainer>
      </FormContainer>
    </FormWrapper>
  );
}
