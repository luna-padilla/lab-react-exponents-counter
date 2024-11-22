import { useState } from "react";
import ExponentTwo from "./ExponentTwo";
import ExponentThree from "./ExponentThree";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
           <ExponentTwo count={count}/>
          <ExponentThree count={count}/>
      </div>
    
    </div>
  );
};

export default Counter;
