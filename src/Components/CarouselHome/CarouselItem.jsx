import React from "react";
import ImageSlider from "./CarouselHome";

import image1 from "../../Assets/Desktop/image1.png";
import image2 from "../../Assets/Desktop/image2.png";
import image3 from "../../Assets/Desktop/image3.png";
import image5 from "../../Assets/Desktop/image5.png";
import image6 from "../../Assets/Desktop/image6.png";
import Navbar from "../Navbar/Navbar";
import './CarouselHome.scss'

const Application = () => {
    return (
        <>
            <div>
                <ImageSlider images={[image1, image2, image3, image5, image6]}>
                    <Navbar />
                    <div className="title">
                        <h1><b className="verde">BE</b> FUN. <b className="verde">BE</b> SOCIAL.</h1>
                        <h1 className="bstadium-text">BSTADIUM</h1>
                    </div>
                    <div className="subtitle">
                        <h3>IMPULSA TU NEGOCIO Y SORPRENDE A <b className="amarillo">TUS CLIENTES Y A TU EQUIPO COMERCIAL</b></h3>
                    </div>
                    <div className="experiencias">
                        <h2>REGALAR <b className="verde">EXPERIENCIAS</b> DESDE <b id="amarillo">12€</b></h2>
                    </div>
                </ImageSlider>
            </div>
        </>
    );
};

export default Application;
