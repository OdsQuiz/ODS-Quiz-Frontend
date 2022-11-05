import React, { useState } from "react";
import HackLogo from '../../assets/hack2030.png'

import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";
import ToogleMenuButton from "../ToogleMenuButton";

import './style.css'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return(
        <div className="Header">
            <div className="Header-elements">
                <Link to="/" className="ImageContainer"><img src='https://cdn.discordapp.com/attachments/1037486089801306113/1037500528587976784/odsquiztext.png' alt="" /></Link>
                <div className="linkContainer">
                    <Link to='/'>Home</Link>
                    <Link to='/ranking'>Termômetro</Link>
                    <Link to='/dados'>Iniciativas</Link>
                </div>
                <ToogleMenuButton status={toggleMenu} toggle={setToggleMenu}/>
                
                
                {toggleMenu ?
                    <MobileMenu status={toggleMenu} toggle={setToggleMenu}/>
                    :
                    null
                }

            </div>    
        </div>
    )
}

export default Header