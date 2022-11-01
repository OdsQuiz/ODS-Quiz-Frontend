import React from "react";
import './style.css'

const ODSPoints = ({image, points, color, description}) => {
    return(
        <div className="ODSPoints" style={{backgroundColor: color}}>
            <img src={image} alt="" />
            { description ?
                 <div className="TextArea">
                    <h1>Pontuação</h1>
                    <p>{points} pts</p>
                    <p>{description}</p>
                    <a href="https://brasil.un.org/pt-br/sdgs/6">Estágio Atual no Brasil e indicadores</a>
                </div>
                :
                <p>{points} pts</p>
            }
           
        </div>
    )
}

export default ODSPoints