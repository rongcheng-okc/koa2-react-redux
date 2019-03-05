import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../redux/reducers'

const store = createStore(reducers);
// import store from "../redux/store";
console.log(store.getState());

import App from "./App";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
