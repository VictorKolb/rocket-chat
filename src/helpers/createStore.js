import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

export default ({ req, reducers }) => {
  const axiosInstance = axios.create({
    baseURL:
      NODE_ENV === "development"
        ? "http://localhost:7000/api"
        : "http://rocketchat.ru/api",
  });
  const middleware = applyMiddleware(thunk.withExtraArgument(axiosInstance));

  return createStore(reducers, middleware);
};
