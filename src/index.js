import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router-dom';
import history from './history';

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>,
document.getElementById('root'));
registerServiceWorker();
