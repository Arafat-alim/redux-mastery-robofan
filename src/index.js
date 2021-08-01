import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import tachyons from "tachyons";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { searchRobots } from "./reducer";

import reportWebVitals from "./reportWebVitals";
import App from "./containers/App.js";
import "./containers/App.css";

//creating out pyara store here
const store = createStore(searchRobots); //boom our store is ready to use now

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
