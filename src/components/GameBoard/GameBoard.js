import React from "react";
import GameCard from "./../GameCard"
import characters from "./../../characters.json";
import "./gameBoard.css";


// const GameBoard = props => (
//   <div className="board container">
//     <div className="row">
//       {props.children}
//     </div>
//   </div>
// );

class GameBoard extends React.Component {

  state = {
    characters
  };

  render(){
    return(
      <div className="board container">
        <div className="row">
          {this.state.characters.map(character => (
            <GameCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </div>
      </div>
    )
  }
}


export default GameBoard;
