import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const MobileMenu = () => {
    return(
        <div className="MobileMenu">
            <Link to='/participar/cadastro'>Junte-se a nós</Link>
            <Link to='/participar/login'>Entrar</Link>
            <Link to='/painel'>Minha Conta</Link>
            <Link to='/'>Home</Link>
            <Link to='/ranking'>Ranking</Link>
            <Link to='/dados'>Iniciativas</Link>
        </div>
    )
}

export default MobileMenu