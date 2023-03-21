import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import HackLogo from '../../assets/hack2030.png'
import './style.css'
import { AuthContext } from "../../contexts/auth";
import LoadingPage from "../LoadingPage";

const Login = () => {

    const { login, loading, setLoading } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [tryAgain, setTryAgain] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async () => {
        if(email && password){
            try {
                setLoading(true)
                await login(email, password)
                navigate('/painel')
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setTryAgain(false)
                setError(true)
            }
        }
        else{
            setTryAgain(true)
        }
    }

    console.log(error)

    return(
        <div className="Login">
            {loading ?
                <LoadingPage />
                :
                <div className="card-login">
                    <img src={HackLogo} />
                    <h4>Já possui uma conta? Faça o login</h4>

                    <div className="input-area">
                            <span className="label">Email*</span> 
                            <input 
                                type="text" 
                                className="inputText"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-area">
                            <span className="label">Senha*</span> 
                            <input 
                                type="password" 
                                className="inputText"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    
                    <button onClick={() => handleLogin()}>Entrar</button>
                    {error ?
                        <div>
                            <p>Email ou senha inválidos...</p>
                        </div>
                        :
                        null
                    }
                    {tryAgain ?
                        <div>
                            <p>Preencha todos os campos do formulário...</p>
                        </div>    
                        :
                        null
                    }
                    
                    <Link className='cadastre' to='/participar/cadastro'>Não possui uma conta? Cadastre-se aqui</Link>
                    {/* <Link className="forgot-password">Esqueci minha senha</Link> */}
                </div>
            }
        </div>
    )
}

export default Login