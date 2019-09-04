import React from "react";
import "./GameOver.css";

const GameOver = (props) => (

    <div id="results-div" className="jumbotron text-center">

        <h1 className="display-4">{props.header}</h1>
        <p className="lead">{props.msg}</p>
        <img src={props.src} alt="GameOver" />

    </div>
)

export default GameOver;