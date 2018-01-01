import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './src/components/presentational/HomePage.jsx';
import SignupPage from './src/components/containers/SignupPage.jsx';
import LoginForm from './src/components/containers/LoginForm.jsx';

const Routes = () => (
  <Switch>
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginForm} />
    <Route path="/" component={HomePage} />
  </Switch>
);

export default Routes;
