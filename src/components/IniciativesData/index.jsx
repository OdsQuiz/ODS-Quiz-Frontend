import React from "react";
import './style.css'

const IniciativesData = ({ dataObject }) => {
    return(
        <div className="IniciativesData">
             <h2>{dataObject.name}</h2>
             <p>Pessoas impactadas: {dataObject.impact}</p>
             <p>Tipo de Iniciativa: {dataObject.type}</p>
             <p>Pontos obtidos: {dataObject.points}</p>
             <p>Principal ODS trabalhado: {dataObject.mainOds}</p>
        </div>
    )
}

export default IniciativesData