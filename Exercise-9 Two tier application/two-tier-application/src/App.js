import React, { useState, useEffect } from "react";
import "./App.css";
import Note from "./Note";

function App() {
  const [message, setMessage] = useState([]);

  useEffect(function effect() {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  console.log(message);

  return (
    <div className="App">
      <div className="Header">
        <h1>Student Data</h1>
      </div>
      <div className="Note--master">
        {message.map((msg, i) => {
          return (
            <div>
            <Note
              name={msg.name}
              roll={msg.rollno}
              email={msg.email}
              phone={msg.phone}
              key={i}
            />
            <br/><br/>
            </div>
          );
        })}
      </div>
    </div>
  );}
export default App;
