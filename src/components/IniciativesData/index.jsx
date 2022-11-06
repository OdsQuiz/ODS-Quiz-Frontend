import React from "react";
import './style.css'

const IniciativesData = ({ dataObject, color, mainOdsIcon }) => {
    return(
        <div className="IniciativesData">
             <div className="IniciativeTitle" style={{backgroundColor: color}}>
                <h2>{dataObject.name}</h2>
             </div>
             <div className="IniciativeContent">
                <div className="IniciativeColumn">
                    <div><p>Pessoas Impactadas</p><span>{dataObject.impact}</span></div>
                    <div><p>Tipo de Iniciativa</p><span>{dataObject.type}</span></div>
                </div>
                <div className="IniciativeColumn">
                    <div><p>Pontos Obtidos</p><span>{dataObject.points}</span></div>
                    <div><p>Principal ODS Trabalhado</p><img src={mainOdsIcon} /></div>
                </div>
             </div>
        </div>
    )
}

export default IniciativesData