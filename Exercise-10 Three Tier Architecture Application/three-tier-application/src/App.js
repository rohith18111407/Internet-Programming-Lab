import {useEffect, useState} from 'react';
import axios from 'axios';
function App() {
  const [users, setUsers] = useState([]);
  console.log(users)
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then((users)=>{
        setUsers(users.data)
      }).catch(err=>{
        console.log(err)
      })
  },[]);
  return (
    <div>
      <h1>MVC architecture as client and server model</h1>
      {users.map(user => (
        <div key={user._id}>
          <h1>{user.name}</h1>
          <h1>{user.rno}</h1>
        </div>
      ))}
    </div>
  );
}
export default App;