import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./assets/styles/index.scss";
import * as serviceWorker from "./serviceWorker";
import Routes from "./containers/Routes";
import configureStore from "./redux";

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
