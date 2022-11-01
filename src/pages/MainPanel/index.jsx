import React, { useContext } from "react";
import './style.css'

import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";


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
                    <p>Ola, bem vindo {user.name}</p>

                    <p>Responda ao formulário</p>
    
                    <Link to='/quiz'>Acessar formulário</Link>

                    <button onClick={() => logOutHandler()}>Sair da conta</button>
    
                </div>
            </div>
        )
    }
}

export default MainPanel