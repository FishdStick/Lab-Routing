import "../css/login.css"
import React, { useState } from 'react';

export function LoginForm({onLoginSubmit}){
  const [username, setUname] = useState('');
  const [password, setPassword] = useState('');
  
  const UsersData = [
      {
        username: 'admin1',
        password: 'test'
      },
      {
        username:'admin2',
        password:'test'
      }
    ];

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const user = UsersData.find(
      (user) => user.username === username && user.password === password
    );
        
    if (!username || !password) {
      alert('Please Enter username or password!');
      return;
    } 
    
    if (user){
      onLoginSubmit();
    } else {
      alert('Incorrect username or password');
    }
  };

    return (
      <div id="id01" class="modal">
        <span onclick="document.getElementById('id01').style.display='none'"
        class="close" title="Close Modal">&times;</span>
        <form class="modal-content animate" onSubmit={handleLoginSubmit}>
        <div class="container">
          <label>Username </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
    );
}