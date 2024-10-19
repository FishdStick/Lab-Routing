import './App.css';
import {LoginForm} from "./component/login-form";
import { NavBar } from './component/navbar';
import { useState } from 'react';
// import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate } from 'react-router-dom'

import {Home} from "./pages/home";
import {AboutUs} from "./pages/about-us";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () =>{
    setIsLoggedIn(true);
  }

  // change this to routing
  // display home page
  return (
    <div className="App">
        {isLoggedIn ? Home()
            //   <BrowserRouter>
            //   <nav class="">
            //     <NavLink to="/">Home</NavLink>
            //     <NavLink to="/about-us">About Us</NavLink>
            //     <NavLink to="/contact">Contact</NavLink>
            //   </nav>
      
            //   <Routes>
            //     <Route path="/" element = {<Home />} />
            //     <Route path="/about-us" element = {<AboutUs />} />              
            //     <Route path="/*" element={<Navigate to="/"/> }/>       
            //   </Routes>
      
            // </BrowserRouter>
            
        : <LoginForm onLoginSubmit={handleLogin}  />}
    </div>
  );
}

export default App;
