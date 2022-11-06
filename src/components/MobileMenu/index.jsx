import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const MobileMenu = ({ status, toggle }) => {
    return(
        <div className="MobileMenu">
            <Link to='/' onClick={() => toggle(!status)}>Home</Link>
            <Link to='/ranking' onClick={() => toggle(!status)}>Termômetro</Link>
            <Link to='/dados' onClick={() => toggle(!status)}>Iniciativas</Link>
            {/* <Link to='/participar/cadastro' onClick={() => toggle(!status)}>Junte-se a nós</Link> */}
            <Link to='/participar/login' onClick={() => toggle(!status)}>Entrar</Link>
            <Link to='/painel' onClick={() => toggle(!status)}>Minha Conta</Link>
            
        </div>
    )
}

export default MobileMenu