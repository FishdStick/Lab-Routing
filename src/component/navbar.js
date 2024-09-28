import "../css/navbar.css"
import React from 'react';

export function NavBar(){
    return (
    <div>
        <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </div>
    )
}