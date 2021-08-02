import React from 'react';
import { FormContainer, FormWrapper, HeaderContainer } from '../Login/elements';
import { Title } from '../../atoms/Title';
import { ResetPasswordForm } from '../../organisms/ResetPasswordForm';

type Props = {
  username?: string;
  onClickBackToLogin?: () => void;
  onClickEmailResetLink?: () => void;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ResetPassword({
  username,
  onClickBackToLogin,
  onClickEmailResetLink,
}: Props) {
  return (
    <FormWrapper>
      <FormContainer>
        <HeaderContainer>
          <Title level={3} value="Reset your password" />

          <ResetPasswordForm
            onClickBackToLogin={onClickBackToLogin}
            onClickEmailResetLink={onClickEmailResetLink}
            layout="vertical"
            username={username}
          />
        </HeaderContainer>
      </FormContainer>
    </FormWrapper>
  );
}
