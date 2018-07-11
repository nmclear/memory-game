import React from "react";
import "./gameCard.css";

const GameCard = props => (
  <div className="col-sm-3">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default GameCard;
