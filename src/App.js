import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar"
import Jumbotron from "./components/Jumbotron";
import Title from "./components/Title";
import GameBoard from "./components/GameBoard";
import GameCard from "./components/GameCard";
import characters from "./characters.json";
import Footer from "./components/Footer"
import "./App.css";

class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        <NavBar />
        <Jumbotron />
        <Title>Memory Game</Title>
        <GameBoard>
          {this.state.characters.map(character => (
            <GameCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </GameBoard>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
