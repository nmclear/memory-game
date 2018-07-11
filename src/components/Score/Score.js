import React from "react";
import "./Score.css";

const Score = () => {

    const currentScore = 2;
    const highScore = 5;
    return (
    
    <h2 className="score">
        Score: {currentScore} | Top Score: {highScore}
    </h2>

)};

export default Score;