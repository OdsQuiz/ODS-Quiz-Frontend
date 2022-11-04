import React, { useEffect, useState } from "react";
import './style.css'
import 'leaflet/dist/leaflet.css'
import Ping from "../../assets/ping.svg"

import IniciativesData from "../../components/IniciativesData";

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import { getIniciatives } from "../../services/api";

// import L from "Leaflet";

const center = [-22.906930495454464, -43.18279630247476]

// const markerIcon = () => new L.Icon({
//     iconUrl: require("resources/images/marker.png"),
//     iconSize: [35, 45],
// });

const DataShow = () => {

    let [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const request = await getIniciatives()
            setData(request.data)
        }

        fetchData()
    },[])

    if(data){
        return(
            <div className="DataShow">
                <MapContainer attributionControl={false} style={{width: '99.3vw', height: '60vh'}} center={center} zoom={10} scrollWheelZoom={false} >
                    <TileLayer
                        
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
    
                    
                </MapContainer>
    
                <h1>Mapa das Iniciativas Cadastradas</h1>
                <div className="DataContainer">
                    {data.map((eachData, key) => {
                        return(
                            <IniciativesData dataObject={eachData}/>
                        )
                    })
                    }
                </div>
                
            </div>
        )
    }
}

export default DataShow