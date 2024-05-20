import { useState } from 'react';
import axios from 'axios';
import './App.css';  // Import the CSS file

export default function App() {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [newName, setNewName] = useState("");
    let [newAge, setNewAge] = useState("");
    let [display, setDisplay] = useState("");
    let [users, setUsers] = useState([]);
    let [isAdmin, setIsAdmin] = useState(false);

    function sendData() {
        console.log("Sending data to server");
        axios.post("http://localhost:3001/send", { username: name, userage: age })
            .then(res => (setDisplay(res.data ? `${res.data.username} aged ${res.data.userage} is Present ` : "User Not Found")))
            .catch(err => console.log(err))
    }

    function insertData() {
        console.log("Inserting...");
        axios.post("http://localhost:3001/insert", { username: name, userage: age })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function updateData() {
        console.log("Updating...");
        axios.post("http://localhost:3001/update", { username: name, userage: age, newuserName: newName, newuserAge: newAge })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function deleteData() {
        console.log("Deleting...");
        axios.post("http://localhost:3001/delete", { username: name, userage: age })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function fetchAllUsers() {
        console.log("Fetching all users...");
        axios.get("http://localhost:3001/users")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <center>
                <h1>MVC Architecture</h1>
                <div className="button-group">
                    <button className={isAdmin ? "" : "active"} onClick={() => setIsAdmin(false)}>User</button>
                    <button className={isAdmin ? "active" : ""} onClick={() => setIsAdmin(true)}>Admin</button>
                </div>
                <br /><br />
                {isAdmin ? (
                    <div className="admin-section">
                        <h2>Admin Operations</h2>
                        <input type="text" placeholder="username" onChange={(e) => setName(e.target.value)} />
                        <br />
                        <input type="text" placeholder="userage" onChange={(e) => setAge(e.target.value)} />
                        <br /><br />
                        <button onClick={sendData}>Search</button>
                        <br />
                        <button onClick={insertData}>Insert</button>
                        <br />
                        <button onClick={deleteData}>Delete</button>
                        <br /><br />
                        <input type="text" placeholder="new name" onChange={(e) => setNewName(e.target.value)} />
                        <br />
                        <input type="text" placeholder='new age' onChange={(e) => setNewAge(e.target.value)} />
                        <br /><br />
                        <button onClick={updateData}>Update</button>
                        <br /><br />
                        <button onClick={fetchAllUsers}>Fetch All Users</button>
                        <br /><br />
                        <h2>{display}</h2>
                        <h2>All Users:</h2>
                        <ul>
                            {users.map(user => (
                                <li key={user._id}>{user.username} - {user.userage}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="user-section">
                        <h2>User Operations</h2>
                        <input type="text" placeholder="username" onChange={(e) => setName(e.target.value)} />
                        <br />
                        <input type="text" placeholder="userage" onChange={(e) => setAge(e.target.value)} />
                        <br /><br />
                        <button onClick={sendData}>Search</button>
                        <br /><br />
                        <h2>{display}</h2>
                    </div>
                )}
            </center>
        </div>
    )
}
