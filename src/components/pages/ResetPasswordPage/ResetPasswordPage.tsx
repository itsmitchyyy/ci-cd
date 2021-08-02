import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ResetPassword } from '../../templates/ResetPassword';

type Props = Record<string, string> & RouteComponentProps;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ResetPasswordPage({ history }: Props) {
  return <ResetPassword onClickBackToLogin={() => history.push('/')} />;
}
