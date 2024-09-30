import React from "react";
import Button from "./Button";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.course} className="card-image"/>
            <div className="card-content">
                <h1 className="card-title">{props.courseNum}</h1>
                <h2 className="card-subtitle">{props.courseName}</h2>
            </div>
            <div className="card-button">
                <Button link={props.link} />
            </div>
        </div>
    );
}

export default Card;
