import React from "react";
import ReactDom from "react-dom";

import 'weui';
import 'react-weui/build/packages/react-weui.css';
import '../css/common';
import App from "./App";
import store from '../redux/store'

import { Provider } from 'react-redux'

console.log(store.getState());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
