import React from "react";
import HackLogo from '../../assets/hack2030.png'

import { Link } from "react-router-dom";

import './style.css'

const Header = () => {
    return(
        <div className="Header">
            <div className="Header-elements">
                <Link to="/"><img src='https://cdn.discordapp.com/attachments/1037486089801306113/1037500528587976784/odsquiztext.png' alt="" /></Link>
                <div className="linkContainer">
                    <Link to='/'>Home</Link>
                    <Link to='/ranking'>Ranking</Link>
                    <Link to='/dados'>Iniciativas</Link>
                </div>
            </div>    
        </div>
    )
}

export default Header