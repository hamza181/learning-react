import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(20);

  const onClick = () => {
    setAge(age + 1);
  };
  return (
    <div className="">
      <ClassComponent age={age} />
      <button onClick={onClick}>Change Age</button>
    </div>
  );
}

export default App;
