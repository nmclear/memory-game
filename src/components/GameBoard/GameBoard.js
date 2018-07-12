import React from "react";
import GameCard from "./../GameCard"
import characters from "./../../characters.json";
import "./gameBoard.css";


class GameBoard extends React.Component {

  state = {
    characters,
    default: false
  };

  checkGuess = guessed => {
    if(guessed){
      console.log('gameOver');
      this.props.wrong();
      // this.setState({ default: false});
    } else {
      console.log('correct')
      this.props.correct();
    }
  }




  render(){
    return(
      <div className="board container">
        <div className="row">
          {this.state.characters.map(character => (
            <GameCard
              guessed= {this.state.default}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              checkGuess={this.checkGuess}
            />
          ))}
        </div>
      </div>
    )
  }
}


export default GameBoard;
