import React from 'react'
import "./Carousel.scss"


export default function Carousel() {
    return (
        <div className="carousel">

            <div className="carousel-text">
                <h1>PORQUE EL FÚTBOL ES MUCHO MÁS QUE FÚTBOL</h1>
                <p>Utiliza nuestras experiencias como palanca comercial</p>
            </div>

            <div className="carousel-imgs">
                <div className="carousel-div">
                    <h2>TOURS INTERACTIVOS + PLANES DE OCIO</h2>
                    <button>VER VÍDEO</button>
                </div>
                <div className="carousel-div2">
                    <h2>ENTRADAS EXCLUSIVAS</h2>
                    <button>VER VÍDEO</button>
                </div>
            </div>
            <div className="carousel-puntos">
                <h1>...</h1>
            </div>

        </div>
    )
}
