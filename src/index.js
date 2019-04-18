import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";

import "./styles.css";
function Addcounters(state = [], action) {
  if (action.type === "AddCounter") {
    return [...state, { id: action.id, value: counter(undefined, action) }];
  }
  if (action.type === "increment") {
    return state.map(item => {
      if (item.id !== action.id) {
        return item;
      } else {
        return { id: item.id, value: counter(item.value, action) };
      }
    });
  }
  if (action.type === "decrement") {
    return state.map(item => {
      if (item.id !== action.id) {
        return item;
      } else {
        return { id: item.id, value: counter(item.value, action) };
      }
    });
  }
  if (action.type === "DeleteCounter") {
    return state.filter(item => item.id !== action.id);
  } else {
    return state;
  }
}
function counter(state = 0, action) {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  } else {
    return state;
  }
}
const store = createStore(Addcounters);

function disPatch(action) {
  console.log("action dispatched", action);
  store.dispatch(action);
}

const render = () => {
  const rootElement = document.getElementById("root");
  return ReactDOM.render(
    <App state={store.getState()} dispatch={disPatch} />,
    rootElement
  );
};
render();
store.subscribe(render);
