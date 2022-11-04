import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { createUsers } from "../../services/api";
import HackLogo from '../../assets/hack2030.png'
import './style.css'

const SignIn = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [terms, setTerms] = useState(false)
    const [error, setError] = useState(false)
    const [tryAgain, setTryAgain] = useState(false)
    const navigate = useNavigate()
    const {login} = useContext(AuthContext)

    const createNewUser = async () => {
        if(name && email && password && address && terms){
            try {
                const positionStackBaseUrl = `http://api.positionstack.com/v1/forward?access_key=341623747b6417337b77a7e88d599ec0&query=${address}`
                fetch(positionStackBaseUrl)
                    .then((request) => request.json())
                    .then(async (data) =>{
                        const request = await createUsers(name, email, password, address, data.data[0].latitude, data.data[0].longitude)
                        await login(email, password)
                        navigate('/painel')
                    })
            } catch (error) {
                setTryAgain(false)
                setError(true)
            }
        }
        else{
            setTryAgain(true)
        }
    }

    return(
        <div className="SignIn">
            <div className="card-login">
                <img src={HackLogo} />
                <h4>Cadastre-se grátis!</h4>
                <div className="input-area">
                    <span className="label">Nome Completo</span>
                    <input 
                        type="text" 
                        className="inputText"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="input-area">
                    <span className="label">Email</span> 
                    <input 
                        type="text" 
                        className="inputText"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="input-area">
                    <span className="label">Endereço</span> 
                    <input 
                        type="text" 
                        className="inputText"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}/>
                </div>
                
                <div className="input-area">
                    <span className="label">Senha</span> 
                    <input 
                        type="password" 
                        className="inputText"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <div className="Confirm">
                    <input type="checkbox" className="CheckBox" onClick={() => setTerms(!terms)}/>
                    <label>Eu concordo com os Termos de Serviço e com a Política de Privacidade do Hack2030</label>
                </div>

                <button onClick={() => createNewUser()}>Cadastrar</button>

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
        </div>
    )
}

export default SignIn