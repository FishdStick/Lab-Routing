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
            <Body />
        </div>
    )
    
}