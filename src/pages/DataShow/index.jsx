import React, { useEffect, useState } from "react";
import './style.css'
import 'leaflet/dist/leaflet.css'

import IniciativesData from "../../components/IniciativesData";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import obs1 from '../../assets/SDG-1.svg'
import obs2 from '../../assets/SDG-2.svg'
import obs3 from '../../assets/SDG-3.svg'
import obs4 from '../../assets/SDG-4.svg'
import obs5 from '../../assets/SDG-5.svg'
import obs6 from '../../assets/SDG-6.svg'
import obs7 from '../../assets/SDG-7.svg'
import obs8 from '../../assets/SDG-8.svg'
import obs9 from '../../assets/SDG-9.svg'
import obs10 from '../../assets/SDG-10.svg'
import obs11 from '../../assets/SDG-11.svg'
import obs12 from '../../assets/SDG-12.svg'
import obs13 from '../../assets/SDG-13.svg'
import obs14 from '../../assets/SDG-14.svg'
import obs15 from '../../assets/SDG-15.svg'
import obs16 from '../../assets/SDG-16.svg'
import obs17 from '../../assets/SDG-17.svg'
import {Icon} from 'leaflet'

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import { getIniciatives } from "../../services/api";

import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import LoadingPage from "../LoadingPage";

const center = [-22.281719, -42.531901]

const DataShow = () => {
    const { loading, setLoading} = useContext(AuthContext)
    const images = [obs1, obs2, obs3, obs4, obs5, obs6, obs7, obs8, obs9, obs10, obs11, obs12, obs13, obs14, obs15, obs16, obs17]
    const colors = [
        "#E5243B", "#DDA83A", "#4C9F38", "#C5192D", "#FF3A21", "#26BDE2", "#FCC30B", "#A21942", "#FD6925",
        "#DD1367", "#FD9D24", "#BF8B2E", "#3F7E44", "#0A97D9", "#56C02B", "#00689D", "#19486A"
    ]
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await getIniciatives()
            setLoading(false)
            setData(response.data)
        }
        
        fetchData()
    },[])

    return(
        <div className="DataShow">
            {loading ?
                <LoadingPage />
                :
                <>
                    <MapContainer attributionControl={false} style={{width: '99.3vw', height: '60vh'}} center={center} zoom={13} scrollWheelZoom={false} >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {data.map((eachData, key) => {
                        if(eachData.lat && eachData.lon){
                            return(
                                <Marker 
                                    key={key} 
                                    position={[eachData.lat, eachData.lon]}
                                    icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                                    <Popup>
                                        {eachData.name}
                                    </Popup>
                                </Marker>
                            )
                        }
                    })
                    }

                    </MapContainer>

                    {/* <div className="Filtro">
                        <h2>Filtre as iniciativas por município</h2>

                        <div className="Forms">
                                <select name="Select1" id="Select1">
                                    <option value="1">Selecione um município</option>
                                    <option value="2">Nova Friburgo</option>
                                    <option value="3">Rio de Janeiro</option>
                                </select> 
                        </div>
                    </div> */}
                    
                    <h1>Mapa das Iniciativas Cadastradas</h1>
                    <div className="DataContainer">
                        {data.map((eachData, key) => {
                            return(
                                <IniciativesData key={key} dataObject={eachData} color={colors[parseInt(eachData.mainOds-1)]} mainOdsIcon={images[parseInt(eachData.mainOds-1)]}/>
                            )
                        })
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default DataShow