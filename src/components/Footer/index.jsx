import React from "react";

import serraLogo from '../../assets/serraLogo.svg'

import './style.css'

const Footer = () => {
    return(
        <div className="Footer">

            <div className="FooterLogo-Span">
                <span>Powered by:</span>
                <img src={serraLogo} alt="" />
            </div>
            
            <div className="Line">
                <p></p>
            </div>

            <div className="Pall">
                <div className="FooterP1">
                    <p>© Serra HackClub 2022</p>
                </div>   
                <div className="FooterP2">
                    <p>Todos os direitos reservados</p>
                </div> 
            </div>
               
            
        </div>
    )
}

export default Footer