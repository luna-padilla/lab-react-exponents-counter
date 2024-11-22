function Exponent({ num, exponent }) {
  const aux = [];
  for (let i = 0; i < exponent; i++) {
    aux.push(num);
  }
  const operation = aux.join(" * ");
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num} <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {operation} =<span className="total"> {Math.pow(num, exponent)}</span>
      </p>
    </div>
  );
}
export default Exponent;
