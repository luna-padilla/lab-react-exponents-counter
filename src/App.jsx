import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);
  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} decrement={decrement} increment={increment} />
      <Exponent count={count} exponent={2} num={count} />
      <Exponent count={count} exponent={3} num={count} />
      <Exponent count={count} exponent={4} num={count} />
      <Exponent count={count} exponent={5} num={count} />
      <Exponent count={count} exponent={6} num={count} />
    </div>
  );
}

export default App;
