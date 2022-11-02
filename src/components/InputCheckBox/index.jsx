import React, { useEffect, useState } from "react";
import './style.css'


const InputCheckBox = ({ title, options, getCheckBoxAnswers, checkBoxIndex }) => {

    const [answers, setAnswers] = useState(new Array(options.length).fill(0))

    const getAnswers = (value, index) => {
        var auxArray = [...answers]
        auxArray.splice(index, 1, value)
        setAnswers(auxArray)
    }

    useEffect(() =>{
        getCheckBoxAnswers(answers, checkBoxIndex)
    }, [answers])
    
    return(
        <div className="InputCheckBox">
            {options && title ?
                <>
                    <p>{title}</p>
                    {options.map((option, key) => {
                        return(
                            <div key={key} className="CheckBoxArea">
                                <input type="checkbox" onClick={(e) => getAnswers(e.target.checked, key)}/>
                                <label>{option}</label>
                            </div>
                        )
                    })}
                </>
                :
                null
            }
        </div>
    )
}

export default InputCheckBox