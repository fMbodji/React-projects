import React from "react";

const Button = (props) => {

    return (

        <a href={props.link} target="_blank" rel="noopener noreferrer" >
            <button>View Ressource</button>
        </a>

    )

}

export default Button;