import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Form = () => {
    return(
        <div className="Form">
            <form action="" method="POST" className="FormComunity">

                <div className="InputArea">
                    <spam>Nome Completo</spam>
                    <input type="text" className="inputText"/>
                </div>

                <div className="InputArea">
                    <spam>Email</spam> 
                    <input type="text" className="inputText"/>
                </div>
                
                <div className="InputArea">
                    <spam>Senha</spam> 
                    <input type="text" className="inputText"/>
                </div>
                
                <div className="Confirm">
                    <input type="checkbox" className="CheckBox" />
                    <label>Eu concordo com os Termos de Serviço e com a Política de Privacidade do Hack2030</label>
                </div>
                <Link to='/quiz'>Cadastrar</Link>
            </form>
        </div>
    )
}

export default Form