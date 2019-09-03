import React from "react";
import Card from "../IndividualCard";
import "./CharacterBoard.css"

const CharacterBoard = props =>

    (
        <div id="CharacterBoard">{
            props.Characters.map(char => 
            <Card key={char.id}
             name={char.name} 
             img={process.env.PUBLIC_URL + char.image} 
             handleClick={props.handleClick} 
             id={char.id} />)}
        </div>

    )

export default CharacterBoard;    