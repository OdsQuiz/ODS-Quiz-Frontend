import React, { useEffect, useState } from "react";
import './style.css'

const InputText = ({ label, getTextAnswers, index }) => {
    const [value, setValue] = useState('')

    useEffect(() =>{
        getTextAnswers(value, index)
    }, [value])

    return(
        <div className="InputText">
            <label>{label}</label>
            <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default InputText