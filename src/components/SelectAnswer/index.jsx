import React, { useState } from "react";
import './style.css'

const SelectAnswer = ({getAnswers, ods}) => {

    const clickHandler = (value) => {

        if(value === 'Selecione sua resposta'){
            value = undefined
        }
        getAnswers(value, ods-1)
    }

    return(
        <div className="SelectAnswer">
            <select className="form-select" aria-label="Default select example" onClick={(e) => clickHandler(e.target.value)}>
                <option defaultValue>Selecione sua resposta</option>
                <option value="1">Opção A</option>
                <option value="2">Opção B</option>
                <option value="3">Opção C</option>
                <option value="4">Opção D</option>
                <option value="5">Opção E</option>
            </select>
        </div>
    )
}

export default SelectAnswer