import React from "react";
import "./gameBoard.css";


const GameBoard = props => (
  <div className="board container">
    <div className="row">
      {props.children}
    </div>
  </div>
);

export default GameBoard;
