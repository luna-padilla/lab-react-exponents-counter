const Counter = ({count, increment, decrement }) => {
  return (
    <div className="">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>
        -
      </button>
      <button className="counter-button" onClick={increment}>
        +
      </button>
      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="row"></div>
    </div>
  );
};

export default Counter;
