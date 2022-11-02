import React from "react";
import './style.css'

const ODSPoints = ({image, points, color, description, id}) => {
    return(
        <div className="ODSPoints" style={{backgroundColor: color}}>
            <img src={image} alt="" />
            { description ?
                 <div className="TextArea">
                    <h1>Pontuação</h1>
                    <p>{points} %</p>
                    <p>{description}</p>
                    <a target="_blank" href={`https://odsbrasil.gov.br/objetivo/objetivo?n=${id}`}>Estágio Atual no Brasil e indicadores</a>
                </div>
                :
                <p>{points} %</p>
            }
           
        </div>
    )
}

export default ODSPoints