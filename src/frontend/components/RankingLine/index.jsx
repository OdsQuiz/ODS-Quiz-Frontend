import React from "react";
import './style.css'

const RankingLine = ({position, name, points}) => {
    return(
        <div className="RankingLine">
            <p>{position}° {name} {points} <small>pts</small></p>
        </div>
    )
}

export default RankingLine