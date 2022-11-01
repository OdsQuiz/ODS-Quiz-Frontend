import React from "react";
import HackLogo from '../../assets/hack2030.png'

import { Link } from "react-router-dom";

import './style.css'

const Header = () => {
    return(
        <div className="Header">
            <div className="Header-elements">
                <img src={HackLogo} alt="" />
                <div className="linkContainer">
                    <Link to='/'>Home</Link>
                    <Link to='/ranking'>Ranking</Link>
                </div>
            </div>    
        </div>
    )
}

export default Header