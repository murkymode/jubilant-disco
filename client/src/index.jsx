import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

/* webpack dev server hot reload */
if (module.hot) {
  module.hot.accept();
}
