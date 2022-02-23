import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));

/* webpack dev server hot reload */
if (module.hot) {
  module.hot.accept();
}
