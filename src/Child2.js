// Child for Counter Reducer

import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";

const Child2 = () => {
  let [state, dispatch] = useReducer(counterReducer, 1);

  return (
    <div>
      <hr/>
      <h2>Increment with Counter Reducer</h2>
      <h3>Value of Reducer state is: {state}</h3>
      <button
        onClick={() => {
          dispatch('INCREAMENT');
        }}
      >
        Increment Reducer
      </button>
    </div>
  );
};

export default Child2;
