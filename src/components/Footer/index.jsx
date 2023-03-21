import React from "react";
import { Link } from "react-router-dom";

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
                    <a target='_blank' href="https://www.instagram.com/serrahackclub">
                        <img src={serraLogo} alt="" />
                    </a>
                </div>
                <div className="FooterP2">
                    <p>Todos os direitos reservados</p>
                </div> 
            </div>
            <p className="terms-privacy">
                <Link to="/termos">Termos de serviço</Link> e <Link to="/privacidade">política de privacidade</Link>
            </p>
            
               
            
        </div>
    )
}

export default Footer