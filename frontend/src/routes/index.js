import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import App from '../containers/App';
import Users from '../containers/Users';


const routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/users" component={Users} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
