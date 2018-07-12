import React from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar"
import Jumbotron from "./components/Jumbotron";
import Title from "./components/Title";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer"
import "./App.css";


const App = () => (

  <Wrapper>
    <NavBar />
    <Jumbotron />
    <Title>Memory Game</Title>
    <GameBoard />>
    <Footer />
  </Wrapper>

)

export default App;
