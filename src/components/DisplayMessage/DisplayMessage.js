import React from "react";
import Message from "../Message";
import GameOver from "../GameOver/GameOver";

const displayMessage = props => {
    let currentMessage = ""

    switch (props.display) {
        case "defaultMessage":
            return <Message />

        case "won":
            currentMessage = "A great memory you have!"
            return <GameOver src="/images/characters/victory.jpg" header="You won!" msg={currentMessage} />

        case "lost":
            currentMessage = "A lack of memory you have"
            return <GameOver src="/images/characters/defeat.jpg" header="Not this time" msg={currentMessage} />

        default:
            return <Message />
    }
};

export default displayMessage;