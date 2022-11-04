import React from "react";

import { Link } from "react-router-dom";

import './style.css'

import HackLogo from '../../assets/hack2030.png'
import serraLogo from '../../assets/serraLogo.svg'

const PreHeader = () => {
    return(
        <div className="PreHeader-All">
            <div className="PreHeader-elements">
                <div className="Links-cont">
                    <Link to='/participar/cadastro'>Junte-se a nós</Link>
                    {/* <hr /> */}
                    <Link to='/participar/login'>Entrar</Link>
                    {/* <hr /> */}
                    <Link to='/painel'>Minha Conta</Link>
                </div>  
            </div>
            
        </div>
    )
}

export default PreHeader