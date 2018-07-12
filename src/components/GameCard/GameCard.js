import React from "react";
import "./gameCard.css";

class GameCard extends React.Component {
  state = {
    guess: false
  }

  handleGuess = () => {
    if(this.state.guess){
      console.log('Game Over');
    } else {
      this.setState({ guess: true })
    }
  }

  render() {
    return (
      <div className="col-sm-3">
        <div key={this.props.key} className="card" onClick={this.handleGuess}>
          <div className="img-container">
            <img alt={this.props.name} src={this.props.image} />
          </div>
        </div>
      </div>
    )
  }
}


export default GameCard;
