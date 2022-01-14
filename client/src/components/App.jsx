import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

/* router */
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

/* data fetching */
import {
  QueryClient, QueryClientProvider, useQuery,
} from 'react-query';

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
    const {
      isLoading, error, data,
    } = useQuery('fetchProjects', () => fetch('/api/projects')
      .then((res) => res.json()));

    if (isLoading) return 'Loading Projects...';
    if (error) return `Aww, an error: ${error.message}`;
    return (
      <>
        <CssBaseline />
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
      </>
    );
  }
}
