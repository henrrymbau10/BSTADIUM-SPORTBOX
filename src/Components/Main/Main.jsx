import React from 'react'
import "./Main.scss"
import sevilla from "../../Assets/Desktop/sevilla-logo-escudo.svg"
import granada from "../../Assets/Desktop/ESCUDO-ROJO CON FONDO.svg"
import bilbao from "../../Assets/Desktop/logo bilbao.svg"
import madrid from "../../Assets/Desktop/real-madrid-logo-escudo-1.svg"
import atletico from "../../Assets/Desktop/Escudo Atletico Madrid.svg"
import barsa from "../../Assets/Desktop//Barcelona-logo-escudo.svg"
import sociedad from "../../Assets/Desktop/Escudo Real Sociedad.svg"
import betis from "../../Assets/Desktop/escudo betis.svg"
import valladolid from "../../Assets/Desktop/Escudo Real Valladolid.svg"
import marcas from "../../Assets/Desktop/Group 135.svg"
import marcasM from "../../Assets/Mobile/Marcas-mobile.svg"


export default function Main() {
    return (
        <div className="main">

            <div className="main-escudos">
                <img src={sevilla} alt="escudo-equipo" />
                <img src={granada} alt="escudo-equipo" />
                <img src={bilbao} alt="escudo-equipo" />
                <img src={madrid} alt="escudo-equipo" />
                <img src={atletico} alt="escudo-equipo" />
                <img src={barsa} alt="escudo-equipo" />
                <img src={sociedad} alt="escudo-equipo" />
                <img src={betis} alt="escudo-equipo" />
                <img src={valladolid} alt="escudo-equipo" />
            </div>
            <div className="main-experiencias">
                <h1>MÁS DE 150 EXPERIENCIAS EXCLUSIVAS DE LOS CLUBES DE FÚTBOL MAS RECONOCIDOS</h1>
                <p>Marca la diferencia en tu sector con la mejor selección de incentivos para captación y fidelización</p>
            </div>
            <div className="main-video-container">
                <div className="main-video">

                </div>
            </div>
            <div className="main-marcas">
                <p>Empresas que confían nosotros</p>
                <img className="main-marcas-desktop" src={marcas} alt="marcas" />
                <img className="main-marcas-mobile" src={marcasM} alt="marcasM" />
            </div>

        </div>
    )
}
