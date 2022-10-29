import React from "react";
import './style.css'

import { Link } from "react-router-dom";

import SelectAnswer from "../../components/SelectAnswer";

const Quiz = () => {
    return(
        <div className="Quiz">
            <div className="QuizContainer">
                <div className="QuizArea">
                    <p>Pergunta 1: ...</p>
                    <SelectAnswer />
                </div>

                <div className="QuizArea">
                    <p>Pergunta 2: ...</p>
                    <SelectAnswer />
                </div>

                <div className="QuizArea">
                    <p>Pergunta 3: ...</p>
                    <SelectAnswer />
                </div>

                <div className="QuizArea">
                    <p>Pergunta 4: ...</p>
                    <SelectAnswer />
                </div>

                <div className="QuizArea">
                    <p>Pergunta 5: ...</p>
                    <SelectAnswer />
                </div>

                <Link to='/resultado'>Enviar</Link>

            </div>
            
        </div>
    )
}

export default Quiz