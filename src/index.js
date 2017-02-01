import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';
import ListView from './ListView';
import MapView from './MapView';
import './index.css';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={ListView} />
      <Route path='/form' component={Form} />
      <Route path='/map' component={MapView} />
    </Route>
  </Router>,
  document.getElementById('root')
);
