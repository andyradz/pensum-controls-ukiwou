import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import store from './src/app/store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);

reportWebVitals();
