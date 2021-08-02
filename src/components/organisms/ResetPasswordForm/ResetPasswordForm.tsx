import { Form } from 'antd';
import React from 'react';
import { Button } from '../../atoms/Button';
import { StyledInput } from '../../atoms/TextInput/elements';
import { ButtonContainer, ButtonWrapper } from './elements';

type Props = {
  layout?: 'horizontal' | 'vertical' | 'inline';
  username?: string;
  onClickBackToLogin?: () => void;
  onClickEmailResetLink?: () => void;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ResetPasswordForm({
  layout,
  username,
  onClickEmailResetLink,
  onClickBackToLogin,
}: Props) {
  return (
    <Form layout={layout}>
      <Form.Item label="Username">
        <StyledInput type="text" value={username} placeholder="Username" />
      </Form.Item>

      <ButtonWrapper>
        <ButtonContainer className="start">
          <Button type="link" onClick={onClickBackToLogin}>
            Back to login
          </Button>
        </ButtonContainer>
        <ButtonContainer className="end">
          <Button type="primary" onClick={onClickEmailResetLink}>
            Email Reset Link
          </Button>
        </ButtonContainer>
      </ButtonWrapper>
    </Form>
  );
}
