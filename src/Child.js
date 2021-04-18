// Child for Counter Context

import React, { useContext } from "react";
import counterContext from "./CounterContext";

const Child = (props) => {
  let counterValue = useContext(counterContext);
  console.log(counterValue);
  return (
    <div>
      <h2>This first Child</h2>
      <h2>This is {props.name}</h2>
<hr/>
    <h2>Incremment with Counter Context API</h2>
      <h4>Counter value is: {counterValue[0]}</h4>

      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        Increment Context
      </button>
    </div>
  );
};

export default Child;
