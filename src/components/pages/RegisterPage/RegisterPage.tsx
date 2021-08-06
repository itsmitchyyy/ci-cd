import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Register } from '../../templates/Register';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props = Record<string, string> & RouteComponentProps;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function LoginPage({ history }: Props) {
  return <Register onClickLoginNow={() => history.push('/')} />;
}
