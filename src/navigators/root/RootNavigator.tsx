import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginPage } from '../../components/pages/LoginPage';
import { ResetPasswordPage } from '../../components/pages/ResetPasswordPage';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function RootNavigator() {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path="/" exact component={LoginPage} />
          <Route path="/reset-password" exact component={ResetPasswordPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}
