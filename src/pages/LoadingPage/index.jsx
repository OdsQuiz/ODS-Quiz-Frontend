import React from "react";
import './style.css'

import sdgCircle from '../../assets/sdgCircle.png'

const LoadingPage = () => {
    return(
        <div className="Loading">
            <div className="home-column img-column">
                <img  className='logo-center-rotating' src="https://cdn.discordapp.com/attachments/1037486089801306113/1037500528248246332/odsquizlogotext.png" alt="" />
                <img src={sdgCircle} className='rotating' alt="" />
            </div>
            <p className="text">Carregando...</p>
        </div>
    )
}

export default LoadingPage