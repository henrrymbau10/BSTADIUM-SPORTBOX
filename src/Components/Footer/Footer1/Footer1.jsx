import React from 'react'
import "./Footer1.scss"
import imgfooter from "../../../Assets/Desktop/footerimg.png"
import entradas from "../../../Assets/Icons/Group.svg"
import pelota from "../../../Assets/Icons/Group 139.svg"
import deporte from "../../../Assets/Icons/Group 136.svg"
import gastro from "../../../Assets/Icons/Group 140.svg"
import turismo from "../../../Assets/Icons/Group (1).svg"
import ocio from "../../../Assets/Icons/Group 137.svg"

export default function Footer1() {
    return (
        <div className="footer1">

            <div className="footer1-content">
                <div className="footer1-title">
                    <h1>Descubre el nuevo marketplace de ocio y deporte</h1>
                </div>

                <div className="footer1-iconos-verdes-container">
                    <div className="footer1-iconos-verdes">
                        <img src={entradas} alt="entradas" />
                        <p>ENTRADAS PARTIDOS Y TOURS</p>
                    </div>
                    <div className="footer1-iconos-verdes2">
                        <img src={pelota} alt="pelota" />
                        <p>ENTRENAMIENTOS Y PARTIDOS EN CAMPOS OFICIALES</p>
                    </div>
                </div>

                <div className="footer1-plus">
                    <h1>+</h1>
                </div>

                <div className="footer1-iconos-blancos-container">
                    <div className="footer1-iconos-blancos">
                        <img src={deporte} alt="deporte" />
                        <p>DEPORTE</p>
                    </div>
                    <div className="footer1-iconos-blancos">
                        <img src={gastro} alt="gastro" />
                        <p>GASTRO</p>
                    </div>
                    <div className="footer1-iconos-blancos">
                        <img src={turismo} alt="turismo" />
                        <p>TURISMO</p>
                    </div>
                    <div className="footer1-iconos-blancos">
                        <img src={ocio} alt="ocio" />
                        <p>OCIO</p>
                    </div>
                </div>

            </div>

            <div className="footer1-img">
                <img src={imgfooter} alt="img-footer" />
            </div>

        </div>
    )
}
