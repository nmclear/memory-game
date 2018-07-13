import React from "react";
import "./NavBar.css";
import Score from "../Score";
import Status from "../Status"

const NavBar = props => (
    <nav className="nav navbar navbar-light bg-light">
        <div className="container">
            <div className="row">
                {/* <div className="col-sm-4">
                    <h2 className="navbar-brand mb-0 h1">Memory Game</h2>
                </div> */}
                <div className="col-sm-7 text-left">
                    <Status status={props.status}/>
                </div>
                <div className="col-sm-5 text-right">
                    <Score currentScore={props.currentScore} highScore={props.highScore}/>
                </div>
            </div>
        </div>
    </nav>
)

export default NavBar;