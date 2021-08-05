import React from 'react';
import { Button } from '../../atoms/Button';
import { Title } from '../../atoms/Title';
import { ButtonWrapper } from '../../organisms/LoginForm/elements';
import { RegistrationForm } from '../../organisms/RegistrationForm';
import { FormContainer, FormWrapper, HeaderContainer } from '../Login/elements';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Register() {
  return (
    <FormWrapper>
      <FormContainer>
        <HeaderContainer>
          <Title level={3} value="Create Your Account" />
        </HeaderContainer>

        <RegistrationForm layout="vertical" />
        <ButtonWrapper>
          <span>
            Already have an account?
            <Button type="link">Login now</Button>
          </span>
        </ButtonWrapper>
      </FormContainer>
    </FormWrapper>
  );
}
