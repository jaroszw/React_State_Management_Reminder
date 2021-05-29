import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './slice/index';
// import store from './store/index';
// import CounterProvider from './ContextApi/counterProvider';

ReactDOM.render(
  // Dla Context API
  // <CounterProvider>

  // Dla Reduxa
  // <Provider store={store}>

  // Dla Slice
  <Provider store={store}>
    <App />
  </Provider>,
  // </CounterProvider>,
  // </CounterProvider>,
  document.getElementById('root')
);
