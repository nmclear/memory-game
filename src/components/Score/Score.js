import React from "react";
import "./Score.css";

const Score = props => (
    <h2 className="score">Score: {props.currentScore} | Top Score: {props.highScore}</h2>
)

export default Score;