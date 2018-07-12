import React, { Component } from "react";
import "./Score.css";

// const Score = () => {

//     const currentScore = 2;
//     const highScore = 5;
//     return (
    
//     <h2 className="score">
//         Score: {currentScore} | Top Score: {highScore}
//     </h2>

// )};

class Score extends Component {
    state = {
        currentScore: 0,
        highScore: 0
    }

    handleCurrentScore = () => {
        this.setState({ currentScore: this.state.currentScore + 1 });
      };

    handleHighScore = () => {
        if(this.state.currentScore > this.state.highScore) {
            this.setState({ highScore: this.state.currentScore});
        }
    }

    render(){
        return (
            <h2 className="score">
                Score: {this.state.currentScore} | Top Score: {this.state.highScore}
            </h2>
        )
    }
}

export default Score;