import React, { useState, useEffect } from "react";
import './style.css'

import RankingLine from "../../components/RankingLine";

import Agent from "../../assets/agent.svg"
import People from "../../assets/people.svg"
import EnterPrise from "../../assets/enterprise.svg"
import Rank from "../../assets/trophy.svg"
import infoLogo from "../../assets/info.svg"
import { getIniciatives, getUsers } from "../../services/api";

const Ranking = () => {

    const [userAverage, setUserAverage] = useState()
    const [iniciativesAverage, setIniciativesAverage] = useState()
    const [nivelComunidade, setNivelComunidade] = useState()
    const [nivelIniciatives, setNivelIniciatives] = useState('28%')

    useEffect(() => {
        const fetchData = async () => {
            let sumUser = 0
            let sumIniciatives = 0
            let total = 22 * 400

            const requestUser = await getUsers()
            const requestIniciatives = await getIniciatives()

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

    console.log(nivelComunidade)
    console.log(nivelIniciatives)
    
    if(nivelComunidade && userAverage && iniciativesAverage){
        return(
            <div className="termometro-container">
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
                
            </div>
        )
    }
}

export default Ranking