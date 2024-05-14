import React from 'react';
import {useState} from 'react';

function Show({filteredProducts,addtocart}){
  return(
    <div className="p-grid">
      {filteredProducts.map(product=>(
        <div className='p-card'>
          <img src={product.imgurl} alt="" className='p-image'/>
          <div>
            <p>size: {product.size}</p>
            <p>price: {product.price}</p>
            <p>qty: {product.qty}</p>
          </div>
          <button onClick={()=>addtocart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Show;