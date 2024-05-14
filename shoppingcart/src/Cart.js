import React from "react";
import { useState } from "react";

function Cart({CartItems,updatequantity}){
  return(
    <div>
      <h1>Cart</h1>
      {CartItems.map((item,index) => (
        <div>
          <img src={item.product.imgurl} className="cart-img"/>
          <p>size: {item.product.size}</p>
          <p>price: {item.product.price}</p>
          <p>qty: {item.quantity}</p>
          <button onClick={()=>updatequantity(index,item.quantity -1)}>-</button>
          <button onClick={()=>updatequantity(index,item.quantity +1)}>+</button>
        </div>
      ))}
    </div>
  )
}

export default Cart;