import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Login } from '../../templates/Login';

type Props = Record<string, string> & RouteComponentProps;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function LoginPage({ history }: Props) {
  return (
    <Login
      onClickRegisterNow={() => history.push('/register')}
      onClickForgotPassword={() => history.push('/reset-password')}
    />
  );
}
