import React from "react";
import "./styles.css";

function App({ state, dispatch }) {
  console.log("props", state);
  const counter = state.map(item => {
    return (
      <div key={item.id} className="counter">
        <p className="value">{item.value}</p>

        <div className="buttons">
          <button
            className="common"
            onClick={() => dispatch({ type: "increment", id: item.id })}
          >
            Increment
          </button>
          <button
            className="common"
            onClick={() => dispatch({ type: "decrement", id: item.id })}
          >
            Decrement
          </button>
        </div>
        <button
          className="common cross"
          onClick={() => {
            dispatch({ type: "DeleteCounter", id: item.id });
          }}
        >
          X
        </button>
      </div>
    );
  });
  return (
    <div className="App">
      <button
        className="common"
        onClick={() => {
          dispatch({ type: "AddCounter", id: new Date().getTime() });
        }}
      >
        Add
      </button>
      {counter}
    </div>
  );
}
export default App;
