import React from "react";
import "./IndividualCard.css";

const IndividualCard = props => (
    <div key={props.id}
    role="img"
    className="click-pic"
    onClick={() => props.pictureClicked(props.id)} >

    <img alt={props.name}
    src={props.img} />
    </div>
);

export default IndividualCard;