import React from "react";
import './style.css'

const SelectAnswer = () => {
    return(
        <div className="SelectAnswer">
            <select class="form-select" aria-label="Default select example">
                <option selected>Selecione sua resposta</option>
                <option value="1">Opção A</option>
                <option value="2">Opção B</option>
                <option value="3">Opção C</option>
                <option value="4">Opção D</option>
            </select>
        </div>
    )
}

export default SelectAnswer