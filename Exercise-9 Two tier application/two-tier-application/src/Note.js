import React from "react";
import "./App.css"


export default function Note({name,roll,phone,email}){
   return(
       <div className="Note">
           <p>{name}</p>
           <p>{roll}</p>
           <p>{phone}</p> 
           <p>{email}</p>        
       </div>
   )
}
