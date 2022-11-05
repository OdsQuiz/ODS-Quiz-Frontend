import React, { useContext } from "react";
import './style.css'

import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import HackLogo from '../../assets/hack2030.png'
import logoutIcon from '../../assets/logout.svg'


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
                    <p className="panel-username">Olá, seja bem vindo(a) {user.name}!</p>

                    <span>Responda ao quiz ou cadastre uma iniciativa</span>

                    <Link to='/quiz/individual'>Quiz</Link>
                    <Link to='/quiz/iniciativa'>Cadastrar Iniciativa</Link>
                    {/* <Link>Minhas Iniciativas</Link> */}

                    <button onClick={() => logOutHandler()}> <img src={logoutIcon} alt="" /> Sair da conta</button>
    
                </div>
            </div>
        )
    }
}

export default MainPanel