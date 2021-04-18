// Class 02
// Create Context Hooks
// Context API
// Reducer

import "./App.css";
import React, {useState} from "react";
import Parent from "./Parent";
import counterContext from "./CounterContext";
import Child from "./Child";

function App() {

  let countState = useState(0)   // [count, setCount]
  return (

    // Accessing data directly from grand child Child.js without parent
    <counterContext.Provider value={countState}>
      <div>
        <Parent name="Hamza" />
      </div>
     </counterContext.Provider>
  );
}

export default App;
