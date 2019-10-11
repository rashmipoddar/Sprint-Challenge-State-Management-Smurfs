import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import combineReducers from './reducers';
import "./index.css";
import App from "./components/App";

const store = createStore(combineReducers, applyMiddleware(thunk, logger));
// console.log('The redux store is ', store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
