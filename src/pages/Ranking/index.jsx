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

    const [dataUsers, setDataUsers] = useState()
    const [dataIniciatives, setDataIniciatives] = useState()


    useEffect(() => {
        const fetchData = async () => {
            const requestUser = await getUsers()
            const requestIniciatives = await getIniciatives()
            setDataUsers(requestUser.data)
            setDataIniciatives(requestIniciatives.data)
        }

        fetchData()
    },[])

    if(dataUsers && dataIniciatives){
        return(
            <div className="Ranking">
                <div className="RankTextImage">
                    <img src={Rank} alt="" />
                    <h1>Ranking </h1>
                </div>
                
                <div className="RanksContainer">
                    <div className="RankA">

                        <div className="ImgText"><img src={People} alt="" />Comunidade</div>
                        
                        <div className="Rank">
                            {dataUsers.map((eachUser, key) => {
                                return(
                                    <RankingLine position={key+1} name={eachUser.name} points={eachUser.points}/>
                                )
                            })}
                        </div>
                    </div>


                    <div className="RankA">
                        <div className="ImgText">
                            <img src={EnterPrise} alt="" />Instituição
                        </div>

                        <div className="Rank">
                        {dataIniciatives.map((eachIniciatives, key) => {
                                return(
                                    <RankingLine position={key+1} name={eachIniciatives.name} points={eachIniciatives.points}/>
                                )
                            })}
                        </div>
                    </div>      
                </div>

                {/* <div className="BulletinBoard">
                    <div className="BulletinBoardIn">
                        <img src={infoLogo} alt="" />
                        <p>As colocações acima são referentes ao quiz dos ODS. Nesse sentido, os primeiros colocados são os que melhores pontuaram na perguntas referentes as ODS de sua rotina. </p>
                    </div> 
                </div> */}
            </div>
        )
    }
}

export default Ranking