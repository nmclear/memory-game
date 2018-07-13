import React from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar"
import Jumbotron from "./components/Jumbotron";
import Title from "./components/Title";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer"
import "./App.css";


class App extends React.Component {
  state = {
    status: 'Click on an image to play!',
    currentScore: 0,
    highScore: 0
  }

  handleCorrect = () => {
    this.setState({
      status: 'Correct Guess!',
      currentScore: this.state.currentScore + 1
    })
    if(this.state.currentScore + 1 > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore + 1 });
    }
  }

  handleGameOver = () => {
    this.setState({status: 'Wrong Guess. Play Again.'})
    this.setState({ currentScore: 0 });

  }

  render(){
    return (
      <Wrapper>
      <NavBar
        status={this.state.status}
        currentScore={this.state.currentScore}
        highScore={this.state.highScore}
      />
      <Jumbotron />
      <Title />
      <GameBoard
        wrong={this.handleGameOver}
        correct={this.handleCorrect}
      />
      <Footer />
    </Wrapper>
    )
  }
}

export default App;
