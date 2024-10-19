import {Body} from "../component/body";
import {Title} from "../component/title";
import {NavBar} from "../component/navbar";
import '../App.css';

import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate } from 'react-router-dom'

import {AboutUs} from "./about-us";

export function Home(){
    return (
        <div>
            <Title /> 
            <BrowserRouter>
                <nav class="">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-us">About Us</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
      
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/about-us" element = {<AboutUs />} />              
                    <Route path="/*" element={<Navigate to="/"/> }/>       
               </Routes>
      
             </BrowserRouter>
            <Body />
        </div>
    )
    
}