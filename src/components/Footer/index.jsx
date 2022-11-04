import React from "react";

import serraLogo from '../../assets/serraLogo.svg'

import './style.css'

const Footer = () => {
    return(
        <div className="Footer">

            
            


            <div className="Pall">
                <div className="FooterP1">
                    <p>© Serra HackClub 2022</p>
                </div>   
                <div>
                    <a target='_blank' href="https://www.instagram.com/serrahackclub"><img src={serraLogo} alt="" /></a>
                </div>
                <div className="FooterP2">
                    <p>Todos os direitos reservados</p>
                </div> 
            </div>
               
            
        </div>
    )
}

export default Footer