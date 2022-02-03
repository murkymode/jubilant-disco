import React, { useState, useRef } from 'react';

/* router */
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

/* data fetching */
import {
  QueryClient, QueryClientProvider, useQuery,
} from 'react-query';

import Context from './context';

/* pages */
import Splash from './pages/Splash';
import Home from './pages/Home';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
  function App() {
    const [projectID, setProjectID] = useState('');

    const handleID = (stringID) => {
      window.sessionStorage.setItem('currentProject', stringID);
      setProjectID(stringID);
    };

    /* fetching projects */
    const {
      isLoading, error, data,
    } = useQuery('fetchProjects', () => fetch('/api/projects')
      .then((res) => res.json()));

    if (isLoading) return 'Loading Projects...';
    if (error) return `Aww, an error: ${error.message}`;

    return (
      <Context.Provider
        value={{
          handleID,
          projectID,
          setProjectID,
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <Splash projects={data} />
            </Route>
            <Route path="/home">
              <Home projects={data} />
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    );
  }
}
