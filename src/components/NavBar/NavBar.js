import React from "react";
import "./NavBar.css";
import "../Score"
import Score from "../Score";

const NavBar = () => (

  

    <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Memory Game</span>
        <Score />
    </nav>
);

export default NavBar;