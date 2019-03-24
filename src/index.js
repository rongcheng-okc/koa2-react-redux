import React from "react";
import ReactDom from "react-dom";

import 'weui';
import 'react-weui/build/packages/react-weui.css';
import '../css/common'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../redux/reducers'

const store = createStore(reducers, applyMiddleware(thunk));
console.log(store.getState());

import App from "./App";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
