import React, { useEffect, useState } from "react";
import './style.css'
import 'leaflet/dist/leaflet.css'

import IniciativesData from "../../components/IniciativesData";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import { getIniciatives } from "../../services/api";

const center = [-22.281719, -42.531901]

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

                <div className="Filtro">
                    <h2>Filtre as iniciativas por município</h2>

                    <div className="Forms">
                            <select name="Select1" id="Select1">
                                <option value="1">Selecione um município</option>
                                <option value="2">Nova Friburgo</option>
                                <option value="3">Rio de Janeiro</option>
                            </select>
                            
                        
                    </div>
                </div>
                
                <h1>Mapa das Iniciativas Cadastradas</h1>
                <div className="DataContainer">
                    {data.map((eachData, key) => {
                        return(
                            <IniciativesData key={key} dataObject={eachData}/>
                        )
                    })
                    }
                </div>

                
            </div>
        )
    }
}

export default DataShow