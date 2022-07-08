import React from 'react'
import "./Ventajas.scss"
import experiencias from "../../Assets/Desktop/experiencias.png"
import regalo from "../../Assets/Icons/Vector.svg"
import pack from "../../Assets/Icons/Vector (1).svg"
import descuento from "../../Assets/Icons/Vector (2).svg"


export default function Ventajas() {
    return (
        <div className="ventajas">

            <div className="ventajas-title">
                <h1>VENTAJAS DE SPORTBOX</h1>
            </div>

            <div className="ventajas-content">
                <div className="ventajas-content-img">
                    <img src={experiencias} alt="experiencias" />
                </div>

                <div className="ventajas-content-icons">
                    <div className="ventajas-content-icons-gift">
                        <img src={regalo} alt="regalo" />
                        <p>Mas de 150 experiencias de prestigio y calidad a escoger</p>
                    </div>
                    <div className="ventajas-content-icons-pack">
                        <img src={pack} alt="pack" />
                        <p>Te asesoramos tu pack en base a tus objeetivos y perfil de clientes</p>
                    </div>
                    <div className="ventajas-content-icons-descuentos">
                        <img src={descuento} alt="descuento" />
                        <p>Garantizamos los mejores descuetos pata que tus clientes y equipo comercial viva una experiencia inolvidable</p>
                    </div>
                </div>
            </div>

            <div className="ventajas-catalogo">
                <p>Nuestros expertos te ayyudarán a personalizar tu pack que sorprenderá a tu equipo, clientes y red comercial</p>
                <button>DESCUBRE NUESTRO CATÁLOGO</button>
            </div>

        </div>
    )
}
