import React from "react";
import "./Score.css";

// class Score extends React.Component {
//     state = {
//         currentScore: 0,
//         highScore: 0
//     }

//     handleCurrentScore = () => {
//         this.setState({ currentScore: this.state.currentScore + 1 });
//         console.log(this.state.currentScore);
//     }

//     handleHighScore = () => {
//         if(this.state.currentScore > this.state.highScore) {
//             this.setState({ highScore: this.state.currentScore});
//         }
//     }

//     render(){
//         return (
//             <h2 className="score">
//                 Score: {this.state.currentScore} | Top Score: {this.state.highScore}
//             </h2>
//         )
//     }
// }


const Score = props => (
    <h2 className="score">
        Score: {props.currentScore} | Top Score: {props.highScore}
    </h2>
)




export default Score;