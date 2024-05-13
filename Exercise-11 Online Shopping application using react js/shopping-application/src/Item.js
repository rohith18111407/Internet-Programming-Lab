export default function Item({ name, quantity, price, result, setResult, image }) {
  function addCart() {
    const updatedResult = [...result, { name, quantity, price }];
    console.log(result);
    setResult(updatedResult);
  }

  return (
    <div className="item">
      <img
        src={image} // Provide image path directly
        alt="Unavailable"
        className="image"
      />
      <p>{name}</p>
      <p>Available: {quantity} pieces</p>
      <p>₹{price}</p>
      <button onClick={() => addCart()}>Add to Cart</button>
    </div>
  );
}
