import React, { useState, useEffect } from "react";
import './style.css'

import { getIniciatives, getUsers } from "../../services/api";

import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import LoadingPage from "../LoadingPage";

const Ranking = () => {

    const [userAverage, setUserAverage] = useState(0)
    const [iniciativesAverage, setIniciativesAverage] = useState(0)
    const [nivelComunidade, setNivelComunidade] = useState(0)
    const [nivelIniciatives, setNivelIniciatives] = useState('28%')
    const { loading, setLoading } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            let sumUser = 0
            let sumIniciatives = 0
            let total = 22 * 400

            setLoading(true)
            const requestUser = await getUsers()
            const requestIniciatives = await getIniciatives()
            setLoading(false)

            requestUser.data.map((eachUser) => {
                sumUser += eachUser.points
            })

            requestIniciatives.data.map((eachIniciatives) => {
                sumIniciatives += eachIniciatives.points
            })

            let averageUser = sumUser / requestUser.data.length
            let averageIniciatives = sumIniciatives /requestIniciatives.data.length

            
            setUserAverage(averageUser)
            setIniciativesAverage(averageIniciatives)

            setNivelComunidade(`${(averageUser/total) * 100}%`)
            // setNivelIniciatives(`${(averageIniciatives/total) * 100}%`)
        }

        fetchData()
    },[])
    
    return(
        <div className="termometro-container">
            {loading ?
                <LoadingPage />
                :
                <>
                    <div className="termometro-content">
                        <div className="termometro-title">
                            Comunidade
                        </div>
                        <div className="termometro-column">
                            <div className="termometro-medidas">
                                <span>MÁX</span>
                                <span>MIN</span>
                            </div>
                            <div className="termometro">
                                <div className="nivel-media-comunidade" style={{height: nivelComunidade}}></div>
                            </div>
                            
                                <span className="termometro-media-display" style={{height: nivelComunidade}}><p>Média: {parseInt(userAverage)}</p></span>
                            
                        </div>
                    </div>
                    <div className="termometro-content">
                    <div className="termometro-title">
                            Instituição
                        </div>
                        <div className="termometro-column">
                            <div className="termometro-medidas">
                                <span>MÁX</span>
                                <span>MIN</span>
                            </div>
                            <div className="termometro">
                                <div className="nivel-media-instituicao" style={{height: nivelIniciatives}}></div>
                            </div>

                            <span className="termometro-media-display" style={{height: nivelIniciatives}}><p>Média: {parseInt(iniciativesAverage)}</p></span>
                        </div>
                    </div>
                </>
            }
            
        </div>
    )
}

export default Ranking