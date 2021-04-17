// Class 01
// Basic React concept like useState, props and click events

import React, { useState } from "react";
import "./App.css";
import Name from "./name";
import { Message } from "./Message";
// {Message} because message is not default export

function App() {
  let [count, setCount] = useState(0);
  // it is equal to let count=0;

  let [isMorning, setMorning] = useState(false);

  return (
    <div className="App">
      {/* print name using name.js */}
      <Name name="Ameer Hamza" age="22" />
      <Name name="Asad" age="20" />
      {/* print name using name.js */}
      {/* Counter */}
      <h3>Value of counter variable: {count}</h3>
      <button
        onClick={() => {
          // alert("Button pressed");

          // update value by clicking button
          // setCount(10);

          // increment value of count
          // setCount(count+1)
          // or
          setCount(++count);
        }}
      >
        Counter
      </button>
      <br />
      <br />
      <hr /> <br />
      <div className={isMorning ? "dayLight" : "nightLight"}>
        <h3>Time is: {isMorning ? "Morning" : "Night"}</h3>
        {/* equals to
        if (morning=true){
          print "Morning";
        }
        else{print "Night"} */}
      </div>
      <button
        onClick={() => {
          setMorning(!isMorning);
        }}
      >
        Click Here to Update Time
      </button>
      <br />
      <br />
      <hr />
      <br />
      {/* use Message.js */}
      <Message msg="How are you ?" />
    </div>
  );
}

export default App;
