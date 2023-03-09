import React, { useState } from "react";
import { useEffect } from "react";
import './style.css'

const SelectAnswer = ({getAnswers, index, opA, opB, opC, opD, opE}) => {
    const [valueInfo, setValueInfo] = useState()

    useEffect(() => {
        if(valueInfo === 'Selecione sua resposta'){
            valueInfo = 7000
        }

        
        getAnswers(valueInfo, index)
        
    }, [valueInfo])

    return(
        <div className="SelectAnswer">
            <select className="form-select" aria-label="Default select example" value={valueInfo} onChange={(e) => setValueInfo(e.target.value)}>
                <option defaultValue>Selecione sua resposta</option>
                <option value="1">{opA}</option>
                <option value="2">{opB}</option>
                <option value="3">{opC}</option>
                <option value="4">{opD}</option>
                <option value="5">{opE}</option>
            </select>
        </div>
    )
}

export default SelectAnswer