import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import HackLogo from '../../assets/hack2030.png'
import './style.css'
import { AuthContext } from "../../contexts/auth";

const Login = () => {

    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [tryAgain, setTryAgain] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async () => {
        if(email && password){
            try {
                login(email, password)
                navigate('/painel')
            } catch (error) {
                setTryAgain(false)
                setError(true)
                console.log(error)
            }
        }
        else{
            setTryAgain(true)
        }
    }

    return(
        <div className="Login">
            <div className="LoginComunity">
                <h1>Seja bem vindo ao </h1>
                <img src={HackLogo} />

                <div className="InputArea">
                    <span>Email*</span> 
                    <input 
                        type="text" 
                        className="inputText"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                
                <div className="InputArea">
                    <span>Senha*</span> 
                    <input 
                        type="password" 
                        className="inputText"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <div className="Confirm">
                    <input type="checkbox" className="CheckBox"/>
                    <label>Lembrar Senha</label>
                </div>

                <button onClick={() => handleLogin()}>Cadastrar</button>

                <Link>Esqueci minha senha</Link>

                {error || tryAgain ?
                    tryAgain ?
                        <div>
                            <p>Preencha todos os campos do formulário...</p>
                        </div>
                        :
                        <div>
                            <p>Ocorreu um erro tente novamente...</p>
                        </div>
                    :
                    null
                }
            </div>

            <div className="SignInInfo">
                <h1>Ainda não tem uma conta?</h1>
                <p>Crie uma e venha conhecer mais sobre os Objetivos Sustentáveis! </p>
                <Link to='/participar/cadastro'>Cadastre-se!</Link>
            </div>
        </div>
    )
}

export default Login