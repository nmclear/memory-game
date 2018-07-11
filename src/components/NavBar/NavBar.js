import React from "react";
import "./NavBar.css";
import Score from "../Score";
import Status from "../Status"

const NavBar = () => (

    <nav className="nav navbar navbar-light bg-light">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h2 className="navbar-brand mb-0 h1">Memory Game</h2>
                </div>
                <div className="col-sm-4">
                    <Status />
                </div>
                <div className="col-sm-4">
                    <Score />
                </div>
            </div>
        </div>
    </nav>
);

export default NavBar;