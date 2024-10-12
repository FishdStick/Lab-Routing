import logo from './logo.svg';
import './App.css';
import {Body} from "./component/body";
import {Title} from "./component/title";
import {NavBar} from "./component/navbar";
import {LoginForm} from "./component/login-form";
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () =>{
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
        {isLoggedIn ? <><Title /> <NavBar /> <Body /></> : <LoginForm onLoginSubmit={handleLogin}  />}
    </div>
  );
}

export default App;
