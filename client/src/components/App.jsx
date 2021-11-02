import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

/* router */
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

/* pages */
import Splash from './pages/Splash';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
