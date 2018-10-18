import React from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import { applyMiddleware, createStore, compose } from "redux";
import Routes from "helpers/routes";
import reducers from "helpers/reducers";

const axiosInstance = axios.create({
  baseURL: "/api",
});

const middleware = [
  thunk.withExtraArgument(axiosInstance),
  NODE_ENV === "development" && createLogger({ collapsed: true }),
].filter(Boolean);

const store = compose(applyMiddleware(...middleware))(createStore)(
  reducers,
  window.INITIAL_STATE,
);

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes())}</BrowserRouter>
  </Provider>,
  document.querySelector("#root"),
);
