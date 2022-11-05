import React, { useEffect, useState } from "react";
import './style.css'

const InputText = ({ label, getTextAnswers, index, description, placeholder }) => {
    const [value, setValue] = useState('')

    useEffect(() =>{
        getTextAnswers(value, index)
    }, [value])

    return(
        <div className="InputText">
            <label>{label} <p className='input-text-description'>{description}</p></label>
            
            <input 
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default InputText