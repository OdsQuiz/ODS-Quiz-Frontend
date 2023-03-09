import React, { useEffect, useState } from "react";
import './style.css'
import { IMaskInput } from "react-imask";

const InputText = ({ label, value, setAnswers, description, placeholder, isCep}) => {
    return(
        <div className="InputText">
            <label>{label} <p className='input-text-description'>{description}</p></label>
            { isCep ?
                <IMaskInput
                    className="inputText"
                    mask="00000000"
                    value={value}
                    onAccept={(value) => setAnswers(value)}
                />
                :
                <input 
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => setAnswers(e.target.value)}
                />
            }
        </div>
    )
}

export default InputText