import { useState } from 'react';
import axios from 'axios';
import "./App.css"

export default function App(){
     let [name,setName] = useState("");
     let [display,setDisplay] = useState("");
     
     function sendData(){
          console.log("Sending Data....");
          axios.post("http://127.0.0.1:3001/send",{username:name})
          .then(res => (setDisplay(res.data?.username || "Not Found")))
          .catch(err => console.log(err))
     }

     function insertData(){
          console.log("Inserting Data....");
          axios.post("http://127.0.0.1:3001/insert",{username:name})
          .then(res => console.log(res))
          .catch(err => console.log(err))
     }

     function deleteData(){
          console.log("Deleting Data....");
          axios.post("http://127.0.0.1:3001/delete",{username:name})
          .then(res => console.log(res))
          .catch(err => console.log(err))
     }

     return(
          <div className='App'> 
               <h1>MVC Architecture</h1>
               <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} style={{display:"block",margin:"auto"}}></input>
               <button onClick={sendData} style={{margin:"15px"}}>Search</button>
               <button onClick={insertData} style={{margin:"15px"}} >Insert</button>
               <button onClick={deleteData} style={{margin:"15px"}} >Delete</button>
               <h2>{display !== "Not Found" ? display + " is Present " : "User not found"}</h2>
          </div>
     )

}