import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Login } from '../../templates/Login';

type Props = Record<string, unknown> & RouteComponentProps;

export default function LoginPage(props: Props) {
  return <Login />;
}
