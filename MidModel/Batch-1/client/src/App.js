import { useState } from "react";
import axios from "axios";

export default function App() {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [newName, setNewName] = useState("");
  let [newAge, setNewAge] = useState("");
  let [display, setDisplay] = useState("");

  function sendData() {
    console.log("Sending data...");
    axios.post("http://localhost:3002/send", { username: name, userage: age })
      .then(res => setDisplay(res.data ? `${res.data.username} aged ${res.data.userage} is Present` : "User Not Found"))
      .catch(err => console.log(err));
  }

  function insertData() {
    console.log("Inserting data...");
    axios.post("http://localhost:3002/insert", { username: name, userage: age })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function deleteData() {
    console.log("Deleting Data...");
    axios.post("http://localhost:3002/delete", { username: name, userage: age })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function updateData() {
    console.log("Updating Data...");
    axios.post("http://localhost:3002/update", { username: name, userage: age, newUsername: newName, newUserage: newAge })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <center>
        <h1>MVC ARCHITECTURE PRACTICE</h1>
        <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        <br /><br />
        <button onClick={sendData}>Search</button>
        <br /><br />
        <button onClick={insertData}>Insert</button>
        <br /><br />
        <button onClick={deleteData}>Delete</button>
        <br /><br />
        <input type="text" placeholder="New Username" onChange={(e) => setNewName(e.target.value)} />
        <input type="number" placeholder="New Age" onChange={(e) => setNewAge(e.target.value)} />
        <button onClick={updateData}>Update</button>
        <br /><br />
        <h2>{display}</h2>
      </center>
    </div>
  );
}
