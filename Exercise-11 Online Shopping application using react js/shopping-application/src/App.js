import "./App.css";
import Header from "./Header";
import { useState } from "react";
import Item from "./Item";

const data = [
  {
    item: "Woodland Shoe",
    quantity: 1,
    price: 3999,
    image: "https://5.imimg.com/data5/GC/RA/OP/SELLER-92764478/mens-woodland-shoes.jpg"
  },
  {
    item: "Adidas Shoe",
    quantity: 2,
    price: 2999,
    image: "https://authentic-shoes.com/wp-content/uploads/2023/04/fy4976_b2b5f917c961485fbf74b55c9f431a32.png"
  },
  {
    item: "Puma Shoe",
    quantity: 3,
    price: 2499,
    image: "https://5.imimg.com/data5/ANDROID/Default/2023/12/366916351/TD/SL/OS/19051907/product-jpeg.jpg"
  },
];

function App() {
  const [item, setItem] = useState("");
  const filteredResult =
    item === ""
      ? data
      : data.filter(function (ele) {
          return ele.item === item;
        });

  const [result, setResult] = useState([]);

  const incrementQuantity = (index) => {
    const updatedResult = [...result];
    updatedResult[index].quantity++;
    setResult(updatedResult);
  };

  const decrementQuantity = (index) => {
    const updatedResult = [...result];
    if (updatedResult[index].quantity > 1) {
      updatedResult[index].quantity--;
      setResult(updatedResult);
    }
  };

  return (
    <div className="App">
      <div>
        <Header onItemChange={setItem} />
      </div>
      <div>
        <h1>Available Products</h1>
        <div className="mainFrame">
          {filteredResult.map((ele) => {
            return (
              <Item
                key={ele.item}
                name={ele.item}
                price={ele.price}
                quantity={ele.quantity}
                setResult={setResult}
                result={result}
                image ={ele.image}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1>Your Cart</h1>
        <table id="cartTable" border="1">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {result.map((ele, index) => {
              return (
                <tr key={ele.name}>
                  <td>{ele.name}</td>
                  <td id="button--quantity">
                    <button onClick={() => decrementQuantity(index)}>-</button>
                    <p>{ele.quantity}</p>
                    <button onClick={() => incrementQuantity(index)}>+</button>
                  </td>
                  <td>{ele.price * ele.quantity}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <th>Total</th>
            <th>
              {result.reduce((acc, ele) => {
                return acc + ele.quantity;
              }, 0)}
            </th>
            <th>
              {result.reduce((acc, ele) => {
                return acc + ele.quantity * ele.price;
              }, 0)}
            </th>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
