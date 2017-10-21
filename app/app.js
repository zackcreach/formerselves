import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from 'Home';
import NotFound from 'NotFound';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

if(module.hot) {
  module.hot.accept();
}
