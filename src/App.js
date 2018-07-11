import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import GameBoard from "./components/GameBoard";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  removeCharacter = id => {
    // Filter this.state.characters for characters with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.characters equal to the new characters array
    this.setState({ characters });
  };

  // Map over this.state.characters and render a GameCard component for each character object
  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        <GameBoard>
          {this.state.characters.map(character => (
            <GameCard
              removeCharacter={this.removeCharacter}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </GameBoard>
      </Wrapper>
    );
  }
}

export default App;
