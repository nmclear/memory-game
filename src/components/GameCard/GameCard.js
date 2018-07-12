import React from "react";
import "./gameCard.css";

class GameCard extends React.Component {
  state = {
    guessed: this.props.guessed
    // guessed: false
  }

  handleGuess = () => {

    this.props.checkGuess(this.state.guessed)
    this.setState({ guessed: true })

  }

  render() {
    return (
      <div className="col-sm-3">
        <div key={this.props.id} className="card" onClick={this.handleGuess}>
          <div className="img-container">
            <img alt={this.props.name} src={this.props.image} />
          </div>
        </div>
      </div>
    )
  }
}


export default GameCard;
