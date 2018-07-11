import React from "react";
import "./Status.css";

const Status = () => {

    let guess = true;

    if(guess){
        return <h2>Correct Guess!</h2>
    } else {
        return <h2>Incorrect Guess. Play Again!</h2>
    }

 
};

export default Status;