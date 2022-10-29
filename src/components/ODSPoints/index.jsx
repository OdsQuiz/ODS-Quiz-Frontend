import React from "react";
import './style.css'

const ODSPoints = ({image, points}) => {
    return(
        <div className="ODSPoints">
            <img src={image} alt="" />
            <p>{points} pts</p>
        </div>
    )
}

export default ODSPoints