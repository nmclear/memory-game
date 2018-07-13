import React from "react";
import GameCard from "./../GameCard"
import characters from "./../../characters.json";
import "./gameBoard.css";


class GameBoard extends React.Component {

  state = {
    characters,
    // default: false,
    guessArr: []
  };

 
  shuffleArr = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleGuess = guess => {

    const arr = this.state.guessArr
  
      for(let i = 0; i < arr.length; i++){
        if(arr[i] === guess){
          this.props.wrong();
          this.setState({guessArr: []})
          break;
        } else {
          this.props.correct();
          this.setState(prevState => ({ guessArr: [...prevState.guessArr, guess] }))
          this.setState({characters: this.shuffleArr(this.state.characters)})
        }
      }

      if(arr.length === 0){
        this.props.correct();
        this.setState(prevState => ({ guessArr: [...prevState.guessArr, guess] }))
        this.setState({characters: this.shuffleArr(this.state.characters)})
      }
    
  }


  render(){
    return(
      <div className="board container">
        <div className="row">
          {this.state.characters.map(character => (
            <GameCard
              // guessed={this.state.default}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              // checkGuess={this.checkGuess}
              handleGuess={this.handleGuess}
            />
          ))}
        </div>
      </div>
    )
  }
}


export default GameBoard;
