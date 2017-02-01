import React from 'react';
import {Router, Route, IndexRoute } from 'react-router';
import App from '../App' ;
import ListView from '../ListView';
import Form from '../Form';

const routes = (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={ListView} />
      <Route path='/form' component={Form} />
    </Route>
  </Router>
);

export default routes;
