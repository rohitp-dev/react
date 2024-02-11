import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    counter = counter + 1;
    if (counter < 20)
    {
      setCounter(counter);
    }
  };

  const decValue = () => {
    counter = counter - 1;
    if (counter > 0)
    {
      setCounter(counter);
    }
  };

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={addValue}>Increase Counter</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease Counter</button>
    </>
  );

  
}

export default App;
