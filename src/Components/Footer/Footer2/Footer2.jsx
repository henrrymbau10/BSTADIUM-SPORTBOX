import React from 'react'
import "./Footer2.scss"
import sobre from "../../../Assets/Icons/Vectorsobre.svg"

export default function Footer2() {
    return (
        <div className="contacto">

            <div className="contacto-title">
                <h1>CONTACTA CON NOSOTROS PARA CONOCER MÁS DE NUESTROS PRODUCTOS Y SERVICIOS</h1>
            </div>
            <div className="contacto-button">
                <img src={sobre} alt="sobre" />
                <p>HOLA@SPORTBOX.ES</p>
            </div>
        </div>
    )
}
