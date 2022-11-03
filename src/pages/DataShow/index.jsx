import React from "react";
import './style.css'
import 'leaflet/dist/leaflet.css'
import Ping from "../../assets/ping.svg"

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

// import L from "Leaflet";

const center = [-22.906930495454464, -43.18279630247476]

// const markerIcon = () => new L.Icon({
//     iconUrl: require("resources/images/marker.png"),
//     iconSize: [35, 45],
// });

const DataShow = () => {
    return(
        <div className="DataShow">
            <h1>Mapa das iniciativas cadastradas</h1>
            <MapContainer style={{width: '60vw', height: '60vh', marginTop:'3%', borderRadius: '20px'}} center={center} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                
            </MapContainer>
        </div>
    )
}

export default DataShow