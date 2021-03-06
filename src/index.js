import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = () => {};

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
    , document.getElementById('root'));
