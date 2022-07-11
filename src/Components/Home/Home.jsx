import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.scss"

export default function Home() {
    return (
        <div className="home">
            <Navbar />

            <div className="title">
                <h1><b className="verde">BE</b> FUN. <b className="verde">BE</b> SOCIAL.</h1>
                <h1 className="bstadium-text">BSTADIUM</h1>
            </div>
            <div className="subtitle">
                <h3>IMPULSA TU NEGOCIO Y SORPRENDE A <b className="amarillo">TUS CLIENTES Y A TU EQUIPO COMERCIAL</b></h3>
            </div>
            <div className="experiencias">
                <h2>REGALA <b className="verde">EXPERIENCIAS</b> DESDE <b id="amarillo">12€</b></h2>
            </div>

        </div>
    )
}
