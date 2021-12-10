import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import { Provider } from "mobx-react";
import  {calculatorStoreFunction}  from "./stores";

const stores = {
    calculatorStoreFunction 
};

const appContainer = document.querySelector("#root");
ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  appContainer
);
