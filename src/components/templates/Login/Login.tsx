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
  onClickForgotPassword?: () => void;
  onClickRegisterNow?: () => void;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Login({
  formData,
  onClickForgotPassword,
  onClickRegisterNow,
}: Props) {
  return (
    <FormWrapper>
      <FormContainer>
        <HeaderContainer>
          <Title level={3} value="Sign in to your account" />
        </HeaderContainer>

        <LoginForm layout="vertical" formData={formData} />
        <ForgotPasswordContainer>
          <span>
            Don&apos;t have an account?
            <Button
              type="link"
              aria-controls="button-register"
              onClick={onClickRegisterNow}>
              Register here
            </Button>
          </span>
          <span>
            Forgot your password?
            <Button type="link" onClick={onClickForgotPassword}>
              Click here to reset
            </Button>
          </span>
        </ForgotPasswordContainer>
      </FormContainer>
    </FormWrapper>
  );
}
