import React, { useContext } from "react";
import './style.css'

import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import HackLogo from '../../assets/hack2030.png'


const MainPanel = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const logOutHandler = () =>{
        logout()
        navigate('/participar/login')
    }
    if(user){
        return(
            <div className="MainPanel">
                <div className="MainPanelContainer">
                    <img src={HackLogo} />
                    <p>Olá, bem vindo {user.name}</p>

                    <p>Responda ao formulário individual ou cadastre uma iniciativa</p>

                    <p></p>
    
                    <Link to='/quiz'>Formulário Individual</Link>
                    <Link to='/quiz'>Cadastrar Iniciativa</Link>

                    <button onClick={() => logOutHandler()}>Sair da conta</button>
    
                </div>
            </div>
        )
    }
}

export default MainPanel