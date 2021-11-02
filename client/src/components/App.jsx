import React from 'react';

/* router */
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

import Splash from './Splash.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route path="/home">
          {/* <Home /> */}
        </Route>
      </Switch>
    </Router>
  );
}
