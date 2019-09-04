import React from "react";
import "./Header.css";

const Header = props => (
<div id="header" className="bg-success text-light">
    <h3 className="display-4 text-center">World Of Warcraft Memory Game:</h3>
        <div className="row">
            <div className="col col-md-3 col-sm-12">
                <label>Your Score: <span>{props.clicks}</span></label>
            </div>
            <div className="col col-md-3 col-sm-12">
                <label>Your High Score: <span>{props.highScore}</span></label>
            </div>
            <div className="col col-md-3 col-sm-12">
                <label>Your Wins: <span>{props.wins}</span></label>
            </div>
            <div className="col col-md-3 col-sm-12">
                <label>Your Losses: <span>{props.losses}</span></label>
            </div>
        </div>

    </div>

);

export default Header;