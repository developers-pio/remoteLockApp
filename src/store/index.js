import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const middleWare = [];

middleWare.push(thunk);

const store = createStore(
  rootReducers,
  {},
  compose(applyMiddleware(...middleWare))
);

export default store;
