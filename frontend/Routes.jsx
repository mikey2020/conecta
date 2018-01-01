import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './src/components/presentational/HomePage.jsx';


const Routes = () => (
  <Switch>
    <Route path="/" component={HomePage} />
  </Switch>
);

export default Routes;
