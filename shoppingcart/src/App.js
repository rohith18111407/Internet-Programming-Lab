import React from "react";
import { useState } from "react";
import Show from './Show';
import Search from './Search';
import Cart from './Cart'
import './App.css';


function App(){
  const [name,setName]=useState();
  const [CartItems,setCartItems]=useState([]);

  const products = [
    { id: 1, pdtname: 'shirt', imgurl: 'https://m.media-amazon.com/images/I/71e9iJgUNQL._AC_UL480_FMwebp_QL65_.jpg', size: 'M', qty: 5, price: 449 },
    { id: 2, pdtname: 'shirt', imgurl: 'https://m.media-amazon.com/images/I/71dInK15s1L._SX569_.jpg', size: 'L', qty: 6, price: 549 },
    { id: 3, pdtname: 'shirt', imgurl: 'https://m.media-amazon.com/images/I/71On2XSPuRL._AC_UL480_FMwebp_QL65_.jpg', size: 'XL', qty: 4, price: 479 },
    { id: 4, pdtname: 'shirt', imgurl: 'https://m.media-amazon.com/images/I/71z2V6TgeoL._AC_UL480_FMwebp_QL65_.jpg', size: 'M', qty: 4, price: 579 },
    { id: 5, pdtname: 'shirt', imgurl: 'https://m.media-amazon.com/images/I/71pN4qrifSL._SY741_.jpg', size: 'L', qty: 5, price: 749 },
    { id: 6, pdtname: 'shirt', imgurl: 'https://m.media-amazon.com/images/I/316r1950n-L._AC_UF480,600_SR480,600_.jpg', size: 'XL', qty: 6, price: 619 },
    { id: 7, pdtname: 'shirt', imgurl: 'https://m.media-amazon.com/images/I/41O5bIj0nBL._AC_UF480,600_SR480,600_.jpg', size: 'M', qty: 4, price: 729 },
    { id: 8, pdtname: 'shirt', imgurl: 'https://m.media-amazon.com/images/I/51IAvw-LKqL._AC_UF480,600_SR480,600_.jpg', size: 'L', qty: 3, price: 649 },
    { id: 9, pdtname: 'Tshirt', imgurl: 'https://m.media-amazon.com/images/I/51LWM0WMBuL._SX679_.jpg', size: 'XL', qty: 4, price: 549 },
    { id: 10, pdtname: 'Tshirt', imgurl: 'https://www.crazypunch.com/wp-content/uploads/2024/01/CPUN1337_P1_NB-800x1067.jpg.webp', size: 'M', qty: 4, price: 649 },
    { id: 11, pdtname: 'Tshirt', imgurl: 'https://www.crazypunch.com/wp-content/uploads/2024/01/CPUN1254_P1_RD-800x1067.jpg.webp', size: 'L', qty: 5, price: 579 },
    { id: 12, pdtname: 'Tshirt', imgurl: 'https://www.crazypunch.com/wp-content/uploads/2024/01/CPUN719_P1_BK-800x1067.jpg', size: 'XL', qty: 6, price: 249 },
    { id: 13, pdtname: 'Tshirt', imgurl: 'https://i.etsystatic.com/40377778/r/il/5cf7a5/5963890529/il_600x600.5963890529_51ta.jpg', size: 'M', qty: 3, price: 149 },
    { id: 14, pdtname: 'Tshirt', imgurl: 'https://m.media-amazon.com/images/I/719Q7QzgsaL._AC_UL480_FMwebp_QL65_.jpg', size: 'L', qty: 4, price: 349 },
    { id: 15, pdtname: 'Tshirt', imgurl: 'https://m.media-amazon.com/images/I/51BBU6jHlOL._AC_UL480_FMwebp_QL65_.jpg', size: 'XL', qty: 5, price: 199 },
    { id: 16, pdtname: 'Tshirt', imgurl: 'https://m.media-amazon.com/images/I/61NSXgF+wkL._AC_UL480_FMwebp_QL65_.jpg', size: 'M', qty: 6, price: 449 },
    { id: 17, pdtname: 'Hoodie', imgurl: 'https://i.etsystatic.com/49904263/r/il/6ee3bc/5875056644/il_794xN.5875056644_rq9y.jpg', size: 'L', qty: 4, price: 449 },
    { id: 18, pdtname: 'Hoodie', imgurl: 'https://m.media-amazon.com/images/I/61gxFg8frGL._AC_UL480_FMwebp_QL65_.jpg', size: 'XL', qty: 4, price: 549 },
    { id: 19, pdtname: 'Hoodie', imgurl: 'https://m.media-amazon.com/images/I/61ylf+ovKHL._AC_UL480_FMwebp_QL65_.jpg', size: 'M', qty: 5, price: 649 },
    { id: 20, pdtname: 'Hoodie', imgurl: 'https://m.media-amazon.com/images/I/61DNXOmaMsL._AC_UL480_FMwebp_QL65_.jpg', size: 'L', qty: 3, price: 799 },
    { id: 21, pdtname: 'kurti', imgurl: 'https://assets0.mirraw.com/images/11500690/12_long_webp.webp?1684141288', size: 'XL', qty: 4, price: 499 },
    { id: 22, pdtname: 'kurti', imgurl: 'https://assets0.mirraw.com/images/7356649/Black_long_unique_khaid_kedia_with_maharano_yoke_and_pants_set_long_webp.webp?1696931980', size: 'M', qty: 3, price: 599 },
    {id: 24,pdtname: 'kurti',imgurl: 'https://assets0.mirraw.com/images/11851860/image_long_webp.webp?1696938686',size: 'L',qty: 4,price: 699},
    {id: 25,pdtname: 'kurti',imgurl: 'https://assets0.mirraw.com/images/12073135/Z-9025_1_long_webp.webp?1701239657',size: 'XL',qty: 5,price: 799}];

    //readdress=read dress
    function readdress(event){
      setName(event.target.value);
    }

    const filteredProducts = products.filter(product => product.pdtname.includes(name));
    //exprodind = existing product information
    function addtocart(product){
      const exprodind=CartItems.findIndex(prod => prod.product.id===product.id);
      if(exprodind!==-1){
        const upcart=[...CartItems];
        upcart[exprodind].quantity ++;
        setCartItems(upcart);
      }
      else{
        setCartItems(prevCartItems=>[...prevCartItems,{product:product,quantity:1}]);
      }
    }

    function updatequantity(index,newquantity){
      const item=CartItems[index];
      if(newquantity>=0 && newquantity<=item.product.qty){
        const upcart=[...CartItems];
        upcart[index].quantity =newquantity;
        setCartItems(upcart);
      }
    }

    return(
      <div>
        <Search searchdress={readdress} />
        <Show filteredProducts={filteredProducts} addtocart={addtocart}/>
        <Cart CartItems={CartItems} updatequantity={updatequantity}/>
      </div>
    )

}

export default App;