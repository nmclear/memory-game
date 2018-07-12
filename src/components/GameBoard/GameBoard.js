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
      this.props.wrong();
    } else {
      this.props.correct();
      
      this.setState({characters: this.shuffleArr(this.state.characters)})
    }
  }

  shuffleArr = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
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
