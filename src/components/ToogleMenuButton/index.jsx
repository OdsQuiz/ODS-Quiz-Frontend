import React from "react";
import './style.css'

const ToogleMenuButton = ({ status, toggle }) => {
    return(
        <div className="ToogleMenuButton" onClick={() => toggle(!status)}>
            <hr className="First" />
            <hr className="Mid" />
            <hr className="Last" />
        </div>
    )
}

export default ToogleMenuButton