import React from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import Routes from "helpers/routes";
import reducers from "helpers/reducers";

const axiosInstance = axios.create({
  baseURL: "/api",
});

const logger = createLogger({
  collapsed: true,
});

const middleware = applyMiddleware(
  thunk.withExtraArgument(axiosInstance),
  logger,
);

const store = createStore(reducers, window.INITIAL_STATE, middleware);

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes())}</BrowserRouter>
  </Provider>,
  document.querySelector("#root"),
);
