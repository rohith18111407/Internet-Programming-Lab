// App.js
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';

function App() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  function verifyUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    axios.post("http://127.0.0.1:3001/send", { username: user, password: pass, score:0 })
      .then(res => {
        const response = res.data?.username || "absent";
        if (response !== "absent" && response !== "sanjhay") {          
          navigate('/Quiz',{ state: {name:response} });
        } else if(response === "sanjhay"){
          navigate("/Admin");
        }
        console.log(response);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className='box'>
        <div className='admin--login'>
          <h1 id='admin--welcome'>Welcome To the Ultimate Quiz Challenge </h1>
          <div className='admin--username'>
            <label htmlFor="username" id='label--username'><b>Username: </b></label> 
            <input type='text' id='username' placeholder='Enter Username'></input>
          </div>
          <div className='admin--password'>
            <label htmlFor="password" id='label--password'><b>Password:</b> </label>
            <input type='password' id='password' placeholder='Enter Password'></input>
          </div>
          <button id='login--button' onClick={verifyUser}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;