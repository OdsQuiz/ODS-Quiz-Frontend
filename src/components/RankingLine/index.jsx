import React from "react";
import './style.css'

const RankingLine = ({position, name, points}) => {
    return(
        <div className="RankingLine">
             <span className="position">{position}°</span> <span className="name">{name}</span> <span className="points">{points}</span>
        </div>
    )
}

export default RankingLine