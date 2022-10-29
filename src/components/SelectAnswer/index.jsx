import React from "react";
import './style.css'

const SelectAnswer = () => {
    return(
        <div className="SelectAnswer">
            <select class="form-select" aria-label="Default select example">
                <option selected>Selecione sua resposta</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
            </select>
        </div>
    )
}

export default SelectAnswer