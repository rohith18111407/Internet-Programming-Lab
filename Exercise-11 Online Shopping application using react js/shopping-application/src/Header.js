import "./App.css"


export default function Header({ onItemChange }){   
   return(
       <div>
           <h1>Shop App welcomes You!</h1>
           <input type="text" id="searchInput" onChange={(e) => {                 
               onItemChange(e.target.value);
           }}></input>
       </div>
   )
}
