import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { createUsers } from "../../services/api";
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
                const request = await createUsers(name, email, password, address)
                login(email, password)
                navigate('/painel')
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
            <div className="SignInComunity">

                <div className="InputArea">
                    <span>Nome Completo</span>
                    <input 
                        type="text" 
                        className="inputText"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="InputArea">
                    <span>Email</span> 
                    <input 
                        type="text" 
                        className="inputText"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="InputArea">
                    <span>Endereço</span> 
                    <input 
                        type="text" 
                        className="inputText"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}/>
                </div>
                
                <div className="InputArea">
                    <span>Senha</span> 
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