import React, { createContext, useEffect, useState } from "react";

export const ResultContext = createContext()

export const ResultProvider = ({children}) => {

    const [result, setResult] = useState()

    useEffect(() =>{
        const resultRetrieve = localStorage.getItem('userResult')
        if(resultRetrieve){
            setResult(resultRetrieve.split(','))
        }

    }, [])

    const storeResult = async (resultArray) => {
        localStorage.setItem('userResult', resultArray)
        setResult(resultArray)
    }

    return(
        <ResultContext.Provider value={
            {
                result,
                storeResult
            }
        }>
            {children}
        </ResultContext.Provider>
    )
}