import React from "react";
import "./Status.css";

// const Status = (props) => {

//     let guess = true;

//     if(guess){
//         return <h2>{props.status}</h2>
//     } else {
//         return <h2>Incorrect Guess. Play Again!</h2>
//     }
// };

const Status = props => (
    <h2>{props.status}</h2>
)


export default Status;