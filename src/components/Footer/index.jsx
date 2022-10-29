import React from "react";

import serraLogo from '../../assets/serraLogo.svg'

import './style.css'

const Footer = () => {
    return(
        <div className="Footer">
            <p>Powered by:</p>
            <img src={serraLogo} alt="" />
        </div>
    )
}

export default Footer