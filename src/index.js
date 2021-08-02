import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import tachyons from "tachyons";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./reducer";

import reportWebVitals from "./reportWebVitals";
import App from "./containers/App.js";
import "./containers/App.css";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const rootReducers = combineReducers({ searchRobots, requestRobots });

const logger = createLogger(); //here logger is a middleware
//creating out pyara store here
const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
); //boom our store is ready to use now
//creating our dulara logger

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
